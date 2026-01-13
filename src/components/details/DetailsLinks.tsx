import type { ReactElement } from "react";

type DetailsLinksProps = {
  source_code: string;
  live_demo: string;
};

export function DetailsLinks({
  source_code,
  live_demo,
}: DetailsLinksProps): ReactElement {
  return (
    <section className="details-links">
      <div className="details-section-title">
        <h2>Links</h2>
      </div>
      <div className="details-section-text flex flex-column gap-md">
        <a className="tag details-link" href={source_code} target="_blank">
          Source Code
        </a>

        <a className="tag details-link" href={live_demo} target="_blank">
          Live Demo
        </a>
      </div>
    </section>
  );
}
