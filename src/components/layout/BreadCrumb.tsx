import { Link, useLocation } from "@/lib/router";
import type { ReactElement } from "react";

export function BreadCrumb(): ReactElement {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(x => x);

  return (
    <nav className="breadcrumb">
      <Link to={"/"} classes={["breadcrumb-item"]}>
        {" "}
        Overview{" "}
      </Link>
      {pathnames.map((value, index) => {
        const isLast = index === pathnames.length - 1;
        return (
          <>
            {" / "}
            {isLast
              ? <span className="breadcrumb-item">{value}</span>
              : <span className="breadcrumb-item">{value}</span>}
          </>
        );
      })}
    </nav>
  );
}
