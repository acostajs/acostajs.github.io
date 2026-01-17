import { Link } from "@/lib/router";
import type { ReactElement } from "react";

type DetailsBtnProps = {
  repoName: string;
};

export function DetailsBtn({ repoName }: DetailsBtnProps): ReactElement {
  return (
    <Link to={`/details/${repoName}`} classes={["btn"]}>
      View Details
    </Link>
  );
}
