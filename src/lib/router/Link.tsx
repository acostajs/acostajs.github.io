import { useContext } from "react";
import type { MouseEvent, ReactElement, ReactNode } from "react";
import { NavigationContext } from "./context.ts";

type LinkProps = {
  classes?: Array<string>;
  to: string;
  children: ReactNode;
  popOverTarget?: string;
};

export function Link({
  classes,
  to,
  children,
  popOverTarget,
}: LinkProps): ReactElement {
  const aClasses = classes?.join(" ") ?? "";
  const { setPathname: navigate } = useContext(NavigationContext);
  function handleClick(e: MouseEvent): void {
    if (popOverTarget) {
      const popover = document.getElementById(popOverTarget);
      popover?.hidePopover();
    }
    e.preventDefault();
    navigate(to);
  }
  return (
    <a
      className={aClasses}
      href={to}
      onClick={handleClick}
      popoverTarget={popOverTarget}
    >
      {children}
    </a>
  );
}
