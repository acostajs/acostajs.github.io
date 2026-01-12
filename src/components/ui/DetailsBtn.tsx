import { Link } from "@/lib/router";
import type { Repository } from "@/types";
import type { ReactElement } from "react";

type DetailsBtnProps = {
  repo: Repository;
};

export function DetailsBtn({ repo }: DetailsBtnProps): ReactElement {
  return (
    <Link to={`/details/${repo.name}`} classes={["btn"]}>
      View Details
    </Link>
  );
}
