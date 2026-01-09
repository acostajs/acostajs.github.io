import { ErrorMessage } from "@/components/ui";
import { useRepositoryData } from "@/hooks";
import { useParams } from "@/lib/router";
import type { ReactElement } from "react";

export function Details(): ReactElement {
  const { repoName } = useParams();
  if (!repoName) {
    return <ErrorMessage error_message="Couldnt fetch Repository Name" />;
  }
  const { json, images, error } = useRepositoryData(repoName);
  if (error) return <ErrorMessage error_message={error} />;
  if (!json) return <ErrorMessage error_message="Couldnt fetch ProjectJson" />;

  return (
    <>
      <h1>{repoName}</h1>
      <p>{json.title}</p>
      <p>{json.description}</p>

      <figure>
        <img src={images[0]} />
      </figure>
    </>
  );
}
