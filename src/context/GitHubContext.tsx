import type { File, Repository, User } from "@/types";
import { createContext, useContext } from "react";
import type { ReactElement, ReactNode } from "react";

type GitHubContextType = {
  github: User | null;
  repos: Repository[];
  readme: File | null;
};

type GitHubProviderProps = {
  github: User | null;
  repos: Repository[];
  readme: File | null;
  children: ReactNode;
};

const GitHubContext = createContext<GitHubContextType | null>(null);

export function GitHubProvider({
  github,
  repos,
  readme,
  children,
}: GitHubProviderProps): ReactElement {
  return (
    <GitHubContext.Provider value={{ github, repos, readme }}>
      {children}
    </GitHubContext.Provider>
  );
}

export function useGitHub(): GitHubContextType {
  const context = useContext(GitHubContext);
  if (!context) throw new Error("useGitHub must be used within GitHubProvider");
  return context;
}
