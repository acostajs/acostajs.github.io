import { WEB3FORMS } from "@/lib/api";
import { useState } from "react";
import type { FormEvent } from "react";

type EmailFormSubmitReturn = {
  error: string;
  result: string;
  submit: (event: FormEvent<HTMLFormElement>) => void;
};

export function useEmailFormSubmit(): EmailFormSubmitReturn {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", WEB3FORMS.access_key);

    (async (): Promise<void> => {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (data.success) {
          setResult(
            "Message sent successfully! I'll contact you as soon as possible.",
          );
          const form = event.target as HTMLFormElement;
          if (form) form.reset();
        } else {
          setError("Failed to send message.");
        }
      } catch {
        setError("Network error. Please try again.");
      }
    })();
  }

  return { error, result, submit };
}
