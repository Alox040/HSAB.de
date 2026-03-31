import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "@/components/forms/ContactForm";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function mockFetch(ok: boolean, body: object): void {
  global.fetch = vi.fn().mockResolvedValueOnce({
    ok,
    json: async () => body,
  });
}

async function fillRequiredFields(user: ReturnType<typeof userEvent.setup>): Promise<void> {
  await user.type(screen.getByLabelText(/Name/i), "Maria Müller");
  await user.type(screen.getByLabelText(/Telefon/i), "+49 171 626 60 18");
  await user.type(screen.getByLabelText(/E-Mail/i), "maria@beispiel.de");
}

// ─── Tests ────────────────────────────────────────────────────────────────────

describe("ContactForm", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe("rendering", () => {
    it("renders all required fields", () => {
      render(<ContactForm />);
      expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Telefon/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/E-Mail/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Stadtgebiet/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Nachricht/i)).toBeInTheDocument();
    });

    it("renders the submit button", () => {
      render(<ContactForm />);
      expect(screen.getByRole("button", { name: /Anfrage senden/i })).toBeInTheDocument();
    });
  });

  describe("client-side validation", () => {
    it("shows name error when submitting empty form", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.click(screen.getByRole("button", { name: /Anfrage senden/i }));

      expect(
        screen.getByText(/Bitte geben Sie Ihren Namen ein/i)
      ).toBeInTheDocument();
    });

    it("shows all required-field errors on empty submit", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.click(screen.getByRole("button", { name: /Anfrage senden/i }));

      expect(screen.getByText(/Bitte geben Sie Ihren Namen ein/i)).toBeInTheDocument();
      expect(screen.getByText(/Bitte geben Sie Ihre Telefonnummer ein/i)).toBeInTheDocument();
      expect(screen.getByText(/Bitte geben Sie Ihre E-Mail-Adresse ein/i)).toBeInTheDocument();
    });

    it("shows name error on blur with short name", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.type(screen.getByLabelText(/Name/i), "A");
      await user.tab();

      await waitFor(() => {
        expect(
          screen.getByText(/mindestens 2 Zeichen/i)
        ).toBeInTheDocument();
      });
    });

    it("shows phone error on blur with invalid format", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.type(screen.getByLabelText(/Telefon/i), "abc");
      await user.tab();

      await waitFor(() => {
        expect(
          screen.getByText(/gültige Telefonnummer/i)
        ).toBeInTheDocument();
      });
    });

    it("clears name error when user starts typing", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      // Trigger validation
      await user.click(screen.getByRole("button", { name: /Anfrage senden/i }));
      expect(screen.getByText(/Bitte geben Sie Ihren Namen ein/i)).toBeInTheDocument();

      // Start typing in name field → error should disappear
      await user.type(screen.getByLabelText(/Name/i), "M");
      expect(screen.queryByText(/Bitte geben Sie Ihren Namen ein/i)).not.toBeInTheDocument();
    });

    it("does not call fetch when validation fails", async () => {
      const fetchSpy = vi.spyOn(global, "fetch");
      const user = userEvent.setup();
      render(<ContactForm />);

      await user.click(screen.getByRole("button", { name: /Anfrage senden/i }));

      expect(fetchSpy).not.toHaveBeenCalled();
    });
  });

  describe("form submission", () => {
    it("calls fetch with correct payload on valid submit", async () => {
      mockFetch(true, { ok: true });
      const user = userEvent.setup();
      render(<ContactForm />);

      await fillRequiredFields(user);
      await user.click(screen.getByRole("button", { name: /Anfrage senden/i }));

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(
          "/api/contact",
          expect.objectContaining({
            method: "POST",
            headers: { "Content-Type": "application/json" },
          })
        );
      });

      const call = (global.fetch as ReturnType<typeof vi.fn>).mock.calls[0];
      const body = JSON.parse(call[1].body as string);
      expect(body.name).toBe("Maria Müller");
      expect(body.email).toBe("maria@beispiel.de");
    });

    it("disables submit button while loading", async () => {
      // Never resolves — simulates in-flight request
      global.fetch = vi.fn().mockReturnValueOnce(new Promise(() => {}));
      const user = userEvent.setup();
      render(<ContactForm />);

      await fillRequiredFields(user);
      await user.click(screen.getByRole("button", { name: /Anfrage senden/i }));

      expect(
        screen.getByRole("button", { name: /Wird gesendet/i })
      ).toBeDisabled();
    });

    it("shows success state after successful submit", async () => {
      mockFetch(true, { ok: true });
      const user = userEvent.setup();
      render(<ContactForm />);

      await fillRequiredFields(user);
      await user.click(screen.getByRole("button", { name: /Anfrage senden/i }));

      await waitFor(() => {
        expect(screen.getByText(/Vielen Dank/i)).toBeInTheDocument();
      });

      // Form is replaced by success message
      expect(screen.queryByRole("button", { name: /Anfrage senden/i })).not.toBeInTheDocument();
    });

    it("shows server error message on API failure", async () => {
      mockFetch(false, { ok: false, error: "E-Mail konnte nicht gesendet werden." });
      const user = userEvent.setup();
      render(<ContactForm />);

      await fillRequiredFields(user);
      await user.click(screen.getByRole("button", { name: /Anfrage senden/i }));

      await waitFor(() => {
        expect(
          screen.getByText(/E-Mail konnte nicht gesendet werden/i)
        ).toBeInTheDocument();
      });
    });

    it("shows fallback error on network failure", async () => {
      global.fetch = vi.fn().mockRejectedValueOnce(new Error("Network error"));
      const user = userEvent.setup();
      render(<ContactForm />);

      await fillRequiredFields(user);
      await user.click(screen.getByRole("button", { name: /Anfrage senden/i }));

      await waitFor(() => {
        expect(
          screen.getByText(/Internetverbindung/i)
        ).toBeInTheDocument();
      });
    });
  });
});
