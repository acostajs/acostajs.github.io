import type { ReactElement } from "react";

import { Loading } from "@/components/layout/Loading";
import { MainContent } from "../components/overview/MainContent";
import { useGitHub } from "../context/GitHubContext";

export function Overview(): ReactElement {
  const { github, repos, readme } = useGitHub();

  if (!github) return <Loading loading_message="Loading profile..." />;
  if (!readme) return <Loading loading_message="Loading data..." />;
  if (repos.length === 0) {
    return <Loading loading_message="No repositories found" />;
  }

  return <MainContent content={readme} repos={repos} />;
}
