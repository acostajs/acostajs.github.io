import type { PaginationState } from "@/hooks";
import type { ReactElement } from "react";
import { NextIcon, PreviousIcon } from "../icons";

type PaginationProps = {
  pagination: PaginationState;
};

export function Pagination({ pagination }: PaginationProps): ReactElement {
  const offset = 1;
  const { currentPage, totalPages, goToPage } = pagination;

  return (
    <nav className="pagination-nav flex-between">
      <button
        onClick={() => goToPage(currentPage - offset)}
        disabled={!pagination.hasPrev}
        className="btn"
        aria-label="Previous page"
      >
        <PreviousIcon size={20} />
      </button>

      <div className="flex gap-md">
        {Array.from({ length: totalPages }, (_, i) => i + offset).map(
          (page) => (
            <button key={page} onClick={() => goToPage(page)} className="btn">
              {page}
            </button>
          ),
        )}
      </div>

      <button
        onClick={() => goToPage(currentPage + offset)}
        disabled={!pagination.hasNext}
        className="btn"
        aria-label="Next page"
      >
        <NextIcon size={20} />
      </button>
    </nav>
  );
}
