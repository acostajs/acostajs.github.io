// AppLayout.tsx
import type { GithubUserProfile } from "@/pages/types";
import { GITHUB_URL } from "config_github_user";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { ErrorMessage } from "./components/layout/ErrorMessage";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  const [github, setGithub] = useState<GithubUserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadGitHubProfile() {
      try {
        setLoading(true);
        const response = await fetch(GITHUB_URL);
        if (!response.ok) setError("Error fetching GitHub User Profile");
        const data = await response.json();
        setGithub(data);
      } catch {
        setError("Error fetching GitHub User Profile");
      } finally {
        setLoading(false);
      }
    }

    loadGitHubProfile();
  }, []);

  if (loading || !github) return <span>Loading GitHub profile...</span>;

  return (
    <div className="app-root">
      <Header
        github_user_url={github.html_url}
        github_username={github.login}
        github_img_profile_url={github.avatar_url}
      />

      <main className="container">
        <ErrorMessage error_message={error} />
        {children}
      </main>

      <Footer />
    </div>
  );
}
