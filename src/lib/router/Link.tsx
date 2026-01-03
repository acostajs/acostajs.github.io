import { useContext } from "react";
import type { MouseEvent, ReactNode } from "react";
import { NavigationContext } from "./context.ts";

type LinkProps = {
  classes?: Array<string>;
  to: string;
  children: ReactNode;
  onClick?: () => void;
};

export function Link({ classes, to, children, onClick }: LinkProps) {
  const aClasses = classes?.join(" ") ?? "";
  const { setPathname: navigate } = useContext(NavigationContext);
  function handleClick(e: MouseEvent): void {
    e.preventDefault();
    navigate(to);
    onClick?.();
  }
  return (
    <a className={aClasses} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
