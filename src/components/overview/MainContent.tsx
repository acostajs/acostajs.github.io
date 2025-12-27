import type { ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { GitHubReadmeFile, GitHubRepo } from "../../pages/types";
import { Projects } from "./Projects";

type MainContentProps = {
  content: GitHubReadmeFile;
  repos: GitHubRepo[];
};

export function MainContent({
  content,
  repos,
}: MainContentProps): ReactElement {
  const readmeMarkdown = atob(content.content);

  return (
    <section className="main-content">
      <article className="markdown-body flex flex-column gap-md">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {readmeMarkdown}
        </ReactMarkdown>
      </article>

      <Projects repos={repos} />
    </section>
  );
}
