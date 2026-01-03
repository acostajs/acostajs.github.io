import { PROFILE } from "@/lib/api";
import { GITHUB_PORTFOLIO_FOLDER } from "@/lib/api/github";
import type { AboutJSON, ProjectItem, ProjectJSON } from "@/types"; // Raw folder items
import { useEffect, useState } from "react";

export function useRepositoryData(repoName: string) {
  const [json, setJson] = useState<AboutJSON | ProjectJSON | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [fadeOut, setFadeOut] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setLoadingMessage("Loading files...");
        const res = await fetch(GITHUB_PORTFOLIO_FOLDER(repoName));
        if (!res.ok) setError("It was not possible to fetch information");

        const files: ProjectItem[] = await res.json();
        if (!files) setError("No Files where found");

        const jsonFile = files.find((f) => f.name === "portfolio.json");
        if (!jsonFile) setError("portfolio.json not found");
        if (!jsonFile?.download_url) throw new Error("No portfolio.json");

        setLoadingMessage("Loading project details...");
        const jsonRes = await fetch(jsonFile.download_url);
        const jsonData = await jsonRes.json();

        const typedJson = repoName === PROFILE.github.username
          ? (jsonData as AboutJSON)
          : (jsonData as ProjectJSON);
        setJson(typedJson);

        const images = files
          .filter((f) => f.name.startsWith("portfolio-img-"))
          .map((f) => f.download_url!);
        if (!images) setError("No images where found");
        setImages(images);
      } catch {
        setError("Failed to load project");
      } finally {
        setFadeOut(true);
        setTimeout(() => setLoadingMessage("Ready!"), 1000);
      }
    }

    if (repoName) load();
  }, [repoName]);

  return {
    json,
    images,
    fadeOut,
    loadingMessage,
    error,
  };
}
