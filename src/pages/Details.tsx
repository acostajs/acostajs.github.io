import { ErrorMessage } from "@/components/ui";
import { useRepositoryData } from "@/hooks";
import { useParams } from "@/lib/router";
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
    <article>
      <header>
        <h1>{meta.title}</h1>

        <p>
          {meta.type} · {meta.role}
        </p>

        <p>Status: {meta.status}</p>
      </header>

      <section>
        <h2>Overview</h2>
        <p>{overview.summary}</p>

        <h3>Problem</h3>
        <p>{overview.problem}</p>

        <h3>Solution</h3>
        <p>{overview.solution}</p>
      </section>

      {images.length > 0 && (
        <section>
          <h2>Project Preview</h2>

          {images.map((src, index) => (
            <figure key={src}>
              <img src={src} alt={`${meta.title} screenshot ${index + 1}`} />
            </figure>
          ))}
        </section>
      )}

      {responsibilities.length > 0 && (
        <section>
          <h2>Responsibilities</h2>
          <ul>
            {responsibilities.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      )}

      {key_features.length > 0 && (
        <section>
          <h2>Key Features</h2>
          <ul>
            {key_features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </section>
      )}

      <section>
        <h2>Architecture</h2>

        <p>
          <strong>Approach:</strong> {architecture.approach}
        </p>

        <p>
          <strong>Data flow:</strong> {architecture.data_flow}
        </p>

        <p>
          <strong>Deployment:</strong> {architecture.deployment}
        </p>
      </section>

      {tech_stack.length > 0 && (
        <section>
          <h2>Tech Stack</h2>
          <ul>
            {tech_stack.map((tech) => <li key={tech}>{tech}</li>)}
          </ul>
        </section>
      )}

      {challenges_and_learnings.length > 0 && (
        <section>
          <h2>Challenges & Learnings</h2>
          <ul>
            {challenges_and_learnings.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      )}

      {skills_demonstrated.length > 0 && (
        <section>
          <h2>Skills Demonstrated</h2>
          <ul>
            {skills_demonstrated.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </section>
      )}

      {future_improvements.length > 0 && (
        <section>
          <h2>Future Improvements</h2>
          <ul>
            {future_improvements.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      )}

      <footer>
        <h2>Links</h2>

        <ul>
          <li>
            <a href={links.live_demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </li>

          <li>
            <a
              href={links.source_code}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </li>
        </ul>
      </footer>
    </article>
  );
}
