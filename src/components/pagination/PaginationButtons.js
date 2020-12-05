import React, { Fragment } from "react";

const PaginationButtons = (props) => {
  const { currentPage, pageCount, navigate } = props;

  const getPageNumbers = () => {
    if (pageCount < 4) {
      return [...Array(pageCount + 1).keys()].slice(1);
    } else if (currentPage <= 4) {
      return [1, 2, 3, 4, 5];
    } else if (currentPage > pageCount - 4) {
      return [...Array(5).keys()].reverse().map((v) => pageCount - v);
    } else {
      return [currentPage - 1, currentPage, currentPage + 1];
    }
  };

  return (
    <div>
      <Fragment>
        <button
          disabled={currentPage === 1}
          className="btn btn-secondary mx-1"
          onClick={() => navigate(currentPage - 1)}
        >
          Previous
        </button>

        {currentPage > 4 && (
          <Fragment>
            <button
              className="btn btn-secondary mx-1"
              onClick={() => navigate(1)}
            >
              1
            </button>
            <span className="h4">...</span>
          </Fragment>
        )}
        {getPageNumbers().map((num) => (
          <button
            key={num}
            className={`btn mx-1 ${
              num === currentPage ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => navigate(num)}
          >
            {num}
          </button>
        ))}
        {currentPage <= pageCount - 4 && (
          <Fragment>
            <span className="h4">...</span>
            <button
              className="btn btn-secondary mx-1"
              onClick={() => navigate(pageCount)}
            >
              {pageCount}
            </button>
          </Fragment>
        )}
        <button
          disabled={currentPage === pageCount}
          className="btn btn-secondary mx-1"
          onClick={() => navigate(currentPage + 1)}
        >
          Next
        </button>
      </Fragment>
    </div>
  );
};

export default PaginationButtons;
