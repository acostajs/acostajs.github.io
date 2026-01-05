import { ContactForm } from "@/components/contact";
import { ContactSection } from "@/components/ui";
import type { ReactElement } from "react";

export function Contact(): ReactElement {
  return (
    <>
      <h1>Contact</h1>
      <ContactForm />
      <ContactSection />
    </>
  );
}
