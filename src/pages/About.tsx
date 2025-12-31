import { ErrorMessage } from "@/components/layout/ErrorMessage";
import { Loading } from "@/components/layout/Loading";
import { GITHUB_USERNAME } from "api";
import { usePortfolioData } from "../hooks/usePortfolioData";

import { AboutAccordion } from "@/components/about/AboutAccordion";
import { ContactSection } from "@/components/overview/ContactSection";
import type { ReactElement } from "react";
import { AboutImg } from "../components/about/AboutImg";
import type { AboutPortfolioJson } from "../pages/types";

export function About(): ReactElement {
  const { data, loading, error } = usePortfolioData(GITHUB_USERNAME);

  if (error) return <ErrorMessage error_message={error} />;
  if (loading || !data?.json) {
    return <Loading loading_message="Loading data..." />;
  }

  if ("about" in data.json) {
    const aboutData: AboutPortfolioJson = data.json.about;

    return (
      <>
        <div className="about-hero flex card">
          <div className="left">
            <h1 className="headline">{aboutData.bio.headline}</h1>
            <p className="story">{aboutData.bio.story}</p>
          </div>

          <div className="right flex-center">
            <AboutImg data={data} img_number={0} classes={["about-hero-img"]} />
          </div>
        </div>

        <div className="about-personality flex">
          <div className="left flex-center">
            <AboutImg
              data={data}
              img_number={1}
              classes={["about-personality-img"]}
            />
          </div>
          <div className="right">
            <h2 className="headline">{aboutData.personality.headline}</h2>
            <p className="story">{aboutData.personality.story}</p>
          </div>
        </div>

        <AboutAccordion aboutData={aboutData} />
        <ContactSection />
      </>
    );
  }

  return <div>Invalid portfolio data</div>;
}
