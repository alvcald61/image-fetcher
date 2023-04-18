import React, { useEffect, useState } from "react";
import AppContext from "../context/AppContext";

type Props = {
  onPageChange: (number: number) => void;
  maxPag: number;
};

const getPaginationArray = (maxPag: number, currPage: number): number[] => {
  const pages = new Set([1]);
  let left = currPage - 1;
  let right = currPage + 1;
  if (left > 1) {
    pages.add(left);
  }
  pages.add(currPage);
  if (right < maxPag) {
    pages.add(right);
  }
  pages.add(maxPag);

  return [...pages];
};

const generatePagination = (
  number: number[],
  action: (page: number) => void,
  currPage: number
) => {
  const reactElements = [];
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    reactElements.push(
      <button
        className={"page-indicator " + (element === currPage ? "active" : "")}
        key={element}
        onClick={() => {
          action(element);
        }}
      >
        {element}
      </button>
    );
  }
  if (number[1] - number[0] > 1) {
    reactElements.splice(1, 0, <span>...</span>);
  }
  if (number[number.length - 1] - number[number.length - 2] > 1) {
    reactElements.splice(reactElements.length - 1, 0, <span>...</span>);
  }
  return reactElements;
};

const Pagination = ({ maxPag, onPageChange }: Props) => {
  const context = React.useContext(AppContext);
  const { page, setPage } = context;
  generatePagination(getPaginationArray(maxPag, page), setPage, page);
  const pages = getPaginationArray(maxPag, page);

  useEffect(() => {
    onPageChange(page);
  }, [page]);
  return (
    <div className="pagination">{generatePagination(pages, setPage, page)}</div>
  );
};

export default Pagination;
