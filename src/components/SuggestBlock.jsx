const SuggestBlock = ({ items, query, loading, onSelect }) => {
  return (
    <div className="suggest-block">
      {loading && <div className="suggest-loading">Поиск...</div>}

      {!loading && items.length === 0 && query && (
        <div className="suggest-empty">Ничего не найдено</div>
      )}

      <ul className="suggest-list">
        {items.map((item, i) => (
          <li
            key={i}
            className="suggest-item"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onSelect(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestBlock;
