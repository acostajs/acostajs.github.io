import { Link } from "@/lib/router";
import type { Repository } from "@/types";
import type { ReactElement } from "react";
import { TopicAnchor } from "./TopicAnchor";

type ProjectActionsProps = {
  repo: Repository;
};

export function ProjectActions({ repo }: ProjectActionsProps): ReactElement {
  return (
    <>
      <li>
        <Link to={`/details/${repo.name}`}>See Details →</Link>
      </li>
      <li>
        <TopicAnchor repo={repo} />
      </li>
    </>
  );
}
