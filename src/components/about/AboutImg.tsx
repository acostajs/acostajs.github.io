import type { ReactElement } from "react";
import type { PortfolioData } from "../../hooks/usePortfolioData";

type AboutImgProps = {
  data: PortfolioData;
  img_number: number;
  classes?: Array<string>;
};

export function AboutImg({
  data,
  img_number,
  classes,
}: AboutImgProps): ReactElement {
  const figureClassNames = classes?.join(" ") ?? "";

  return (
    <figure className={figureClassNames}>
      {data.images && data.images.length > 0
        ? (
          <img
            src={data.images[`${img_number}`]}
            alt={`Profile photo ${img_number}`}
            loading="lazy"
          />
        )
        : (
          <div className="placeholder-img">
            <span>No image available</span>
          </div>
        )}
    </figure>
  );
}
