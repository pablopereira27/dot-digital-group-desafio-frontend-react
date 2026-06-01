import type { PaginationParams } from "../types/pagination";

interface PaginationProps {
  paginationParams: PaginationParams;
  onPageChange: (page: number) => void;
}

function getPages(page: number, totalPages: number): number[] {
  const maxVisible = Math.min(5, totalPages);

  const makeRange = (start: number) =>
    Array.from({ length: maxVisible }, (_, i) => start + i);

  if (page <= 2) {
    return makeRange(1);
  }

  if (page >= totalPages - 1) {
    return makeRange(totalPages - (maxVisible - 1));
  }

  return makeRange(page - 2);
}

const Pagination = ({ paginationParams, onPageChange }: PaginationProps) => {
  const { page: currentPage, totalPages } = paginationParams;

  return (
    <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
      <button disabled={currentPage === 1} onClick={() => onPageChange(1)}>
        First
      </button>
      <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        Prev
      </button>

      {getPages(currentPage, totalPages).map((page) => (
        <button
          key={page}
          className={"page " + (page === currentPage && "btn-primary")}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
