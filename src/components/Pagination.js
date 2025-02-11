import React from "react";

const Pagination = ({ page, totalResults, pageSize, onSearch, query }) => {
  const totalPages = Math.ceil(totalResults / pageSize);

  const handleNextPage = () => {
    if (page < totalPages) {
      onSearch(query, page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      onSearch(query, page - 1);
    }
  };

  return (
    totalResults > 0 && (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <span>
          {" "}
          Page {page} of {totalPages}{" "}
        </span>
        <button onClick={handleNextPage} disabled={page >= totalPages}>
          Next
        </button>
      </div>
    )
  );
};

export default Pagination;
