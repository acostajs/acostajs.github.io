import type { DetailsListProps } from "@/types";
import type { ReactElement } from "react";

export function DetailsSkills({
  title,
  array,
}: DetailsListProps): ReactElement {
  return (
    <section className="details-skills">
      <div className="details-section-title">
        <h2>{title}</h2>
      </div>
      <div className="details-section-text">
        <ul className="details-list">
          {array.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      </div>
    </section>
  );
}
