import type { ReactElement } from "react";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { profile_email, profile_github_url, profile_linkedin_url } from "../../../api";

export function ContactSection(): ReactElement {
  return (
    <div className="contact-section flex-between">
      <div className="contact-direct flex flex-column gap-sm">
        <h2>Get in Touch</h2>
        <p>Email me directly:</p>
        <a
          href={`mailto:${profile_email}`}
          className="contact-email flex gap-sm"
        >
          <MdEmail size={20} /> {profile_email}
        </a>
      </div>

      <div className="flex flex-column gap-sm">
        <p>Or contact me through:</p>
        <a href={profile_linkedin_url} className="contact-link flex gap-sm">
          <ImLinkedin size={20} /> LinkedIn
        </a>
        <a href={profile_github_url} className="contact-link flex gap-sm">
          <FaGithub size={20} /> GitHub
        </a>
      </div>

      <div className="contact-note muted">I'll respond within 24-48 hours.</div>
    </div>
  );
}
