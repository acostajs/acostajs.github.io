import { ErrorMessage } from "@/components/ui";
import type { File } from "@/types";
import type { ReactElement } from "react";
import ReactMarkdown from "react-markdown";

type OverviewSectionProps = {
  readme: File | null;
};

export function OverviewSection({
  readme,
}: OverviewSectionProps): ReactElement {
  if (!readme) return <ErrorMessage error_message="Readme File not found" />;

  const readmeMarkdown = atob(readme.content);

  return (
    <section className="overview-section flex flex-column gap-sm">
      <ReactMarkdown>{readmeMarkdown}</ReactMarkdown>
    </section>
  );
}
