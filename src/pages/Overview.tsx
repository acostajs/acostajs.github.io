import type { ReactElement } from "react";
import { AsideProfile } from "../components/overview/AsideProfile";
import { MainContent } from "../components/overview/MainContent";
import { useGitHub } from "../context/GitHubContext";

export function Overview(): ReactElement {
  const { github, repos } = useGitHub();

  if (!github || !repos) return <h1>user not found</h1>;

  return (
    <section>
      <div className="container">
        <div className="overview-main grid">
          <AsideProfile profile={github} />
          <MainContent />
        </div>
      </div>
    </section>
  );
}
