import { useState } from "react";
import type { ReactElement } from "react";
import type { AboutPortfolioJson } from "../../pages/types";
import { AboutImg } from "./AboutImg";
import { AboutList } from "./AboutList";

type AboutAccordionProps = {
  aboutData: AboutPortfolioJson;
};

export function AboutAccordion({
  aboutData,
}: AboutAccordionProps): ReactElement {
  const [openSections, setOpenSections] = useState(new Set<string>());

  const sections = [
    {
      id: "background",
      headline: aboutData.background.headline,
      content: <p className="story">{aboutData.background.story}</p>,
    },
    {
      id: "key_projects",
      headline: aboutData.key_projects.headline,
      content: <p>{aboutData.key_projects.story}</p>,
    },
    {
      id: "core_skills",
      headline: aboutData.core_skills.headline,
      content: (
        <>
          <div>
            <h3>Front-end:</h3>
            <AboutList array={aboutData.core_skills["front-end"]} />
          </div>

          <div>
            <h3>Back-end:</h3>
            <AboutList array={aboutData.core_skills["back-end"]} />
          </div>

          <div>
            <h3>Tools:</h3>
            <AboutList array={aboutData.core_skills.tools} />
          </div>

          <div>
            <h3>Databases:</h3>
            <AboutList array={aboutData.core_skills.databases} />
          </div>
        </>
      ),
    },
    {
      id: "development_process",
      headline: aboutData.development_process.headline,
      content: <p>{aboutData.development_process.story}</p>,
    },
    {
      id: "influences",
      headline: aboutData.influences.headline,
      content: <p>{aboutData.influences.story}</p>,
    },
    {
      id: "career_goals",
      headline: aboutData.career_goals.headline,
      content: <p>{aboutData.career_goals.story}</p>,
    },
  ];

  function toggleSection(id: string) {
    const newSet = new Set(openSections);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setOpenSections(newSet);
  }

  return (
    <div className="about-accordion">
      {sections.map((section) => (
        <section key={section.id} className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => toggleSection(section.id)}
            aria-expanded={openSections.has(section.id)}
          >
            <h3>{section.headline}</h3>
            <span className="icon" aria-hidden="true">
              ▼
            </span>
          </button>
          <div
            className="accordion-content"
            aria-hidden={!openSections.has(section.id)}
          >
            <div className="content-wrapper flex flex-column gap-md">
              {section.content}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
