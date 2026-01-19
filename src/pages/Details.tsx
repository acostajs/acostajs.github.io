import {
  Carousel,
  DetailsArchitecture,
  DetailsHighlight,
  DetailsLinks,
  DetailsOverview,
  DetailsSkills,
  DetailsTechStack,
} from "@/components/details";
import { ErrorMessage } from "@/components/ui";
import { useRepositoryData } from "@/hooks";
import { Link, useParams } from "@/lib/router";
import type { ReactElement } from "react";

type DetailsHeaderProps = {
  title: string;
  type: string;
  role: string;
  status: string;
};

function DetailsHeader({
  title,
  type,
  role,
  status,
}: DetailsHeaderProps): ReactElement {
  return (
    <header className="details-header flex flex-column gap-md">
      <h1>{title}</h1>

      <div className="flex-between gap-xl flex-wrap">
        <div className="tag flex gap-md">
          <span>{type}</span>
          <span>{role}</span>
        </div>

        <p className="tag">
          Status: <span className="details-status">{status}</span>
          {" "}
        </p>
      </div>
    </header>
  );
}

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
    return (
      <ErrorMessage error_message="The details for this project are currently being uploaded. Please check back soon." />
    );
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
      <Link classes={["muted"]} to={"projects/"}>
        ← Back to Projects
      </Link>

      <DetailsHeader
        title={meta.title}
        type={meta.type}
        role={meta.role}
        status={meta.status}
      />

      <DetailsOverview
        summary={overview.summary}
        problem={overview.problem}
        solution={overview.solution}
      />

      <div className="details-grid grid gap-xl">
        <div className="left">
          <Carousel images={images} alt={meta.title} />

          <DetailsHighlight title="Key Features" array={key_features} />
          <DetailsHighlight title="Responsabilities" array={responsibilities} />
          <DetailsHighlight
            title="Challenges & Learnings"
            array={challenges_and_learnings}
          />
          <DetailsHighlight title="Responsabilities" array={responsibilities} />
          <DetailsHighlight
            title="Future Improvements"
            array={future_improvements}
          />
        </div>

        <div className="right">
          <DetailsLinks
            source_code={links.source_code}
            live_demo={links.live_demo}
          />

          <DetailsTechStack title="Tech Stack" array={tech_stack} />

          <DetailsArchitecture
            approach={architecture.approach}
            data_flow={architecture.data_flow}
            deployment={architecture.deployment}
          />

          <DetailsSkills
            title="Skills Demonstrated"
            array={skills_demonstrated}
          />
        </div>
      </div>

      <Link classes={["muted"]} to={"projects/"}>
        ← Back to Projects
      </Link>
    </article>
  );
}
