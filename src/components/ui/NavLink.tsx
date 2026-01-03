import { Link } from "@/lib/router";
import type { ReactElement, ReactNode } from "react";

type NavLinkProps = {
  text: string;
  to: string;
  children?: ReactNode;
  onClick?: () => void;
};

export function NavLink({
  text,
  to,
  children,
  onClick,
}: NavLinkProps): ReactElement {
  return (
    <Link
      classes={["flex-left", "gap-md", "navlink"]}
      to={to}
      onClick={onClick}
    >
      {children}
      {text}
    </Link>
  );
}
