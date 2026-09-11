"use client";

import { FormEvent, useState } from "react";
import { site } from "@/content/site";

type Status = "idle" | "error" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setError("Please fill in name, email, and a short message.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setStatus("success");
    event.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-line bg-elevated p-6"
      >
        <p className="display text-2xl tracking-tight">
          {site.contact.successTitle}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {site.contact.successBody}
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-medium text-accent underline-offset-4 hover:underline"
          onClick={() => setStatus("idle")}
        >
          Write another note
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mono text-[11px] tracking-[0.16em] text-muted uppercase">
            Name
          </span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 h-12 w-full rounded-xl border border-line bg-elevated px-3 text-ink placeholder:text-muted/70"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm">
          <span className="mono text-[11px] tracking-[0.16em] text-muted uppercase">
            Email
          </span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 h-12 w-full rounded-xl border border-line bg-elevated px-3 text-ink placeholder:text-muted/70"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="mono text-[11px] tracking-[0.16em] text-muted uppercase">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-y rounded-xl border border-line bg-elevated px-3 py-3 text-ink placeholder:text-muted/70"
          placeholder="What are you working on?"
        />
      </label>

      {status === "error" ? (
        <p role="alert" className="text-sm text-accent">
          {error}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-sm font-medium text-bg transition-colors hover:bg-accent"
        >
          Send note
        </button>
        <p className="max-w-xs text-xs leading-relaxed text-muted">
          {site.contact.formNote}
        </p>
      </div>
    </form>
  );
}
