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
      <li>
        <DetailsBtn repo={repo} />
      </li>
      <li>
        <TopicAnchor repo={repo} />
      </li>
    </>
  );
}
