function QueriesLatest({ title, items, onSelect }) {
  const handleShowMore = () => {};
  const handleClearAll = () => {};
  return (
    <div className="search_results_row">
      <div className="search_results_title">
        <span>{title}</span>
        {/* Очистить ? Для пользователя видимо мы же не можем чистить историю глобально по клику одного юзера. Сохраняем в локалсторадж ? */}
        <button className="search_results_clear" onClick={handleClearAll}>
          Очистить
        </button>
      </div>
      {/* Вывод результатов последних запросов - глобально пользователями */}
      <div className="search_results_items">
        <a className="search_results_item search_results_item-icon">
          <span>Google Ads</span>
        </a>
      </div>
      {/* Вывод всех результатов последних запросов - глобально пользователями */}
      <button className="search_results_more" onClick={handleShowMore}>
        Показать все...
      </button>
    </div>
  );
}

export default QueriesLatest;
