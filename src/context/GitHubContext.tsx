// contexts/GitHubContext.tsx
import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { GitHubReadmeFile, GitHubRepo, GithubUserProfile } from "../pages/types";

type GitHubContextType = {
  github: GithubUserProfile | null;
  repos: GitHubRepo[];
  readme: GitHubReadmeFile | null;
};

type GitHubProviderProps = {
  github: GithubUserProfile | null;
  repos: GitHubRepo[];
  readme: GitHubReadmeFile | null;
  children: ReactNode;
};

const GitHubContext = createContext<GitHubContextType | null>(null);

export function GitHubProvider({
  github,
  repos,
  readme,
  children,
}: GitHubProviderProps) {
  return (
    <GitHubContext.Provider value={{ github, repos, readme }}>
      {children}
    </GitHubContext.Provider>
  );
}

export function useGitHub() {
  const context = useContext(GitHubContext);
  if (!context) throw new Error("useGitHub must be used within GitHubProvider");
  return context;
}
