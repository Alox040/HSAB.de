// ─── Types ────────────────────────────────────────────────────────────────────

export interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  city?: string;
  message?: string;
}

export type ValidationResult =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string };

// ─── Validation ───────────────────────────────────────────────────────────────

export function validateContactPayload(body: unknown): ValidationResult {
  if (typeof body !== "object" || body === null) {
    return { ok: false, error: "Ungültige Anfrage." };
  }

  const b = body as Record<string, unknown>;

  if (typeof b.name !== "string" || b.name.trim().length < 2 || b.name.trim().length > 100) {
    return { ok: false, error: "Name ist ungültig." };
  }

  if (typeof b.phone !== "string") {
    return { ok: false, error: "Telefonnummer fehlt." };
  }
  const phoneTrimmed = b.phone.trim();
  if (phoneTrimmed.length < 6 || phoneTrimmed.length > 30) {
    return { ok: false, error: "Telefonnummer ist ungültig." };
  }
  if (!/^[0-9+\-()./ ]+$/.test(phoneTrimmed)) {
    return { ok: false, error: "Telefonnummer enthält ungültige Zeichen." };
  }

  if (typeof b.email !== "string") {
    return { ok: false, error: "E-Mail-Adresse fehlt." };
  }
  const emailTrimmed = b.email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed) || emailTrimmed.length > 254) {
    return { ok: false, error: "E-Mail-Adresse ist ungültig." };
  }

  const city =
    typeof b.city === "string" && b.city.trim().length > 0
      ? b.city.trim().slice(0, 120)
      : undefined;

  const message =
    typeof b.message === "string" && b.message.trim().length > 0
      ? b.message.trim().slice(0, 2000)
      : undefined;

  return {
    ok: true,
    data: {
      name: b.name.trim(),
      phone: phoneTrimmed,
      email: emailTrimmed,
      city,
      message,
    },
  };
}

// ─── HTML sanitisation ────────────────────────────────────────────────────────

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
