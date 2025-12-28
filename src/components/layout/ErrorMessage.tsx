import type { ReactElement } from "react";

type ErrorMessageProps = {
  error_message: string;
};

export function ErrorMessage({
  error_message,
}: ErrorMessageProps): ReactElement | null {
  if (!error_message) return null;

  return (
    <section>
      <div className="container">
        <h1 className="error-message">{error_message}</h1>
      </div>
    </section>
  );
}
