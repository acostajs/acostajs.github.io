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
        <a href={topicURL(topic)} key={topic} className="topic">
          <span className="topic-item">{topic}</span>
        </a>
      ))}
    </div>
  );
}
