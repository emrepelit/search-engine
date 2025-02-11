import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [q, setQuery] = useState("");

  const handleSearch = () => {
    if (q.trim() !== "") {
      onSearch(q);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="text"
        value={q}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
      />
      <button
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
