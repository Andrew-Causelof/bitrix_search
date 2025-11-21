import React from "react";
import SearchModal from "./SearchModal";

function SearchBar() {
  return (
    <>
      <div className="search">
        <input
          className="search_input"
          id="search_id"
          type="text"
          placeholder="Найти..."
          data-modal-on-focus="search-results"
        />
        <span className="search_icon"></span>
      </div>
      <SearchModal show={true} />
    </>
  );
}

export default SearchBar;
