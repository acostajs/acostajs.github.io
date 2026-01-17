import type { AboutJSON, File, PinnedRepository, Repository, User } from "@/types";
import { createContext, useContext } from "react";
import type { ReactElement, ReactNode } from "react";

type GitHubContextType = {
  github: User | null;
  repos: Repository[];
  readme: File | null;
  pinnedRepos: PinnedRepository[];
  images: string[] | null;
  aboutJson: AboutJSON | null;
};

type GitHubProviderProps = {
  github: User | null;
  repos: Repository[];
  readme: File | null;
  pinnedRepos: PinnedRepository[];
  aboutJson: AboutJSON | null;
  images: string[] | null;
  children: ReactNode;
};

const GitHubContext = createContext<GitHubContextType | null>(null);

export function GitHubProvider({
  github,
  repos,
  readme,
  pinnedRepos,
  aboutJson,
  images,
  children,
}: GitHubProviderProps): ReactElement {
  return (
    <GitHubContext.Provider
      value={{ github, repos, readme, pinnedRepos, aboutJson, images }}
    >
      {children}
    </GitHubContext.Provider>
  );
}

export function useGitHub(): GitHubContextType {
  const context = useContext(GitHubContext);
  if (!context) throw new Error("useGitHub must be used within GitHubProvider");
  return context;
}
