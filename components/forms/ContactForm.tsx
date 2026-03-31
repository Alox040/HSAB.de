"use client";

import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  phone?: string;
  email?: string;
}

type SubmitState = "idle" | "loading" | "success" | "error";

function validateName(value: string): string | undefined {
  if (!value.trim()) return "Bitte geben Sie Ihren Namen ein.";
  if (value.trim().length < 2) return "Der Name muss mindestens 2 Zeichen lang sein.";
  return undefined;
}

function validatePhone(value: string): string | undefined {
  if (!value.trim()) return "Bitte geben Sie Ihre Telefonnummer ein.";
  if (!/^[0-9+\-()./ ]{6,30}$/.test(value.trim())) {
    return "Bitte geben Sie eine gültige Telefonnummer ein.";
  }
  return undefined;
}

function validateEmail(value: string): string | undefined {
  if (!value.trim()) return "Bitte geben Sie Ihre E-Mail-Adresse ein.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
    return "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
  }
  return undefined;
}

export default function ContactForm(): React.JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleBlur = (field: keyof FieldErrors): void => {
    const validators: Record<keyof FieldErrors, (v: string) => string | undefined> = {
      name: validateName,
      phone: validatePhone,
      email: validateEmail,
    };
    const error = validators[field](formData[field]);
    setFieldErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (name in fieldErrors) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Validate all required fields
    const nameError = validateName(formData.name);
    const phoneError = validatePhone(formData.phone);
    const emailError = validateEmail(formData.email);

    if (nameError || phoneError || emailError) {
      setFieldErrors({ name: nameError, phone: phoneError, email: emailError });
      return;
    }

    setSubmitState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data: unknown = await response.json();

      if (
        response.ok &&
        typeof data === "object" &&
        data !== null &&
        "ok" in data &&
        (data as { ok: boolean }).ok
      ) {
        setSubmitState("success");
      } else {
        const msg =
          typeof data === "object" &&
          data !== null &&
          "error" in data &&
          typeof (data as { error: unknown }).error === "string"
            ? (data as { error: string }).error
            : "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.";
        setErrorMessage(msg);
        setSubmitState("error");
      }
    } catch {
      setErrorMessage(
        "Die Nachricht konnte nicht gesendet werden. Bitte prüfen Sie Ihre Internetverbindung."
      );
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    return (
      <div className="rounded-[var(--radius-card)] border border-[var(--secondary)] bg-[var(--secondary-soft)] p-8 text-center">
        <p className="mb-2 text-2xl">✓</p>
        <h3 className="mb-2 text-lg font-semibold text-[var(--primary)]">
          Vielen Dank für Ihre Nachricht!
        </h3>
        <p className="text-sm text-[var(--text-muted)]">
          Wolfgang Posdziech wird sich in Kürze bei Ihnen melden.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="mb-1 block text-sm font-medium text-[var(--foreground)]"
        >
          Name{" "}
          <span
            aria-hidden="true"
            className="text-[var(--danger)]"
          >
            *
          </span>
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={() => handleBlur("name")}
          autoComplete="name"
          required
          aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
          aria-invalid={!!fieldErrors.name}
          className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-[var(--primary)] ${
            fieldErrors.name
              ? "border-[var(--danger-border)] bg-[var(--danger-soft)]"
              : "border-[var(--border-soft)] bg-white hover:border-[var(--secondary)]"
          }`}
          placeholder="Ihr vollständiger Name"
        />
        {fieldErrors.name && (
          <p
            id="contact-name-error"
            role="alert"
            className="mt-1 text-xs text-[var(--danger-strong)]"
          >
            {fieldErrors.name}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="contact-phone"
          className="mb-1 block text-sm font-medium text-[var(--foreground)]"
        >
          Telefon{" "}
          <span
            aria-hidden="true"
            className="text-[var(--danger)]"
          >
            *
          </span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={() => handleBlur("phone")}
          autoComplete="tel"
          required
          aria-describedby={fieldErrors.phone ? "contact-phone-error" : undefined}
          aria-invalid={!!fieldErrors.phone}
          className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-[var(--primary)] ${
            fieldErrors.phone
              ? "border-[var(--danger-border)] bg-[var(--danger-soft)]"
              : "border-[var(--border-soft)] bg-white hover:border-[var(--secondary)]"
          }`}
          placeholder="+49 171 626 60 18"
        />
        {fieldErrors.phone && (
          <p
            id="contact-phone-error"
            role="alert"
            className="mt-1 text-xs text-[var(--danger-strong)]"
          >
            {fieldErrors.phone}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="mb-1 block text-sm font-medium text-[var(--foreground)]"
        >
          E-Mail{" "}
          <span
            aria-hidden="true"
            className="text-[var(--danger)]"
          >
            *
          </span>
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur("email")}
          autoComplete="email"
          required
          aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
          aria-invalid={!!fieldErrors.email}
          className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-[var(--primary)] ${
            fieldErrors.email
              ? "border-[var(--danger-border)] bg-[var(--danger-soft)]"
              : "border-[var(--border-soft)] bg-white hover:border-[var(--secondary)]"
          }`}
          placeholder="ihre@email.de"
        />
        {fieldErrors.email && (
          <p
            id="contact-email-error"
            role="alert"
            className="mt-1 text-xs text-[var(--danger-strong)]"
          >
            {fieldErrors.email}
          </p>
        )}
      </div>

      {/* City (optional) */}
      <div>
        <label
          htmlFor="contact-city"
          className="mb-1 block text-sm font-medium text-[var(--foreground)]"
        >
          Stadtgebiet{" "}
          <span className="font-normal text-[var(--text-muted)]">(optional)</span>
        </label>
        <input
          id="contact-city"
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          autoComplete="address-level2"
          className="w-full rounded-lg border border-[var(--border-soft)] bg-white px-4 py-3 text-sm outline-none transition-colors hover:border-[var(--secondary)] focus:ring-2 focus:ring-[var(--primary)]"
          placeholder="z. B. Hamburg Nord"
        />
      </div>

      {/* Message (optional) */}
      <div>
        <label
          htmlFor="contact-message"
          className="mb-1 block text-sm font-medium text-[var(--foreground)]"
        >
          Nachricht{" "}
          <span className="font-normal text-[var(--text-muted)]">(optional)</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-lg border border-[var(--border-soft)] bg-white px-4 py-3 text-sm outline-none transition-colors hover:border-[var(--secondary)] focus:ring-2 focus:ring-[var(--primary)] resize-y"
          placeholder="Beschreiben Sie kurz Ihre Situation und was Sie benötigen..."
        />
      </div>

      {/* Error message */}
      {submitState === "error" && errorMessage && (
        <div
          role="alert"
          className="rounded-lg border border-[var(--danger-border)] bg-[var(--danger-soft)] p-3 text-sm text-[var(--danger-strong)]"
        >
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={submitState === "loading"}
        className="btn-base btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitState === "loading" ? "Wird gesendet…" : "Anfrage senden"}
      </button>

      <p className="text-center text-xs text-[var(--text-muted)]">
        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{" "}
        <a href="/datenschutz" className="underline hover:text-[var(--primary)]">
          Datenschutzerklärung
        </a>{" "}
        zu.
      </p>
    </form>
  );
}
