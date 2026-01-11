import { ContactForm } from "@/components/contact";
import type { ReactElement } from "react";

function ContactHeader(): ReactElement {
  return (
    <section className="section-title section-highlight">
      <h1>Contact</h1>
      <p>
        If you’d like to connect, discuss an opportunity, or learn more about my work, feel free to reach out using the
        form below or through the links provided.
      </p>
    </section>
  );
}

export function Contact(): ReactElement {
  return (
    <article>
      <ContactHeader />
      <ContactForm />
    </article>
  );
}
