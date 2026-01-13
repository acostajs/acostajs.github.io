import type { ReactElement } from "react";

type DetailsArchitectureProps = {
  approach: string;
  data_flow: string;
  deployment: string;
};

export function DetailsArchitecture({
  approach,
  data_flow,
  deployment,
}: DetailsArchitectureProps): ReactElement {
  return (
    <section>
      <div className="details-section-title">
        <h2>Architecture</h2>
      </div>

      <div className="details-section-text">
        <ul className="details-list">
          <li>
            <strong>Approach:</strong> {approach}
          </li>
          <li>
            <strong>Data flow:</strong> {data_flow}
          </li>
          <li>
            <strong>Deployment:</strong> {deployment}
          </li>
        </ul>
      </div>
    </section>
  );
}
