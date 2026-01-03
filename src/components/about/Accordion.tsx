import type { AboutJSON } from "@/types";
import type { ReactElement } from "react";
import { AccordionItem } from "../ui";
import { CoreSkills } from "./CoreSkills";

type AccordionProps = {
  about: AboutJSON;
};

export function Accordion({ about }: AccordionProps): ReactElement {
  return (
    <section>
      <AccordionItem
        headline={about.background.headline}
        story={about.background.story}
      />
      <AccordionItem
        headline={about.key_projects.headline}
        story={about.key_projects.story}
      />
      <CoreSkills about={about} />

      <AccordionItem
        headline={about.background.headline}
        story={about.background.story}
      />
      <AccordionItem
        headline={about.development_process.headline}
        story={about.development_process.story}
      />
      <AccordionItem
        headline={about.influences.headline}
        story={about.influences.story}
      />
      <AccordionItem
        headline={about.career_goals.headline}
        story={about.career_goals.story}
      />
    </section>
  );
}
