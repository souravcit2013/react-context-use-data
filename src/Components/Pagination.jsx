import React from 'react';
import { usePagination, DOTS } from '../customHook/usePagination';

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <>
      <ul className={'pagination-container'}>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <li key={pageNumber} className="pagination-item dots">
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={pageNumber}
              className={'pagination-item'}
              onClick={() => onPageChange(pageNumber)}
            >
              <span className="page-number">{pageNumber}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Pagination;
