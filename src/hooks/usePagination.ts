import { useState } from "react";

type PaginationState = {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  perPage: number;
};

export function usePagination(totalCount: number, perPage = 5) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalCount / perPage);
  const offset = (currentPage - 1) * perPage;

  function goToPage(page: number) {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  function nextPage() {
    goToPage(currentPage + 1);
  }

  function prevPage() {
    goToPage(currentPage - 1);
  }

  const hasNext = currentPage < totalPages;
  const hasPrev = currentPage > 1;

  return {
    currentPage,
    totalPages,
    totalCount,
    perPage,
    offset,
    goToPage,
    nextPage,
    prevPage,
    hasNext,
    hasPrev,
  };
}
