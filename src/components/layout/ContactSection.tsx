import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import type { ReactElement } from "react";

import { PROFILE } from "@/lib/api";

export function ContactSection(): ReactElement {
  return (
    <section className="contact-section">
      <h2 className="contact-grid-item-1">Get in Touch</h2>

      <p className="contact-grid-item-2">
        I typically respond within 24–48 hours.
      </p>

      <div className="contact-grid-item-3 flex flex-wrap gap-xl ">
        <div className="flex flex-column gap-sm">
          <p>Email me directly</p>
          <a href={"mailto:" + PROFILE.email}>{PROFILE.email}</a>
        </div>

        <div className="flex flex-column gap-sm">
          <p>Connect with me</p>
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
