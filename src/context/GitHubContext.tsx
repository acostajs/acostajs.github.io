// contexts/GitHubContext.tsx
import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { GitHubRepo, GithubUserProfile } from "../pages/types";

type GitHubContextType = {
  github: GithubUserProfile | null;
  repos: GitHubRepo[];
};

type GitHubProviderProps = {
  github: GithubUserProfile | null;
  repos: GitHubRepo[];
  children: ReactNode;
};

const GitHubContext = createContext<GitHubContextType | null>(null);

export function GitHubProvider({
  github,
  repos,
  children,
}: GitHubProviderProps) {
  return (
    <GitHubContext.Provider value={{ github, repos }}>
      {children}
    </GitHubContext.Provider>
  );
}

export function useGitHub() {
  const context = useContext(GitHubContext);
  if (!context) throw new Error("useGitHub must be used within GitHubProvider");
  return context;
}
