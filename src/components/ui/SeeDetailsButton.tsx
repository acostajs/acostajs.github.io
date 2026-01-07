import type { ReactElement } from "react";

export function SeeDetailsButton(): ReactElement {
  return (
    <button popoverTarget="details" className="details-btn">
      View Case Study
    </button>
  );
}
