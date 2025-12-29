import { ErrorMessage } from "@/components/layout/ErrorMessage";
import { Loading } from "@/components/layout/Loading";
import { CONFIG } from "profile.config";
import { usePortfolioData } from "../hooks/usePortfolioData";
import type { AboutPortfolioJson } from "../pages/types";

export function About() {
  const { data, loading, error } = usePortfolioData(
    `${CONFIG.github.username}`,
  );

  if (error) return <ErrorMessage error_message={error} />;
  if (loading || !data?.json) {
    return <Loading loading_message="Loading data..." />;
  }

  if ("about" in data.json) {
    const aboutData: AboutPortfolioJson = data.json.about;

    return (
      <section>
        <div className={`section-title `}>
          <h1>{aboutData.about.headline}</h1>
          <span className="muted">{aboutData.about.tagline}</span>
        </div>

        <div className="about-text">
          <h2>A little bit about me...</h2>
          <p>{aboutData.story.intro}</p>
          <p>{aboutData.story.transition}</p>
          <p>{aboutData.story.passions}</p>
        </div>

        <div className="about-softskills">
          <h2>Soft skills</h2>
          <ul>
            {aboutData.softSkills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>

        <div className="about-personal">
          <h2>Personal Interests</h2>
          <ul>
            {aboutData.personal.interests.map((interest, i) => <li key={i}>{interest}</li>)}
          </ul>
        </div>

        <div className="about-languages">
          <h2>Languages</h2>
          <ul>
            {aboutData.personal.languages.map((language, i) => (
              <li key={i}>
                {language.name} - {language.level}
              </li>
            ))}
          </ul>
        </div>

        <div className="about-funfacts">
          <h2>Fun Facts</h2>
          <ul>
            {aboutData.personal.funFacts.map((fact, i) => <li key={i}>{fact}</li>)}
          </ul>
        </div>

        <div className="about-values">
          <h2>Values</h2>
          <ul>
            {aboutData.values.map((value, i) => <li key={i}>{value}</li>)}
          </ul>
        </div>

        <div className="about-img">
          <figure>
            {data.images && data.images.length > 0
              ? (
                <img
                  src={data.images[0]}
                  alt={`${aboutData.about.headline} - Profile photo`}
                  loading="lazy"
                />
              )
              : (
                <div className="placeholder-img">
                  <span>No image available</span>
                </div>
              )}
          </figure>
        </div>
      </section>
    );
  }

  return <div>Invalid portfolio data</div>;
}
