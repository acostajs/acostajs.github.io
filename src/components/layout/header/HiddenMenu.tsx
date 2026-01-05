import { Burger } from "@/components/ui";
import type { ReactElement } from "react";
import { FaGithub } from "react-icons/fa";
import { NavLinks } from "./NavLinks";

export function HiddenMenu(): ReactElement {
  return (
    <div>
      <Burger />

      <div id="menu" popover="auto">
        <div className="overlay">
          <div className="menu-items">
            <div className="flex-between menu-top">
              <FaGithub size={24} />
              <button popoverTarget="menu">X</button>
            </div>

            <hr />
            <NavLinks ul_classes={["menu-links"]} />
            <hr />
            <p>
              This <strong>portfolio</strong>
              dynamically pulls all the information directly from my GitHub via the GitHub API, automatically showcasing
              live repositories, commit activity, and contributions without manual updates. Built with React,
              TypeScript, and Bun for a static GitHub Pages deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
