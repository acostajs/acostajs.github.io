import type { AboutJSON } from "@/types";
import type { ReactElement } from "react";
import { AccordionList } from "../ui";

type CoreSkillsProps = {
  about: AboutJSON;
};

export function CoreSkills({ about }: CoreSkillsProps): ReactElement {
  return (
    <div className="core-skills">
      <details>
        <summary>{about.core_skills.headline}</summary>
        <div>
          <div className="skill">
            <h4>Front-End</h4>
            <AccordionList array={about.core_skills["front-end"]} />
          </div>
          <div className="skill">
            <h4>Back-End</h4>
            <AccordionList array={about.core_skills["back-end"]} />
          </div>
          <div className="skill">
            <h4>Tools</h4>
            <AccordionList array={about.core_skills["tools"]} />
          </div>
          <div className="skill">
            <h4>Data Bases</h4>
            <AccordionList array={about.core_skills["databases"]} />
          </div>
        </div>
      </details>
    </div>
  );
}
