import { ErrorMessage } from "@/components/ui";
import type { DetailsListProps } from "@/types";
import type { ReactElement } from "react";

export function DetailsTechStack({
  title,
  array,
}: DetailsListProps): ReactElement {
  if (array.length === 0) {
    return (
      <ErrorMessage error_message="The details for this project are currently being uploaded. Please check back soon." />
    );
  }

  return (
    <section className="details-stack">
      <div className="details-section-title">
        <h2>{title}</h2>
      </div>
      <div className="details-section-text">
        <ul className=" flex flex-wrap gap-md">
          {array.map((tech) => (
            <li key={tech} className="details-stack-item tag">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
