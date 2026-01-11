import { Link } from "@/lib/router";
import type { ReactElement, ReactNode } from "react";

type NavLinkProps = {
  text: string;
  to: string;
  children?: ReactNode;
  popOverTarget?: string;
};

export function NavLink({
  text,
  to,
  children,
  popOverTarget,
}: NavLinkProps): ReactElement {
  return (
    <Link
      classes={["flex-left", "gap-md", "navlink"]}
      to={to}
      popOverTarget={popOverTarget}
    >
      {children}
      {text}
    </Link>
  );
}
