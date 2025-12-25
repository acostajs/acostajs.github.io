import type { ReactElement } from "react";
import { FaGithub } from "react-icons/fa";

const year = String(new Date().getFullYear());

export function Footer(): ReactElement {
  return (
    <footer>
      <div className="container flex-center gap-sm">
        <FaGithub />
        <span className="muted">
          {year} Juan Acosta - Portfolio, made with React & bun.
        </span>
      </div>
    </footer>
  );
}
