import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "../../custom/usePagination";

interface PaginationProps {
  onPageChange: any;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
  className: any;
}

const Paginations = (props: PaginationProps) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange!.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange![paginationRange!.length - 1];
  return (
    <ul className={`flex list-none ${className}`}>
      <li
        // className={classnames("pagination-item", {
        // disabled: currentPage === 1,
        // })}
        className={`pagination-item ${
          currentPage === 1
            ? "hover:bg-transparent hover:cursor-default pointer-events-none "
            : "hover:cursor-auto hover:bg-slate-700 hover:opacity-95"
        }`}
        onClick={onPrevious}
      >
        <div
          className={`${
            currentPage === 1
              ? "arrow rotate-[-135deg] -translate-x-1/2 border-r-2 border-solid opacity-20"
              : "arrow rotate-[-135deg] -translate-x-1/2"
          }`}
        />
      </li>
      {paginationRange!.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li className="pagination-item hover:bg-transparent hover:cursor-default">
              &#8230;
            </li>
          );
        }

        return (
          <li
            // className={classnames("pagination-item", {
            // selected: pageNumber === currentPage,
            // })}
            className={`pagination-item ${
              pageNumber === currentPage
                ? "bg-slate-200 dark:bg-slate-600 opacity-95"
                : "hover:bg-slate-700 hover:opacity-95 hover:cursor-pointer"
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        // className={classnames("pagination-item", {
        //   disabled: currentPage === lastPage,
        // })}
        className={`pagination-item ${
          currentPage === lastPage
            ? "hover:bg-transparent hover:cursor-default pointer-events-none"
            : "hover:cursor-auto hover:bg-slate-700 hover:opacity-95"
        }`}
        onClick={onNext}
      >
        <div
          className={` ${
            currentPage === lastPage
              ? "arrow rotate-45 border-r-2 border-solid opacity-20"
              : "arrow rotate-45 border-r-2"
          }`}
        />
      </li>
    </ul>
  );
};

export default Paginations;
