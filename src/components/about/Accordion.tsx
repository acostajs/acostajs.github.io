import type { AboutJSON } from "@/types";
import type { ReactElement } from "react";
import { AccordionItem } from "../ui";

type AccordionProps = {
  about: AboutJSON;
};

export function Accordion({ about }: AccordionProps): ReactElement {
  return (
    <section className="accordion">
      <AccordionItem
        headline={about.working_style.headline}
        story={about.working_style.story}
      />
      <AccordionItem
        headline={about.current_focus.headline}
        story={about.current_focus.story}
      />
      <AccordionItem
        headline={about.key_projects.headline}
        story={about.key_projects.story}
      />

      <AccordionItem
        headline={about.core_skills.headline}
        story={about.core_skills.story}
      />

      <AccordionItem
        headline={about.development_process.headline}
        story={about.development_process.story}
      />
      <AccordionItem
        headline={about.motivations.headline}
        story={about.motivations.story}
      />
      <AccordionItem
        headline={about.career_goals.headline}
        story={about.career_goals.story}
      />
    </section>
  );
}
