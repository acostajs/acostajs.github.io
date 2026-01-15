import type { ReactElement } from "react";
import { ErrorMessage } from "../ui";

type DetailsLinksProps = {
  source_code: string;
  live_demo: string;
};

export function DetailsLinks({
  source_code,
  live_demo,
}: DetailsLinksProps): ReactElement {
  if (source_code.length === 0 && live_demo.length === 0) {
    return (
      <ErrorMessage error_message="Links coming soon. The project is currently running locally and will be deployed shortly." />
    );
  }

  return (
    <section className="details-links">
      <div className="details-section-title">
        <h2>Links</h2>
      </div>
      <div className="details-section-text flex flex-column gap-md">
        {source_code.length > 0 && (
          <a className="tag details-link" href={source_code} target="_blank">
            Source Code
          </a>
        )}

        {live_demo.length > 0 && (
          <a className="tag details-link" href={live_demo} target="_blank">
            Live Demo
          </a>
        )}
      </div>
    </section>
  );
}
