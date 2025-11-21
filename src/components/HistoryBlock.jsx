const HistoryBlock = ({ items = [], title, onSelect }) => {
  if (!items.length && title !== "Популярные запросы") return null;

  return (
    <div className="history-block">
      {title && <div className="history-block__title">{title}</div>}
      <ul className="history-block__list">
        {items.map((item, i) => (
          <li
            key={i}
            className="history-block__item"
            onMouseDown={(e) => e.preventDefault()} // важно для blur
            onClick={() => onSelect(item.phrase || item)}
          >
            {item.phrase || item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryBlock;
