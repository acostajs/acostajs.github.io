import { useState } from "react";

const PAGINATION_CONSTANTS = {
  DEFAULT_PER_PAGE: 5,
  DEFAULT_PAGE: 1,
  FIRST_PAGE: 1,
};

export type PaginationState = {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  perPage: number;
  offset: number;
  goToPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  hasNext: boolean;
  hasPrev: boolean;
};

export function usePagination(
  totalCount: number,
  perPage = PAGINATION_CONSTANTS.DEFAULT_PER_PAGE,
): PaginationState {
  const [currentPage, setCurrentPage] = useState(
    PAGINATION_CONSTANTS.DEFAULT_PAGE,
  );

  const totalPages = Math.ceil(totalCount / perPage);
  const offset = (currentPage - PAGINATION_CONSTANTS.FIRST_PAGE) * perPage;

  function goToPage(page: number): void {
    if (page >= PAGINATION_CONSTANTS.FIRST_PAGE && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  function nextPage(): void {
    goToPage(currentPage + PAGINATION_CONSTANTS.FIRST_PAGE);
  }

  function prevPage(): void {
    goToPage(currentPage - PAGINATION_CONSTANTS.FIRST_PAGE);
  }

  const hasNext = currentPage < totalPages;
  const hasPrev = currentPage > PAGINATION_CONSTANTS.FIRST_PAGE;

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
