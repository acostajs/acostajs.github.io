import { Card, Loading } from "@/components/ui";
import { OVERVIEW_FEATURES } from "@/lib/api";
import type { Repository } from "@/types";
import type { ReactElement } from "react";

type ProjectSectionProps = {
  repos: Repository[];
};

export function ProjectSection({ repos }: ProjectSectionProps): ReactElement {
  const startingIndex = 0;
  if (repos.length === startingIndex) {
    return <Loading loading_message="No repositories found" />;
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
