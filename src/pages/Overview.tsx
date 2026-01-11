import { OverviewSection, ProjectSection } from "@/components/overview";
import { useGitHub } from "@/context/GitHubContext";
import type { ReactElement } from "react";

export function Overview(): ReactElement {
  const { repos, readme } = useGitHub();

  return (
    <article>
      <OverviewSection readme={readme} />
      <ProjectSection repos={repos} />
    </article>
  );
}
