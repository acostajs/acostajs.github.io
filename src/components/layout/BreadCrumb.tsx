import { Link, useLocation } from "@/lib/router";
import type { ReactElement } from "react";

export function BreadCrumb(): ReactElement {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(x => x);

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to={"/"} classes={["breadcrumb-item"]}>
        {" "}
        Overview{" "}
      </Link>
      {pathnames.map((value, index) => {
        const isLast = index === pathnames.length - 1;
        const to = "/" + pathnames.slice(0, index + 1).join("/");
        return (
          <span key={to}>
            {" / "}
            {isLast
              ? <span className="breadcrumb-item">{value}</span>
              : <Link to={to} classes={["breadcrumb-item"]}>{value}</Link>}
          </span>
        );
      })}
    </nav>
  );
}
