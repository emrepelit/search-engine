import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import Pagination from "./components/Pagination";
import { fetchSearchResults } from "./services/api";

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5);
  const [totalResults, setTotalResults] = useState(0);
  const [query, setQuery] = useState("");

  const handleSearch = async (searchQuery, newPage = 1) => {
    setLoading(true);
    setError("");
    setResults([]);
    setPage(newPage);

    if (newPage === 1) {
      setQuery(searchQuery);
    }

    try {
      const data = await fetchSearchResults( //I would not fetch the data here normally. I would write a custom hook like useSearch.
        searchQuery,
        "images",
        newPage,
        pageSize
      );
      if (data.length > 0) {
        setResults(data);
        setTotalResults(data.length * pageSize);
      } else {
        setError("No results found.");
        setTotalResults(0);
      }
    } catch (err) {
      setError("An error occurred while fetching search results.");
      setTotalResults(0);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Search Engine</h1>
      <SearchBox onSearch={handleSearch} />
      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
      <SearchResults results={results} />
      <Pagination
        page={page}
        totalResults={totalResults}
        pageSize={pageSize}
        onSearch={handleSearch}
        query={query}
      />
    </div>
  );
}

export default App;
