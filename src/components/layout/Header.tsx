import { Link } from "@/lib/router";
import type { ReactElement } from "react";
import { FaGithub } from "react-icons/fa";
import { FiBookOpen, FiBox, FiFolder, FiStar } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

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
      <nav className="container">
        <div className="nav-top flex-between">
          <div className="flex-center gap-lg">
            <button className="burger">
              <RxHamburgerMenu size={20} />
            </button>
            <FaGithub size={30} />
            <a className="username" href={github_user_url}>
              {github_username}
            </a>
          </div>

          <div>
            <figure className="avatar-small">
              <img src={github_img_profile_url} alt="" />
            </figure>
          </div>
        </div>

        <div className="nav-bottom flex-left gap-xl">
          <Link to={"/"}>
            <FiBookOpen size={20} /> Overview
          </Link>
          <a className="flex-center gap-sm" href="#projects">
            <FiFolder size={20} />
            Projects
          </a>
          <Link to={"/about"}>
            <FiBox size={20} /> About Me
          </Link>
          <Link to={"/contact"}>
            <FiStar size={20} /> Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
