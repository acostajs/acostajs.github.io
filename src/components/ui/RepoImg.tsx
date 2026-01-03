import type { ReactElement } from "react";

type RepoImgProps = {
  images: Array<string>;
  img_number: number;
  classes?: Array<string>;
};

export function RepoImg({
  images,
  img_number,
  classes,
}: RepoImgProps): ReactElement {
  const figureClassNames = classes?.join(" ") ?? "";

  return (
    <figure className={figureClassNames}>
      {images && images.length > 0
        ? (
          <img
            src={images[`${img_number}`]}
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
