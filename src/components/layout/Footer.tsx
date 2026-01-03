import type { ReactElement } from "react";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiBun } from "react-icons/si";

type FooterProps = {
  github_user_name: string;
};

export function Footer({ github_user_name }: FooterProps): ReactElement {
  const year = String(new Date().getFullYear());

  return (
    <footer>
      <div className="container">
        <div className="footer-grid grid gap-sm">
          <span className="muted flex-center gap-sm">
            <FaGithub size={22} /> {year} {github_user_name} - Portfolio
          </span>

          <span className="muted flex-center gap-sm">
            <FaReact size={20} /> - Made with React & Bun - <SiBun size={20} />
          </span>
        </div>
      </div>
    </footer>
  );
}
