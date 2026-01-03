import { NavLink } from "@/components/ui";
import type { ReactElement } from "react";
import { FiBookOpen, FiBox, FiFolder, FiStar } from "react-icons/fi";

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
        <NavLink text="Overview" to="/" onClick={handleClick}>
          <FiBookOpen size={20} />
        </NavLink>
      </li>
      <li>
        <NavLink text="Projects" to="/projects" onClick={handleClick}>
          <FiFolder size={20} />
        </NavLink>
      </li>
      <li>
        <NavLink text="About" to="/about" onClick={handleClick}>
          <FiBox size={20} />
        </NavLink>
      </li>
      <li>
        <NavLink text="Contact" to="/contact" onClick={handleClick}>
          <FiStar size={20} />
        </NavLink>
      </li>
    </ul>
  );
}
