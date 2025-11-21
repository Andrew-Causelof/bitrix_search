import QueryResultItem from "./QueryResultItem";

function QueriesViewed({ title, items, onSelect }) {
  const handleClearAll = () => {};
  const handleShowMore = () => {};
  return (
    <div className="search_results_items">
      <div className="search_results_title">
        <span>{title}</span>
        {/* Очищаем в локалсторадж результаты последних переходов */}
        <button className="search_results_clear" onClick={handleClearAll}>
          Очистить
        </button>
      </div>
      {/* Вывод результатов последних переходов */}
      <div className="search_results_items">
        <QueryResultItem />
      </div>
      {/* Вывод всех результатов последних переходов */}
      <button className="search_results_more" onClick={handleShowMore}>
        Показать все...
      </button>
    </div>
  );
}

export default QueriesViewed;
