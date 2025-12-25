import { useContext } from "react";
import type { MouseEvent, ReactNode } from "react";
import { NavigationContext } from "./context.ts";

type LinkProps = {
  to: string;
  children: ReactNode;
};

/**
 * When clicked, navigate `to` the given pathname.
 */
export function Link({ to, children }: LinkProps) {
  const { setPathname: navigate } = useContext(NavigationContext);
  function handleClick(e: MouseEvent): void {
    e.preventDefault();
    navigate(to);
  }
  return (
    <a className="flex-center gap-sm" href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
