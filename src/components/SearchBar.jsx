import React, { useRef } from "react";
import { useSearchSuggest } from "../hooks/useSearchSuggest.js";
import SearchModal from "./SearchModal";

function SearchBar() {
  const { query, handleQueryChange, handleFocus, handleBlur, handleClearAll } =
    useSearchSuggest();
  const inputRef = useRef(null);

  return (
    <>
      <div className="search">
        <input
          id="search_id"
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Найти..."
          className="search_input"
        />
        {query ? (
          <button
            className="search-clear"
            onClick={() => handleQueryChange("")}
          >
            ×
          </button>
        ) : (
          <span className="search_icon"></span>
        )}
      </div>
      <SearchModal />
    </>
  );
}

export default SearchBar;
