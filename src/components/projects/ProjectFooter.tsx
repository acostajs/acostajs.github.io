import { LicenseIcon } from "@/components/icons";
import { formatRelativeDate } from "@/lib/utils";
import type { Repository } from "@/types";
import type { ReactElement } from "react";

type ProjectFooterProps = {
  repo: Repository;
};

export function ProjectFooter({ repo }: ProjectFooterProps): ReactElement {
  return (
    <li className="flex flex-wrap gap-sm">
      {repo.language
        ? (
          <li className="flex-left gap-sm">
            <div className="language-decorator" />
            <span>{repo.language}</span>
          </li>
        )
        : null}

      <li className="muted">
        Last Update: {formatRelativeDate(repo.updated_at)}
      </li>

      {repo.license
        ? (
          <li className="flex gap-sm">
            <LicenseIcon size={20} />
            {repo.license.name}
          </li>
        )
        : null}
    </li>
  );
}
