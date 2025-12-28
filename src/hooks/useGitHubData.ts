import { useEffect, useState } from "react";
import { GITHUB_README, GITHUB_REPOS, GITHUB_URL } from "../../api";
import type { GitHubReadmeFile, GitHubRepo, GithubUserProfile } from "../pages/types";

export function useGitHubData() {
  const [profile, setProfile] = useState<GithubUserProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [readme, setReadme] = useState<GitHubReadmeFile | null>(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const [userRes, reposRes, readmeRes] = await Promise.all([
          fetch(GITHUB_URL),
          fetch(GITHUB_REPOS),
          fetch(GITHUB_README),
        ]);
        if (!userRes.ok || !reposRes.ok || !readmeRes.ok) {
          setError("Error fetching GitHub data");
          setShowLoader(false);
          return;
        }
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        const readmeData = await readmeRes.json();
        setProfile(userData);
        setRepos(reposData);
        setReadme(readmeData);
      } catch {
        setError("Error fetching GitHub User Profile");
        setShowLoader(false);
      } finally {
        setFadeOut(true);
        setTimeout(() => setShowLoader(false), 600);
      }
    }

    load();
  }, []);

  return { profile, repos, readme, fadeOut, error, showLoader };
}
