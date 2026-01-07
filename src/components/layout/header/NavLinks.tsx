import { NavLink } from "@/components/ui";
import type { ReactElement } from "react";
import { FiBookOpen, FiBox, FiFolder, FiStar } from "react-icons/fi";

type NavLinksProps = {
  ul_classes?: Array<string>;
  popOverTarget?: string;
};

export function NavLinks({
  ul_classes,
  popOverTarget,
}: NavLinksProps): ReactElement {
  const ulClassName = ul_classes?.join(" ") ?? "";

  return (
    <ul className={ulClassName} popoverTargetAction="hide">
      <li>
        <NavLink text="Overview" to="/" popOverTarget={popOverTarget}>
          <FiBookOpen size={20} />
        </NavLink>
      </li>
      <li>
        <NavLink text="Projects" to="/projects" popOverTarget={popOverTarget}>
          <FiFolder size={20} />
        </NavLink>
      </li>
      <li>
        <NavLink text="About" to="/about" popOverTarget={popOverTarget}>
          <FiBox size={20} />
        </NavLink>
      </li>
      <li>
        <NavLink text="Contact" to="/contact" popOverTarget={popOverTarget}>
          <FiStar size={20} />
        </NavLink>
      </li>
    </ul>
  );
}
