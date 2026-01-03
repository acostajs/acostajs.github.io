import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import type { ReactElement } from "react";

import { PROFILE } from "@/lib/api";

export function ContactSection(): ReactElement {
  return (
    <section className="contact-section">
      <div className="contact-grid grid">
        <div className="flex flex-column gap-sm">
          <h2>Get in Touch</h2>
          <div className="muted">I'll respond within 24-48 hours.</div>
        </div>

        <div className="flex flex-column gap-sm">
          <p>Email me directly:</p>
          <a href={"mailto:" + PROFILE.email}>
            <MailIcon size={20} /> {PROFILE.email}
          </a>
        </div>

        <div className="flex flex-column gap-sm">
          <p>Or contact me through:</p>
          <a href={PROFILE.linkedin.url} className="flex gap-sm">
            <LinkedInIcon size={20} /> LinkedIn
          </a>
          <a href={PROFILE.github.url} className="flex gap-sm">
            <GitHubIcon size={20} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
