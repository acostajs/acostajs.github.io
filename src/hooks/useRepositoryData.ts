import { GITHUB_PORTFOLIO_FOLDER } from "@/lib/api/github";
import { fetchProjectPortfolioJson, getPortfolioImages } from "@/lib/utils";
import type { ProjectJSON } from "@/types";
import { useEffect, useState } from "react";

type RepositoryData = {
  json: ProjectJSON | null;
  images: string[];
  error: string;
};

export function useRepositoryData(repoName: string): RepositoryData {
  const [json, setJson] = useState<ProjectJSON | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load(): Promise<void> {
      try {
        const res = await fetch(GITHUB_PORTFOLIO_FOLDER(repoName));
        if (!res.ok) setError("It was not possible to fetch information");

        const data = await res.json();
        const portfolioJson = await fetchProjectPortfolioJson(data);
        const images = getPortfolioImages(data);

        setJson(portfolioJson);
        setImages(images);
      } catch {
        setError(
          "The details for this project are currently being uploaded. Please check back soon.",
        );
      }
    }

    if (repoName) load();
  }, [repoName]);

  return {
    json,
    images,
    error,
  };
}
