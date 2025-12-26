import { useContext } from "react";
import type { MouseEvent, ReactNode } from "react";
import { NavigationContext } from "./context.ts";

type LinkProps = {
  to: string;
  children: ReactNode;
  onClick?: () => void;
};

export function Link({ to, children, onClick }: LinkProps) {
  const { setPathname: navigate } = useContext(NavigationContext);
  function handleClick(e: MouseEvent): void {
    e.preventDefault();
    navigate(to);
    onClick?.();
  }
  return (
    <a className="flex-left gap-sm" href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
