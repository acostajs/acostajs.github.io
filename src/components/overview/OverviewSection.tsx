import { Loading } from "@/components/ui/Loading";
import type { File } from "@/types";
import type { ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import { ErrorMessage } from "../layout";

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
