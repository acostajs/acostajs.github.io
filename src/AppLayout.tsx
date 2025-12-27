// AppLayout.tsx
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { GITHUB_REPOS, GITHUB_URL } from "../config";
import { ErrorMessage } from "./components/layout/ErrorMessage";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Loading } from "./components/layout/Loading";
import { GitHubProvider } from "./context/GitHubContext";
import type { GitHubRepo, GithubUserProfile } from "./pages/types";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  const [profile, setProfile] = useState<GithubUserProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [fadeOut, setFadeOut] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadGitHubProfile() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(GITHUB_URL),
          fetch(GITHUB_REPOS),
        ]);
        if (!userRes.ok || !reposRes.ok) {
          setError("Error fetching GitHub data");
          return;
        }
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        setProfile(userData);
        setRepos(reposData);
      } catch {
        setError("Error fetching GitHub User Profile");
      } finally {
        setFadeOut(true);
        setTimeout(() => setShowLoader(false), 600);
      }
    }

    loadGitHubProfile();
  }, []);

  return (
    <div className="app-root">
      <div className={`app-content ${showLoader ? "hidden" : ""}`}>
        <Header
          github_user_url={profile?.html_url || ""}
          github_username={profile?.login || ""}
          github_img_profile_url={profile?.avatar_url || ""}
        />
        <main className="container">
          <ErrorMessage error_message={error} />
          <GitHubProvider github={profile} repos={repos}>
            {children}
          </GitHubProvider>
        </main>
        <Footer github_user_name={profile?.name || ""} />
      </div>
      {showLoader && <Loading fadeOut={fadeOut} />}
    </div>
  );
}
