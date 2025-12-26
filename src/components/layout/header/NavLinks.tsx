import type { ReactElement } from "react";
import { FiBookOpen, FiBox, FiFolder, FiStar } from "react-icons/fi";
import { Link } from "../../../lib/router/Link";

type NavLinksProps = {
  ul_classes?: Array<string>;
  handleClick?: () => void;
};

export function NavLinks({
  ul_classes,
  handleClick,
}: NavLinksProps): ReactElement {
  const ulClassName = ul_classes?.join(" ") ?? "";

  return (
    <ul className={ulClassName}>
      <li>
        <Link to={"/"} onClick={handleClick}>
          <FiBookOpen size={20} /> Overview
        </Link>
      </li>
      <li>
        <a className="flex-left gap-sm" href="#projects" onClick={handleClick}>
          <FiFolder size={20} />
          Projects
        </a>
      </li>
      <li>
        <Link to={"/about"} onClick={handleClick}>
          <FiBox size={20} /> About Me
        </Link>
      </li>
      <li>
        <Link to={"/contact"} onClick={handleClick}>
          <FiStar size={20} /> Contact
        </Link>
      </li>
    </ul>
  );
}
