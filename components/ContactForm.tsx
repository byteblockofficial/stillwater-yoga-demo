"use client";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const errs: Record<string, string> = {};
    if (!String(data.name).trim()) errs.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email))) errs.email = "Enter a valid email address.";
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  }

  if (status === "success") return (
    <div role="alert" className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 text-center">
      <p className="text-2xl mb-2">✅</p>
      <p className="font-semibold text-[var(--color-primary)] mb-1">Message sent!</p>
      <p className="text-sm text-[var(--color-text-muted)]">We&apos;ll be in touch shortly. Or call <a href="tel:01610000004" className="underline">0161 000 0004</a>.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {status === "error" && <div role="alert" className="bg-red-50 border border-red-200 text-red-800 text-sm px-4 py-3 rounded-2xl">Something went wrong. Please call <a href="tel:01610000004" className="underline">0161 000 0004</a>.</div>}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-1">Name <span aria-hidden="true">*</span></label>
        <input id="name" name="name" type="text" autoComplete="name" required aria-required="true" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} className="w-full border border-[var(--color-border)] rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] aria-[invalid=true]:border-red-500" />
        {errors.name && <p id="name-error" role="alert" className="text-red-600 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-1">Email <span aria-hidden="true">*</span></label>
        <input id="email" name="email" type="email" autoComplete="email" required aria-required="true" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} className="w-full border border-[var(--color-border)] rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] aria-[invalid=true]:border-red-500" />
        {errors.email && <p id="email-error" role="alert" className="text-red-600 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text)] mb-1">Phone (optional)</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className="w-full border border-[var(--color-border)] rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-1">Message</label>
        <textarea id="message" name="message" rows={4} className="w-full border border-[var(--color-border)] rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" />
      </div>
      <button type="submit" disabled={status === "loading"} className="w-full bg-[var(--color-secondary-dark)] hover:opacity-90 disabled:opacity-60 text-white font-semibold py-3 rounded-full transition-colors">
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
