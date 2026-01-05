import { ContactForm } from "@/components/contact";
import { ContactSection } from "@/components/ui";
import type { ReactElement } from "react";

export function Contact(): ReactElement {
  return (
    <>
      <section className="section-title section-highlight">
        <h1>Contact</h1>
        <p>
          If you’d like to connect, discuss an opportunity, or learn more about my work, feel free to reach out using
          the form below or through the links provided.
        </p>
      </section>

      <ContactForm />
      <ContactSection />
    </>
  );
}
