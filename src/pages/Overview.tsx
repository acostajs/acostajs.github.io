import { GITHUB_URL } from "config_github_user";
import { useEffect, useState } from "react";
import { ErrorMessage } from "../components/layout/ErrorMessage";
import { Footer } from "../components/layout/Footer";
import { NavBar } from "../components/layout/NavBar";
import type { GithubUserProfile } from "./types";

export function Overview() {
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
    <>
      <header>
        <NavBar
          github_user_url={github.html_url}
          github_username={github.login}
          github_img_profile_url={github.avatar_url}
        />
      </header>
      <main>
        <ErrorMessage error_message={error} />
      </main>
      <Footer />
    </>
  );
}
