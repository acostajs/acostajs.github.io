import { GitHubIcon } from "@/components/icons";
import type { ReactElement } from "react";

type GitHubProfileBadgeProps = {
  url: string;
  username: string;
};

export function GitHubProfileBadge({
  url,
  username,
}: GitHubProfileBadgeProps): ReactElement {
  return (
    <a className="github-profile-badge flex-center gap-sm" href={url}>
      <GitHubIcon size={30} />
      {username}
    </a>
  );
}
