// AppLayout.tsx
import type { GithubUserProfile } from "@/pages/types";
import { GITHUB_URL } from "config_github_user";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { ErrorMessage } from "./components/layout/ErrorMessage";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Loading } from "./components/layout/Loading";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  const [github, setGithub] = useState<GithubUserProfile | null>(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadGitHubProfile() {
      try {
        const response = await fetch(GITHUB_URL);
        if (!response.ok) {
          setError("Error fetching GitHub User Profile");
          return;
        }
        const data = await response.json();
        setGithub(data);
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
          github_user_url={github?.html_url || ""}
          github_username={github?.login || ""}
          github_img_profile_url={github?.avatar_url || ""}
        />
        <main className="container">
          <ErrorMessage error_message={error} />
          {children}
        </main>
        <Footer github_user_name={github?.name || ""} />
      </div>
      {showLoader && <Loading fadeOut={fadeOut} />}
    </div>
  );
}
