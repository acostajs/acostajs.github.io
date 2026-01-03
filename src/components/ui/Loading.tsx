import { LoadingIcon } from "@/components/icons";
import type { ReactElement } from "react";
type LoadingProps = {
  loading_message: string;
  fadeOut?: boolean;
};

export function Loading({
  loading_message,
  fadeOut,
}: LoadingProps): ReactElement {
  return (
    <div className={`loading-overlay ${fadeOut ? "loading-fade-out" : ""}`}>
      <LoadingIcon fill="currentColor" speed={1} />
      <h1>{loading_message}</h1>
      <span className="muted">Please remain seated...</span>
    </div>
  );
}
