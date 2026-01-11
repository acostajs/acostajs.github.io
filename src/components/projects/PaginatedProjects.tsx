import type { PaginationState } from "@/hooks";
import type { Repository } from "@/types";
import type { ReactElement } from "react";
import { ProjectItem } from "./ProjectItem";

type PaginatedProjectsProps = {
  repos: Repository[];
  pagination: PaginationState;
};

export function PaginatedProjects({
  repos,
  pagination,
}: PaginatedProjectsProps): ReactElement {
  const paginatedRepos = repos.slice(
    pagination.offset,
    pagination.offset + pagination.perPage,
  );

  return (
    <section>
      <ul>
        {paginatedRepos.map((repo) => <ProjectItem repo={repo} key={repo.name} />)}
      </ul>
    </section>
  );
}
