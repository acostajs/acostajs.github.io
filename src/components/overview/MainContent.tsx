import type { ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { GitHubReadmeFile, GitHubRepo } from "../../pages/types";
import { ErrorMessage } from "../layout/ErrorMessage";
import { Projects } from "./Projects";

type MainContentProps = {
  content?: GitHubReadmeFile;
  repos?: GitHubRepo[];
};

export function MainContent({
  content,
  repos,
}: MainContentProps): ReactElement {
  if (!content) return <ErrorMessage error_message={"content not found..."} />;
  if (!repos) {
    return <ErrorMessage error_message={"repositories not found..."} />;
  }

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
