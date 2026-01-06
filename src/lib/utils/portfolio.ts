import type { AboutJSON, PortfolioItem, ProjectJSON } from "@/types";

function getPortfolioJson(files: PortfolioItem[]): string {
  const jsonFile = files.find((f) => f.name === "portfolio.json");
  if (!jsonFile) {
    throw new Error("portfolio.json not found");
  }
  return jsonFile.download_url;
}

export function getPortfolioImages(files: PortfolioItem[]): string[] {
  const images = files
    .filter((f) => f.name.startsWith("portfolio-img-"))
    .map((f) => f.download_url);

  if (!images.length) {
    throw new Error("No images were found");
  }
  return images;
}

export async function fetchAboutPortfolioJson(
  files: PortfolioItem[],
): Promise<AboutJSON | null> {
  const url = getPortfolioJson(files);
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to load portfolio.json");
  }

  const json = await res.json();

  return json;
}

export async function fetchProjectPortfolioJson(
  files: PortfolioItem[],
): Promise<ProjectJSON | null> {
  const url = getPortfolioJson(files);
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to load portfolio.json");
  }

  const json = await res.json();

  return json;
}
