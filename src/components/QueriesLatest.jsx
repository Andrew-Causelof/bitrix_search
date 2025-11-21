import React from "react";

function QueriesLatest() {
  const handleShowMore = () => {};
  const handleClearAll = () => {};
  return (
    <div className="search_results_row">
      <div className="search_results_title">
        <span>Последние запросы</span>
        <button className="search_results_clear" onClick={handleClearAll}>
          Очистить
        </button>
      </div>
      <div className="search_results_items">
        <a className="search_results_item search_results_item-icon">
          <span>Google Ads</span>
        </a>
        <a className="search_results_item search_results_item-icon">
          <span>Подкаст</span>
        </a>
        <a className="search_results_item search_results_item-icon">
          <span>Конференция</span>
        </a>
      </div>
      <button className="search_results_more" onClick={handleShowMore}>
        Показать все...
      </button>
    </div>
  );
}

export default QueriesLatest;
