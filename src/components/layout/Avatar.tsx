import type { ReactElement } from "react";

type AvatarProps = {
  size?: number;
  className?: string;
  url: string;
  alt: string;
};

export function Avatar({
  size,
  className,
  url,
  alt,
}: AvatarProps): ReactElement {
  return (
    <figure className={className}>
      <img src={url} alt={alt} width={size} height={size} />
    </figure>
  );
}
