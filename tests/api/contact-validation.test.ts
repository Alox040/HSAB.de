import { describe, it, expect } from "vitest";
import {
  validateContactPayload,
  escapeHtml,
} from "@/lib/contact-validation";

// ─── validateContactPayload ───────────────────────────────────────────────────

describe("validateContactPayload", () => {
  const valid = {
    name: "Maria Müller",
    phone: "+49 171 626 60 18",
    email: "maria@beispiel.de",
    city: "Hamburg Nord",
    message: "Ich benötige Unterstützung für meine Mutter.",
  };

  describe("valid input", () => {
    it("returns ok:true with all fields", () => {
      const result = validateContactPayload(valid);
      expect(result.ok).toBe(true);
      if (!result.ok) return;
      expect(result.data.name).toBe("Maria Müller");
      expect(result.data.phone).toBe("+49 171 626 60 18");
      expect(result.data.email).toBe("maria@beispiel.de");
      expect(result.data.city).toBe("Hamburg Nord");
    });

    it("returns ok:true without optional fields", () => {
      const result = validateContactPayload({
        name: "Hans Schmidt",
        phone: "040123456",
        email: "hans@test.de",
      });
      expect(result.ok).toBe(true);
      if (!result.ok) return;
      expect(result.data.city).toBeUndefined();
      expect(result.data.message).toBeUndefined();
    });

    it("normalises email to lowercase", () => {
      const result = validateContactPayload({ ...valid, email: "Maria@Test.DE" });
      expect(result.ok).toBe(true);
      if (!result.ok) return;
      expect(result.data.email).toBe("maria@test.de");
    });

    it("trims whitespace from name", () => {
      const result = validateContactPayload({ ...valid, name: "  Anna  " });
      expect(result.ok).toBe(true);
      if (!result.ok) return;
      expect(result.data.name).toBe("Anna");
    });

    it("truncates message to 2000 characters", () => {
      const long = "x".repeat(2500);
      const result = validateContactPayload({ ...valid, message: long });
      expect(result.ok).toBe(true);
      if (!result.ok) return;
      expect(result.data.message?.length).toBe(2000);
    });
  });

  describe("invalid body", () => {
    it("rejects null", () => {
      const result = validateContactPayload(null);
      expect(result.ok).toBe(false);
    });

    it("rejects non-object", () => {
      const result = validateContactPayload("string");
      expect(result.ok).toBe(false);
    });

    it("rejects empty object", () => {
      const result = validateContactPayload({});
      expect(result.ok).toBe(false);
    });
  });

  describe("name validation", () => {
    it("rejects empty name", () => {
      const result = validateContactPayload({ ...valid, name: "" });
      expect(result.ok).toBe(false);
      if (result.ok) return;
      expect(result.error).toBe("Name ist ungültig.");
    });

    it("rejects single-character name", () => {
      const result = validateContactPayload({ ...valid, name: "A" });
      expect(result.ok).toBe(false);
    });

    it("rejects name over 100 characters", () => {
      const result = validateContactPayload({ ...valid, name: "A".repeat(101) });
      expect(result.ok).toBe(false);
    });
  });

  describe("phone validation", () => {
    it("rejects missing phone", () => {
      const result = validateContactPayload({ ...valid, phone: undefined });
      expect(result.ok).toBe(false);
      if (result.ok) return;
      expect(result.error).toBe("Telefonnummer fehlt.");
    });

    it("rejects phone shorter than 6 digits", () => {
      const result = validateContactPayload({ ...valid, phone: "123" });
      expect(result.ok).toBe(false);
      if (result.ok) return;
      expect(result.error).toBe("Telefonnummer ist ungültig.");
    });

    it("rejects phone with letters", () => {
      const result = validateContactPayload({ ...valid, phone: "+49abc123456" });
      expect(result.ok).toBe(false);
      if (result.ok) return;
      expect(result.error).toBe("Telefonnummer enthält ungültige Zeichen.");
    });

    it("accepts German formats", () => {
      const formats = [
        "040 123 456",
        "+49 40 123456",
        "(040) 123-456",
        "0171/6266018",
      ];
      for (const phone of formats) {
        const result = validateContactPayload({ ...valid, phone });
        expect(result.ok, `expected ok for: ${phone}`).toBe(true);
      }
    });
  });

  describe("email validation", () => {
    it("rejects missing email", () => {
      const result = validateContactPayload({ ...valid, email: undefined });
      expect(result.ok).toBe(false);
      if (result.ok) return;
      expect(result.error).toBe("E-Mail-Adresse fehlt.");
    });

    it("rejects email without @", () => {
      const result = validateContactPayload({ ...valid, email: "keineat.de" });
      expect(result.ok).toBe(false);
      if (result.ok) return;
      expect(result.error).toBe("E-Mail-Adresse ist ungültig.");
    });

    it("rejects email over 254 characters", () => {
      const long = "a".repeat(250) + "@b.de";
      const result = validateContactPayload({ ...valid, email: long });
      expect(result.ok).toBe(false);
    });
  });
});

// ─── escapeHtml ───────────────────────────────────────────────────────────────

describe("escapeHtml", () => {
  it("escapes ampersand", () => {
    expect(escapeHtml("Müller & Söhne")).toBe("Müller &amp; Söhne");
  });

  it("escapes angle brackets", () => {
    expect(escapeHtml("<script>alert(1)</script>")).toBe(
      "&lt;script&gt;alert(1)&lt;/script&gt;"
    );
  });

  it("escapes double quotes", () => {
    expect(escapeHtml('say "hello"')).toBe("say &quot;hello&quot;");
  });

  it("escapes single quotes", () => {
    expect(escapeHtml("it's fine")).toBe("it&#39;s fine");
  });

  it("leaves plain text unchanged", () => {
    expect(escapeHtml("Hamburg 2025")).toBe("Hamburg 2025");
  });

  it("handles empty string", () => {
    expect(escapeHtml("")).toBe("");
  });
});
