import { GITHUB_PORTFOLIO_FOLDER, GITHUB_README, GITHUB_REPOS, GITHUB_URL, PROFILE } from "@/lib/api";
import { fetchAboutPortfolioJson, getPortfolioImages } from "@/lib/utils";
import type { AboutJSON, File, Repository, User } from "@/types";
import { useEffect, useState } from "react";

type GitHubData = {
  profile: User | null;
  repos: Repository[];
  readme: File | null;
  aboutJson: AboutJSON | null;
  images: Array<string> | null;
  fadeOut: boolean;
  error: string;
  loadingMessage: string;
};

export function useGitHubData(): GitHubData {
  const [profile, setProfile] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [readme, setReadme] = useState<File | null>(null);
  const [aboutJson, setAboutJson] = useState<AboutJSON | null>(null);
  const [images, setImages] = useState<Array<string>>([]);
  const [fadeOut, setFadeOut] = useState(false);
  const [error, setError] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("Loading profile...");

  const loadingTime = 1000;

  useEffect(() => {
    async function load(): Promise<void> {
      try {
        const [userRes, reposRes, readmeRes, aboutRes] = await Promise.all([
          fetch(GITHUB_URL),
          fetch(GITHUB_REPOS),
          fetch(GITHUB_README),
          fetch(GITHUB_PORTFOLIO_FOLDER(PROFILE.github.username)),
        ]);
        if (!userRes.ok) {
          setError("Failed to load GitHub Profile");
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
        if (!aboutRes.ok) {
          setError("Failed to load About JSON");
          return;
        }
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        const readmeData = await readmeRes.json();
        const aboutData = await aboutRes.json();

        const json = await fetchAboutPortfolioJson(aboutData);

        setProfile(userData);
        setRepos(reposData);
        setReadme(readmeData);
        setAboutJson(json);
        setImages(getPortfolioImages(aboutData));
      } catch {
        setError("Error fetching GitHub User Profile");
      } finally {
        setFadeOut(true);
        setTimeout(() => setLoadingMessage("Almost ready..."), loadingTime);
      }
    }

    load();
  }, []);

  return {
    profile,
    repos,
    readme,
    aboutJson,
    images,
    fadeOut,
    error,
    loadingMessage,
  };
}
