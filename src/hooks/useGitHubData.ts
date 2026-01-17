import {
  GITHUB_PINNED_REPOS,
  GITHUB_PORTFOLIO_FOLDER,
  GITHUB_README,
  GITHUB_REPOS,
  GITHUB_URL,
  PROFILE,
} from "@/lib/api";
import { fetchAboutPortfolioJson, getPortfolioImages } from "@/lib/utils";
import type { AboutJSON, File, PinnedRepository, Repository, User } from "@/types";
import { useEffect, useState } from "react";

type GitHubData = {
  profile: User | null;
  repos: Repository[];
  readme: File | null;
  pinnedRepos: PinnedRepository[];
  aboutJson: AboutJSON | null;
  images: Array<string> | null;
  error: string;
};

export function useGitHubData(): GitHubData {
  const [profile, setProfile] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [readme, setReadme] = useState<File | null>(null);
  const [pinnedRepos, setPinnedRepos] = useState<PinnedRepository[]>([]);
  const [aboutJson, setAboutJson] = useState<AboutJSON | null>(null);
  const [images, setImages] = useState<Array<string>>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load(): Promise<void> {
      try {
        const [userRes, reposRes, readmeRes, pinnedRes, aboutRes] = await Promise.all([
          fetch(GITHUB_URL),
          fetch(GITHUB_REPOS),
          fetch(GITHUB_README),
          fetch(GITHUB_PINNED_REPOS),
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
        if (!pinnedRes.ok) {
          setError("Failed to load pinned repositores");
          return;
        }
        if (!aboutRes.ok) {
          setError("Failed to load About JSON");
          return;
        }
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        const readmeData = await readmeRes.json();
        const pinnedData = await pinnedRes.json();
        const aboutData = await aboutRes.json();

        const json = await fetchAboutPortfolioJson(aboutData);

        setProfile(userData);
        setRepos(reposData);
        setReadme(readmeData);
        setPinnedRepos(pinnedData);
        setAboutJson(json);
        setImages(getPortfolioImages(aboutData));
      } catch {
        setError("Error fetching GitHub User Profile");
      }
    }

    load();
  }, []);

  return {
    profile,
    repos,
    readme,
    pinnedRepos,
    aboutJson,
    images,
    error,
  };
}
