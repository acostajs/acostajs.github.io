import type { ReactElement } from "react";

type ErrorMessageProps = {
  error_message: string;
};

export function ErrorMessage({
  error_message,
}: ErrorMessageProps): ReactElement | null {
  if (!error_message) return null;

  return (
    <div className="error-overlay">
      <div className="error-container">
        <span className="error-message">{error_message}</span>
      </div>
    </div>
  );
}
