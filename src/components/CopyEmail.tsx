"use client";

import { useState } from "react";
import { Icon } from "./Icon";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button type="button" onClick={copy} className="btn press bg-card text-ink">
      <Icon name={copied ? "check" : "copy"} />
      <span aria-live="polite">{copied ? "Email copied" : "Copy email"}</span>
    </button>
  );
}
