import { LoadingIcon } from "@/components/icons";
import type { ReactElement } from "react";

export function Loading(): ReactElement {
  return (
    <div className="loading">
      <LoadingIcon fill="currentColor" speed={1} />
    </div>
  );
}
