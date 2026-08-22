"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import Button from "./ui/Button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-blue/30 bg-blue/5 p-6 text-sm text-foreground"
      >
        Merci pour votre message. Notre équipe vous répondra rapidement.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Field label="Nom" id="name" type="text" required />
      <Field label="Email" id="email" type="email" required />
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-blue"
        />
      </div>
      <Button type="submit" variant="primary" className="w-full">
        <Send className="h-4 w-4" />
        Envoyer
      </Button>
    </form>
  );
}

function Field({
  label,
  id,
  type,
  required,
}: {
  label: string;
  id: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-blue"
      />
    </div>
  );
}
