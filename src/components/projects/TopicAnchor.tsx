import { topicURL } from "@/lib/utils";
import type { Repository } from "@/types";
import type { ReactElement } from "react";

type TopicAnchorProps = {
  repo: Repository;
};

export function TopicAnchor({ repo }: TopicAnchorProps): ReactElement {
  return (
    <div className="flex flex-wrap gap-sm">
      {repo.topics.map((topic) => (
        <span key={topic} className="topic-item topic">
          {topic}
        </span>
      ))}
    </div>
  );
}
