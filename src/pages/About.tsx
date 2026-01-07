import { Accordion, Bio } from "@/components/about";
import { ContactSection, ErrorMessage } from "@/components/ui";
import { useGitHub } from "@/context/GitHubContext";
import type { ReactElement } from "react";

export function About(): ReactElement {
  const { aboutJson, images } = useGitHub();

  if (!aboutJson) {
    return <ErrorMessage error_message="aboutJSON file has not been created" />;
  }

  const about = aboutJson;

  return (
    <>
      <Bio
        headline={about.bio.headline}
        story={about.bio.story}
        images={images}
      />

      <Accordion about={about} />

      <ContactSection />
    </>
  );
}
