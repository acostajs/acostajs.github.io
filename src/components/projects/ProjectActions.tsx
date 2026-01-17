import type { Repository } from "@/types";
import type { ReactElement } from "react";
import { DetailsBtn } from "../ui";
import { TopicAnchor } from "./TopicAnchor";

type ProjectActionsProps = {
  repo: Repository;
};

export function ProjectActions({ repo }: ProjectActionsProps): ReactElement {
  return (
    <>
      <li className="flex gap-sm">
        <DetailsBtn repoName={repo.name} />
        <a href={repo.html_url} className="btn">View Code</a>
      </li>
      <li>
        <TopicAnchor repo={repo} />
      </li>
    </>
  );
}
