import { usePagination } from "@/hooks";
import type { ReactElement } from "react";
import { NextIcon, PreviousIcon } from "../icons";

type PaginationProps = {
  pagination: ReturnType<typeof usePagination>;
};

export function Pagination({ pagination }: PaginationProps): ReactElement {
  const { currentPage, totalPages, goToPage } = pagination;

  return (
    <nav className="pagination-nav flex-between">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={!pagination.hasPrev}
        className="pagination-btn"
      >
        <PreviousIcon size={20} />
      </button>

      <div className="flex gap-md">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className="pagination-btn"
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={!pagination.hasNext}
        className="pagination-btn"
      >
        <NextIcon size={20} />
      </button>
    </nav>
  );
}
