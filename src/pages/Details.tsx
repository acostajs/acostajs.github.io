import { ErrorMessage } from "@/components/ui";
import { useRepositoryData } from "@/hooks";
import { Link, useParams } from "@/lib/router";
import type { ReactElement } from "react";

export function Details(): ReactElement {
  const { repoName } = useParams();
  if (!repoName) {
    return <ErrorMessage error_message="Couldn't fetch repository name" />;
  }

  const { json, images, error } = useRepositoryData(repoName);
  if (error) {
    return <ErrorMessage error_message={error} />;
  }
  if (!json) {
    return <ErrorMessage error_message="Couldn't fetch project data" />;
  }

  const {
    meta,
    overview,
    responsibilities,
    tech_stack,
    architecture,
    key_features,
    challenges_and_learnings,
    skills_demonstrated,
    future_improvements,
    links,
  } = json;

  return (
    <article className="details">
      <div className="bread-crumbs">
        <Link classes={["muted"]} to={"projects/"}>
          projects
        </Link>
        <span className="muted">/ {repoName}</span>
      </div>
      <header className="details-header flex flex-column gap-md">
        <h1>{meta.title}</h1>

        <div className="details-header-bottom flex-between flex-wrap">
          <div className="tag flex gap-md">
            <span>{meta.type}</span>
            <span>{meta.role}</span>
          </div>

          <p className="tag">
            Status: <span className="details-status">{meta.status}</span>
            {" "}
          </p>
        </div>
      </header>

      <section className="details-overview">
        <div className="details-section-title">
          <h2>Overview</h2>
        </div>
        <div className="details-section-text">
          <h3>Quick Summary</h3>
          <p>{overview.summary}</p>
          <h3>Problem</h3>
          <p>{overview.problem}</p>

          <h3>Solution</h3>
          <p>{overview.solution}</p>
        </div>
      </section>

      <div className="details-grid grid gap-xl">
        <div className="left">
          {images.length > 0 && (
            <section className="details-carrousel">
              <div className="details-section-title">
                <h2>Project Preview</h2>
              </div>

              <div className="carousel-container">
                <ul className="carousel">
                  {images.map((src, index) => (
                    <li key={`slide-${index}`}>
                      <figure>
                        <img
                          src={src}
                          alt={`${meta.title} screenshot ${index + 1}`}
                        />
                      </figure>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {key_features.length > 0 && (
            <section className="details-features">
              <h2>Key Features</h2>
              <ul className="details-list">
                {key_features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </section>
          )}

          {responsibilities.length > 0 && (
            <section className="details-features">
              <h2>Responsibilities</h2>
              <ul className="details-list">
                {responsibilities.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          )}

          {challenges_and_learnings.length > 0 && (
            <section className="details-features">
              <h2>Challenges & Learnings</h2>
              <ul className="details-list">
                {challenges_and_learnings.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          )}

          {future_improvements.length > 0 && (
            <section className="details-features">
              <h2>Future Improvements</h2>
              <ul className="details-list">
                {future_improvements.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          )}
        </div>

        <div className="right">
          {tech_stack.length > 0 && (
            <section className="details-stack">
              <div className="details-section-title">
                <h2>Tech Stack</h2>
              </div>
              <div className="details-section-text">
                <ul className=" flex flex-wrap gap-md">
                  {tech_stack.map((tech) => (
                    <li key={tech} className="details-stack-item tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          <section className="details-architecture">
            <div className="details-section-title">
              <h2>Architecture</h2>
            </div>

            <div className="details-section-text">
              <ul className="details-list">
                <li>
                  <strong>Approach:</strong> {architecture.approach}
                </li>
                <li>
                  <strong>Data flow:</strong> {architecture.data_flow}
                </li>
                <li>
                  <strong>Deployment:</strong> {architecture.deployment}
                </li>
              </ul>
            </div>
          </section>

          <section className="details-links">
            <div className="details-section-title">
              <h2>Links</h2>
            </div>
            <div className="details-section-text flex flex-column gap-md">
              <a
                className="tag details-link"
                href={links.source_code}
                target="_blank"
              >
                Source Code
              </a>

              <a
                className="tag details-link"
                href={links.live_demo}
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </section>

          {skills_demonstrated.length > 0 && (
            <section className="details-skills">
              <div className="details-section-title">
                <h2>Skills Demonstrated</h2>
              </div>
              <div className="details-section-text">
                <ul className="details-list">
                  {skills_demonstrated.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            </section>
          )}
        </div>
      </div>

      <Link classes={["muted"]} to={"projects/"}>
        ← Back
      </Link>
    </article>
  );
}
