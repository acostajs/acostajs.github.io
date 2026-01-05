import { ProjectItem } from "@/components/projects";
import { ContactSection, Pagination } from "@/components/ui";
import { useGitHub } from "@/context/GitHubContext";
import { usePagination } from "@/hooks";
import { PROJECTS_FEATURES } from "@/lib/api";

import type { ReactElement } from "react";

export function Projects(): ReactElement {
  const { repos } = useGitHub();
  const totalCount = repos.length;
  const pagination = usePagination(
    totalCount,
    PROJECTS_FEATURES.repository_count_per_page,
  );
  const paginatedRepos = repos.slice(
    pagination.offset,
    pagination.offset + pagination.perPage,
  );

  return (
    <>
      <section>
        <div className="about-title section-title section-highlight-secondary">
          <h1>Selected Projects</h1>
          <p>
            This page contains a detailed view of my repositories. Each project links directly to its source code, along
            with additional context around its purpose, features, and implementation.
          </p>
        </div>
        <ul>
          {paginatedRepos.map((repo) => <ProjectItem repo={repo} key={repo.name} />)}
        </ul>

        <Pagination pagination={pagination} />
      </section>

      <ContactSection />
    </>
  );
}
