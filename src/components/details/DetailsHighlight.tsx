import { ErrorMessage } from "@/components/ui";
import type { DetailsListProps } from "@/types";
import type { ReactElement } from "react";

export function DetailsHighlight({
  title,
  array,
}: DetailsListProps): ReactElement {
  if (array.length === 0) {
    return (
      <ErrorMessage error_message="The details for this project are currently being uploaded. Please check back soon." />
    );
  }

  return (
    <section className="details-highlight flex flex-column gap-md">
      <h2>{title}</h2>
      <ul className="details-list">
        {array.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>
    </section>
  );
}
