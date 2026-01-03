import { GITHUB_README, GITHUB_REPOS, GITHUB_URL } from "@/lib/api";
import type { File, Repository, User } from "@/types";
import { useEffect, useState } from "react";

export function useGitHubData() {
  const [profile, setProfile] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [readme, setReadme] = useState<File | null>(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [error, setError] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("Loading profile...");

  useEffect(() => {
    async function load() {
      try {
        const [userRes, reposRes, readmeRes] = await Promise.all([
          fetch(GITHUB_URL),
          fetch(GITHUB_REPOS),
          fetch(GITHUB_README),
        ]);
        if (!userRes.ok) {
          setError("Failed to load profile");
          return;
        }
        if (!reposRes.ok) {
          setError("Failed to load repositories");
          return;
        }
        if (!readmeRes.ok) {
          setError("Failed to load README");
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
      } finally {
        setFadeOut(true);
        setTimeout(() => setLoadingMessage("Almost ready..."), 1000);
      }
    }

    load();
  }, []);

  return { profile, repos, readme, fadeOut, error, loadingMessage };
}
