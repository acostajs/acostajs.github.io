import type { ReactElement } from "react";
import { FaGithub } from "react-icons/fa";
import { HiddenMenu } from "./header/HiddenMenu";
import { NavLinks } from "./header/NavLinks";

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
    <header>
      <nav>
        <div className="nav-top flex-between">
          <div className="flex-center gap-md">
            <HiddenMenu />

            <a className="username flex-center gap-sm" href={github_user_url}>
              <FaGithub size={30} />
              {github_username}
            </a>
          </div>

          <div>
            <figure className="avatar-small">
              <img src={github_img_profile_url} alt="" />
            </figure>
          </div>
        </div>

        <NavLinks ul_classes={["nav-bottom", "flex-left", "gap-sm"]} />
      </nav>
    </header>
  );
}
