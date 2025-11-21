import React from "react";
import QueryItem from "./QueryItem";

function QueriesViewed() {
  const handleClearAll = () => {};
  const handleShowMore = () => {};
  return (
    <div className="search_results_items">
      <div className="search_results_title">
        <span>Просмотренные посты</span>
        <button className="search_results_clear" onClick={handleClearAll}>
          Очистить
        </button>
      </div>
      <div className="search_results_items">
        <QueryItem />
      </div>
      <button className="search_results_more" onClick={handleShowMore}>
        Показать все...
      </button>
    </div>
  );
}

export default QueriesViewed;
