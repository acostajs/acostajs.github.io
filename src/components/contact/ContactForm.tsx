import { ContactPageIcon } from "@/components/icons";
import { ErrorMessage } from "@/components/ui";
import { useEmailFormSubmit } from "@/hooks";
import type { ReactElement } from "react";

export function ContactForm(): ReactElement {
  const { error, result, submit } = useEmailFormSubmit();

  if (error) return <ErrorMessage error_message={error} />;

  return (
    <section className="contact-form flex-evenly gap-xl flex-wrap">
      <ContactPageIcon size={250} />

      {result
        ? <p className="contact-success-message">{result}</p>
        : (
          <form onSubmit={submit} className="flex flex-column gap-md">
            <div className="contact-item">
              <label htmlFor="name">Your name</label>
              <input type="text" name="name" required />
            </div>

            <div className="contact-item">
              <label htmlFor="email">Your email address</label>
              <input type="email" name="email" required />
            </div>

            <div className="contact-item">
              <label htmlFor="message">Your message</label>
              <textarea name="message" required></textarea>
            </div>

            <button className="btn" type="submit">
              Send message
            </button>
          </form>
        )}
    </section>
  );
}
