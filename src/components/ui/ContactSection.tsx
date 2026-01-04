import { ContactIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import type { ReactElement } from "react";

import { PROFILE } from "@/lib/api";

export function ContactSection(): ReactElement {
  return (
    <section className="contact-section">
      <div className="section-title flex flex-column gap-sm">
        <div className="flex-center">
          <ContactIcon size={60} />
          <h2>Get in Touch</h2>
        </div>

        <div className="muted">I'll respond within 24-48 hours.</div>
      </div>

      <div className="text flex gap-xl">
        <div className="flex flex-column gap-sm">
          <p>Email me directly:</p>
          <a href={"mailto:" + PROFILE.email} className="flex-left">
            <MailIcon size={30} /> {PROFILE.email}
          </a>
        </div>

        <div className="flex flex-column gap-sm">
          <p>Contact me through:</p>
          <a href={PROFILE.linkedin.url} className="flex gap-sm">
            <LinkedInIcon size={30} /> LinkedIn
          </a>
          <a href={PROFILE.github.url} className="flex gap-sm">
            <GitHubIcon size={30} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
