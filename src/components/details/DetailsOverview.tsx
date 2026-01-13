import type { ReactElement } from "react";

type DetailsOverviewProps = {
  summary: string;
  problem: string;
  solution: string;
};

export function DetailsOverview({
  summary,
  problem,
  solution,
}: DetailsOverviewProps): ReactElement {
  return (
    <section className="details-overview">
      <div className="details-section-title">
        <h2>Overview</h2>
      </div>
      <div className="details-section-text">
        <h3>Quick Summary</h3>
        <p>{summary}</p>
        <h3>Problem</h3>
        <p>{problem}</p>

        <h3>Solution</h3>
        <p>{solution}</p>
      </div>
    </section>
  );
}
