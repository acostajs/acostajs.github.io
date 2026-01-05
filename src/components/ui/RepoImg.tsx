import type { ReactElement } from "react";

const REPO_IMG_CONSTANTS = {
  EMPTY_ARRAY: 0,
};

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
      {images && images.length > REPO_IMG_CONSTANTS.EMPTY_ARRAY
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
