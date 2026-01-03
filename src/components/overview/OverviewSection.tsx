import { Loading } from "@/components/ui/Loading";
import type { File } from "@/types";
import type { ReactElement } from "react";
import ReactMarkdown from "react-markdown";

type OverviewSectionProps = {
  readme: File | null;
};

export function OverviewSection({
  readme,
}: OverviewSectionProps): ReactElement {
  if (!readme) return <Loading loading_message="Loading data..." />;

  const readmeMarkdown = atob(readme.content);

  return (
    <section className="overview-section flex flex-column gap-xl">
      <ReactMarkdown>{readmeMarkdown}</ReactMarkdown>
    </section>
  );
}
