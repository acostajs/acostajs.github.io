import type { Repository } from "@/types";
import type { ReactElement } from "react";

type ProjectDescriptionProps = {
  repo: Repository;
};

export function ProjectDescription({
  repo,
}: ProjectDescriptionProps): ReactElement {
  return (
    <li>
      <p>{repo.description}</p>
    </li>
  );
}
