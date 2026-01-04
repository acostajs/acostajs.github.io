import { ProjectItem } from "@/components/projects";
import { ContactSection, Pagination } from "@/components/ui";
import { useGitHub } from "@/context/GitHubContext";
import { usePagination } from "@/hooks";
import { useState } from "react";

import type { ReactElement } from "react";

export function Projects(): ReactElement {
  const { repos } = useGitHub();
  const totalCount = repos.length;
  const pagination = usePagination(totalCount, 5);
  const paginatedRepos = repos.slice(
    pagination.offset,
    pagination.offset + pagination.perPage,
  );

  return (
    <>
      <section>
        <div className="section-title">
          <h1>Projects</h1>
          <p>
            In this section you're going to find all my repositories in more detail, you can click on the name to go and
            see the code, or on "see details..." to see more information related to the project.
          </p>
        </div>
        <ul>
          {paginatedRepos.map((repo) => <ProjectItem repo={repo} />)}
        </ul>

        <Pagination pagination={pagination} />
      </section>

      <ContactSection />
    </>
  );
}
