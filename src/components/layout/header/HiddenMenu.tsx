import { Burger } from "@/components/ui";
import type { ReactElement } from "react";
import { FaGithub } from "react-icons/fa";
import { NavLinks } from "./NavLinks";

export function HiddenMenu(): ReactElement {
  return (
    <div>
      <Burger />

      <div id="menu" popover="auto" className="menu-items">
        <div className="flex-between menu-top">
          <FaGithub size={24} />
          <button popoverTarget="menu">X</button>
        </div>

        <hr />
        <NavLinks ul_classes={["menu-links"]} popOverTarget={"menu"} />
        <hr />
        <p>
          This <strong>portfolio</strong>{" "}
          pulls live data from my GitHub using the GitHub API, automatically displaying repositories, commits, and
          contributions. Built with React and TypeScript, and deployed to GitHub Pages using Bun.
        </p>
      </div>
    </div>
  );
}
