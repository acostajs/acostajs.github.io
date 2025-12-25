import type { ReactElement } from "react";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiBun } from "react-icons/si";

const year = String(new Date().getFullYear());

export function Footer(): ReactElement {
  return (
    <footer>
      <div className="container flex-center gap-sm">
        <FaGithub size={22} />
        <span className="muted flex-center gap-sm">
          {year} Juan Acosta - Portfolio, made with <FaReact size={20} /> React & <SiBun size={20} /> bun.
        </span>
      </div>
    </footer>
  );
}
