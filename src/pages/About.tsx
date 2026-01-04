import { Accordion, Bio, Personality } from "@/components/about";
import { ErrorMessage } from "@/components/layout";
import { ContactSection } from "@/components/ui";
import { Loading } from "@/components/ui";
import { useRepositoryData } from "@/hooks";
import { GITHUB_USERNAME } from "@/lib/api";
import type { AboutJSON } from "@/types";
import type { ReactElement } from "react";

export function About(): ReactElement {
  const { json, images, fadeOut, loadingMessage, error } = useRepositoryData(GITHUB_USERNAME);
  if (error) return <ErrorMessage error_message={error} />;
  if (!json || !("bio" in json)) {
    return <Loading loading_message={loadingMessage} fadeOut={fadeOut} />;
  }

  const about: AboutJSON = json;

  return (
    <>
      <Bio
        headline={about.bio.headline}
        story={about.bio.story}
        images={images}
      />

      <Personality
        headline={about.personality.headline}
        story={about.personality.story}
        images={images}
      />

      <Accordion about={about} />

      <ContactSection />
    </>
  );
}
