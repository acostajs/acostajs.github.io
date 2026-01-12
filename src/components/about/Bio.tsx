import { DownloadResume, RepoImg } from "@/components/ui";
import { ErrorMessage } from "@/components/ui";
import type { ReactElement } from "react";

type BioProps = {
  headline: string;
  story: string;
  images: string[] | null;
};

export function Bio({ headline, story, images }: BioProps): ReactElement {
  if (!headline || !story || !images) {
    return <ErrorMessage error_message="Could find Bio section" />;
  }

  return (
    <section className="section-highlight flex-center flex-wrap-reverse gap-md">
      <div className="about-bio-banner flex flex-column gap-md">
        <h1>{headline}</h1>
        <p>{story}</p>
        <DownloadResume />
      </div>
      <RepoImg images={images} img_number={0} classes={["about-bio-img"]} />
    </section>
  );
}
