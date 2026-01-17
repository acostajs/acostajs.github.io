import { PaginatedProjects, Pagination } from "@/components/projects";
import { useGitHub } from "@/context/GitHubContext";
import { usePagination } from "@/hooks";
import { PROJECTS_FEATURES } from "@/lib/api";
import type { ReactElement } from "react";

function ProjectsHeader(): ReactElement {
  return (
    <section className="projects-header section-highlight-secondary">
      <h1>Project Archive</h1>
      <p>
        A full archive of my development projects. Each project links to its repository and includes context on its
        purpose, features, and technical decisions.
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
