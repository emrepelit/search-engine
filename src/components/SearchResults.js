import React from "react";

const SearchResults = ({ results }) => {
  return (
    <ul>
      {results.map((item) => (
        <li key={item.id}>
          <h3>Title: {item.title}</h3>
          <img
            src={item.thumbnail}
            alt={item.title}
            style={{ maxWidth: "100%" }}
          />
          <p>Creator: {item.description || "No creator"}</p>
          <a href={item.url}>Source</a>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
