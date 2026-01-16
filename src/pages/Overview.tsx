import { OverviewSection, ProjectSection } from "@/components/overview";
import { useGitHub } from "@/context/GitHubContext";
import type { ReactElement } from "react";
import { BiSolidGame } from "react-icons/bi";

function OverviewHeader(): ReactElement {
  return (
    <section className="overview-header flex flex-column gap-xl">
      <div className="flex-left gap-md">
        <BiSolidGame size={45} />
        <p>It's good to see you!</p>
      </div>

      <p>I'm Juan, a Montreal-based Colombian-Canadian Web developer.</p>
    </section>
  );
}

export function Overview(): ReactElement {
  const { repos, readme } = useGitHub();

  return (
    <article>
      <OverviewHeader />
      <OverviewSection readme={readme} />
      <ProjectSection repos={repos} />
    </article>
  );
}
