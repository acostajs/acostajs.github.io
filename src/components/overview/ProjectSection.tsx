import { Card, Loading } from "@/components/ui";
import { OVERVIEW_FEATURES } from "@/lib/api";
import type { Repository } from "@/types";
import type { ReactElement } from "react";
import { ErrorMessage } from "../layout";

type ProjectSectionProps = {
  repos: Repository[];
};

export function ProjectSection({ repos }: ProjectSectionProps): ReactElement {
  const startingIndex = 0;
  if (repos.length === startingIndex) {
    return <ErrorMessage error_message="No repositories where found" />;
  }

  return (
    <section className="project-section section-highlight">
      <div className="section-title">
        <h2>Latest Projects</h2>
      </div>
      <ul className="grid">
        {repos
          .slice(startingIndex, OVERVIEW_FEATURES.featuredReposCount)
          .map((repo) => (
            <li key={repo.id}>
              <Card repo={repo} />
            </li>
          ))}
      </ul>
    </section>
  );
}
