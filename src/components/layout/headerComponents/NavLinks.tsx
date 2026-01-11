import { BookIcon, BoxIcon, FolderIcon, StarLinkIcon } from "@/components/icons";
import type { ReactElement } from "react";
import { NavLink } from "./NavLink";

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
          <BookIcon size={20} />
        </NavLink>
      </li>
      <li>
        <NavLink text="Projects" to="/projects" popOverTarget={popOverTarget}>
          <FolderIcon size={20} />
        </NavLink>
      </li>
      <li>
        <NavLink text="About" to="/about" popOverTarget={popOverTarget}>
          <BoxIcon size={20} />
        </NavLink>
      </li>
      <li>
        <NavLink text="Contact" to="/contact" popOverTarget={popOverTarget}>
          <StarLinkIcon size={20} />
        </NavLink>
      </li>
    </ul>
  );
}
