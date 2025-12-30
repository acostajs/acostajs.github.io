import { useEffect, useState } from "react";
import { GITHUB_PORTFOLIO_FOLDER } from "../../api";
import { CONFIG } from "../../profile.config";
import type { AboutPortfolioJson, PortfolioJson, RepoPortfolioJson } from "../pages/types";

type PortfolioFolderItem = {
  name: string;
  download_url: string | null;
  type: "file";
};

export type PortfolioData = {
  json: PortfolioJson;
  images?: string[];
  isProfile: boolean;
};

export function usePortfolioData(repoName: string) {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const res = await fetch(GITHUB_PORTFOLIO_FOLDER(repoName));
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const files: PortfolioFolderItem[] = await res.json();
        const jsonFile = files.find((f) => f.name === "portfolio.json");

        if (!jsonFile?.download_url) throw new Error("portfolio.json missing");

        const jsonRes = await fetch(jsonFile.download_url);
        const rawJson = await jsonRes.json();

        const isProfile = repoName === CONFIG.github.username;
        const jsonData: PortfolioJson = isProfile
          ? { about: rawJson as AboutPortfolioJson }
          : { repo: rawJson as RepoPortfolioJson };

        const imgFiles = files.filter(
          (f) => f.name.startsWith("portfolio-img-") && f.download_url,
        );
        const images = imgFiles
          .map((f) => f.download_url)
          .filter((url): url is string => url !== null);

        setData({
          json: jsonData,
          images: images.length ? images : undefined,
          isProfile,
        });
      } catch {
        setError("portfolio.json missing");
      } finally {
        setLoading(false);
      }
    }

    if (repoName) load();
  }, [repoName]);

  return { data, loading, error };
}
