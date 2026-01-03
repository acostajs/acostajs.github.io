import { RepoImg } from "@/components/ui";
import type { ReactElement } from "react";

type BioProps = {
  headline: string;
  story: string;
  images: Array<string>;
};

export function Bio({ headline, story, images }: BioProps): ReactElement {
  return (
    <section className="about-bio flex-center">
      <div className="section-title">
        <h1>{headline}</h1>
        <p>{story}</p>
      </div>
      <RepoImg images={images} img_number={0} classes={["about-bio-img"]} />
    </section>
  );
}
