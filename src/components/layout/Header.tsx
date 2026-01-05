import type { ReactElement } from "react";

import { Avatar, GitHubProfileBadge } from "@/components/ui";
import { HiddenMenu, NavLinks } from "./header/index";

type HeaderProps = {
  github_user_url: string;
  github_username: string;
  github_img_profile_url: string;
};

export function Header({
  github_user_url,
  github_username,
  github_img_profile_url,
}: HeaderProps): ReactElement {
  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="nav-top flex-between">
          <div className="flex-center gap-xl">
            <HiddenMenu />

            <GitHubProfileBadge
              url={github_user_url}
              username={github_username}
            />
          </div>

          <div>
            <Avatar
              size={35}
              className="avatar"
              url={github_img_profile_url}
              alt="avatar image profile"
            />
          </div>
        </div>

        <NavLinks ul_classes={["nav-bottom", "flex-left", "gap-sm"]} />
      </nav>
    </header>
  );
}
