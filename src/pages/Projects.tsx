import { PaginatedProjects, Pagination } from "@/components/projects";
import { useGitHub } from "@/context/GitHubContext";
import { usePagination } from "@/hooks";
import { PROJECTS_FEATURES } from "@/lib/api";
import type { ReactElement } from "react";

function ProjectsHeader(): ReactElement {
  return (
    <section className="projects-header section-highlight-secondary">
      <h1>Selected Projects</h1>
      <p>
        This page contains a detailed view of my repositories. Each project links directly to its source code, along
        with additional context around its purpose, features, and implementation.
      </p>
    </section>
  );
}

export function Projects(): ReactElement {
  const { repos } = useGitHub();
  const totalCount = repos.length;
  const pagination = usePagination(
    totalCount,
    PROJECTS_FEATURES.repository_count_per_page,
  );

  return (
    <article>
      <ProjectsHeader />

      <PaginatedProjects repos={repos} pagination={pagination} />

      <Pagination pagination={pagination} />
    </article>
  );
}
