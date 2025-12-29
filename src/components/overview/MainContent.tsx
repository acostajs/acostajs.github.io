import type { ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { GitHubReadmeFile, GitHubRepo } from "../../pages/types";
import { ErrorMessage } from "../layout/ErrorMessage";
import { ContactSection } from "./ContactSection";
import { ProjectSection } from "./ProjectSection";

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
    <>
      <article className="markdown-body flex flex-column gap-md">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {readmeMarkdown}
        </ReactMarkdown>
      </article>

      <div className="section-title">
        <h2>Top Projects</h2>
      </div>
      <ProjectSection repos={repos} />

      <ContactSection />
    </>
  );
}
