import { useRepositoryData } from "@/hooks";
import type { ReactElement } from "react";
import { ErrorMessage } from "../ui";

type ProjectDetailsProps = {
  repoName: string;
};

export function ProjectDetails({
  repoName,
}: ProjectDetailsProps): ReactElement {
  const { json, images, error } = useRepositoryData(repoName);

  if (error) {
    return (
      <section id="details" popover="auto">
        <button popoverTarget="details">X</button>
        <ErrorMessage error_message={error} />
      </section>
    );
  }

  return (
    <section id="details" popover="auto">
      <button popoverTarget="details">X</button>
      <h1>{json?.title}</h1>

      <figure>
        <img src={images[0]} alt="" width={200} height={200} />
      </figure>
    </section>
  );
}
