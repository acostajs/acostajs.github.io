import { ErrorMessage } from "@/components/ui";
import type { PinnedRepository } from "@/types";
import type { ReactElement } from "react";
import { Card } from "./Card";

type ProjectSectionProps = {
  pinnedRepos: PinnedRepository[];
};

export function ProjectSection({ pinnedRepos }: ProjectSectionProps): ReactElement {
  const startingIndex = 0;
  if (pinnedRepos.length === startingIndex) {
    return <ErrorMessage error_message="No repositories where found" />;
  }

  return (
    <section className="project-section section-highlight">
      <h2>Selected Projects</h2>

      <ul className="grid">
        {pinnedRepos.map((repo) => (
          <li key={repo.name}>
            <Card repo={repo} />
          </li>
        ))}
      </ul>
    </section>
  );
}
