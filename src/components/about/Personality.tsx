import { RepoImg } from "@/components/ui";
import type { ReactElement } from "react";

type PersonalitySectionProps = {
  headline: string;
  story: string;
  images: Array<string>;
};

export function Personality({
  headline,
  story,
  images,
}: PersonalitySectionProps): ReactElement {
  return (
    <section className="about-personality flex">
      <RepoImg
        images={images}
        img_number={1}
        classes={["about-personality-img"]}
      />
      <div className="section-title">
        <h2>{headline}</h2>
        <p>{story}</p>
      </div>
    </section>
  );
}
