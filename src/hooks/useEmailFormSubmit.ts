import { CONFIG } from "@/config/profile";
import { useState } from "react";
import type { FormEvent } from "react";

type EmailFormSubmitReturn = {
  error: string;
  result: string;
  submit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
};

export function useEmailFormSubmit(): EmailFormSubmitReturn {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  async function submit(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", CONFIG.web3forms.access_key);

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
        (event.target as HTMLFormElement).reset();
      } else {
        setError("Failed to send message.");
      }
    } catch {
      setError("Network error. Please try again.");
    }
  }

  return { error, result, submit };
}
