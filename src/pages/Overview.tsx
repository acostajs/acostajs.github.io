import type { ReactElement } from "react";
import { AsideProfile } from "../components/overview/AsideProfile";
import { MainContent } from "../components/overview/MainContent";
import { useGitHub } from "../context/GitHubContext";

export function Overview(): ReactElement {
  const { github, repos, readme } = useGitHub();

  if (!github) return <h1>Loading profile...</h1>;
  if (!readme) return <h1>Loading readme...</h1>;
  if (repos.length === 0) return <h1>No repositories found</h1>;

  return (
    <section>
      <div className="container">
        <div className="overview-main grid">
          <AsideProfile profile={github} />
          <MainContent content={readme} repos={repos} />
        </div>
      </div>
    </section>
  );
}
