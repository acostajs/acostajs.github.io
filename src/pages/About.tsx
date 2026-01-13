import { Accordion, Bio } from "@/components/about";
import { ErrorMessage } from "@/components/ui";
import { useGitHub } from "@/context/GitHubContext";
import type { ReactElement } from "react";

export function About(): ReactElement {
  const { aboutJson, images } = useGitHub();

  if (!aboutJson) {
    return <ErrorMessage error_message="This section is under construction." />;
  }

  const about = aboutJson;

  return (
    <article>
      <Bio
        headline={about.bio.headline}
        story={about.bio.story}
        images={images}
      />

      <Accordion about={about} />
    </article>
  );
}
