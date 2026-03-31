import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  validateContactPayload,
  escapeHtml,
  type ContactPayload,
} from "@/lib/contact-validation";

// ─── ENV startup validation ───────────────────────────────────────────────────
// Runs once at module load (cold start). Surfaces misconfiguration early in
// Vercel Function logs before any request is processed.

const REQUIRED_ENV = ["RESEND_API_KEY", "CONTACT_TO_EMAIL", "CONTACT_FROM_EMAIL"] as const;

for (const key of REQUIRED_ENV) {
  if (!process.env[key]) {
    console.warn(`[contact] startup: ${key} is not set — email delivery will fail at runtime`);
  }
}

// ─── Types ────────────────────────────────────────────────────────────────────

type ApiResponse = { ok: true } | { ok: false; error: string };

const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 3;

const ipStore = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  const timestamps = (ipStore.get(ip) ?? []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );

  if (timestamps.length >= RATE_MAX) return true;

  ipStore.set(ip, [...timestamps, now]);
  return false;
}

// ─── Email builder ────────────────────────────────────────────────────────────

function buildEmailHtml(data: ContactPayload): string {
  const name = escapeHtml(data.name);
  const phone = escapeHtml(data.phone);
  const email = escapeHtml(data.email);
  const city = data.city ? escapeHtml(data.city) : "–";
  const message = data.message ? escapeHtml(data.message) : "–";

  return `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><title>Neue Kontaktanfrage – HSA</title></head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1f2a36;">
  <h2 style="color: #1e3a5f; border-bottom: 2px solid #1e3a5f; padding-bottom: 8px;">
    Neue Kontaktanfrage über seniorenbetreuung.de
  </h2>

  <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #e6eaf0; font-weight: bold; width: 140px;">Name</td>
      <td style="padding: 10px 0; border-bottom: 1px solid #e6eaf0;">${name}</td>
    </tr>
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #e6eaf0; font-weight: bold;">Telefon</td>
      <td style="padding: 10px 0; border-bottom: 1px solid #e6eaf0;">
        <a href="tel:${phone}" style="color: #1e3a5f;">${phone}</a>
      </td>
    </tr>
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #e6eaf0; font-weight: bold;">E-Mail</td>
      <td style="padding: 10px 0; border-bottom: 1px solid #e6eaf0;">
        <a href="mailto:${email}" style="color: #1e3a5f;">${email}</a>
      </td>
    </tr>
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #e6eaf0; font-weight: bold;">Stadtgebiet</td>
      <td style="padding: 10px 0; border-bottom: 1px solid #e6eaf0;">${city}</td>
    </tr>
    <tr>
      <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Nachricht</td>
      <td style="padding: 10px 0; white-space: pre-wrap;">${message}</td>
    </tr>
  </table>

  <p style="margin-top: 24px; font-size: 12px; color: #6b7885;">
    Diese Nachricht wurde automatisch über das Kontaktformular auf seniorenbetreuung.de gesendet.
  </p>
</body>
</html>
  `.trim();
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (isRateLimited(ip)) {
    console.warn("[contact] rate limit hit", { ip });
    return NextResponse.json(
      { ok: false, error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
      { status: 429 }
    );
  }

  const contentType = request.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { ok: false, error: "Ungültige Anfrage." },
      { status: 400 }
    );
  }

  // Check required environment variables
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, error: "E-Mail-Versand ist momentan nicht verfügbar." },
      { status: 500 }
    );
  }

  if (!toEmail) {
    console.error("[contact] CONTACT_TO_EMAIL is not set");
    return NextResponse.json(
      { ok: false, error: "E-Mail-Versand ist momentan nicht verfügbar." },
      { status: 500 }
    );
  }

  if (!fromEmail) {
    console.error("[contact] CONTACT_FROM_EMAIL is not set");
    return NextResponse.json(
      { ok: false, error: "E-Mail-Versand ist momentan nicht verfügbar." },
      { status: 500 }
    );
  }

  // Parse body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Ungültige Anfrage." },
      { status: 400 }
    );
  }

  // Validate
  const validation = validateContactPayload(body);
  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, error: validation.error },
      { status: 400 }
    );
  }

  const { data } = validation;

  // Send email
  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `Kontaktanfrage von ${data.name}`,
      html: buildEmailHtml(data),
    });

    console.log("[contact] Email sent successfully");
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[contact] Failed to send email", { error: message });
    return NextResponse.json(
      { ok: false, error: "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}
