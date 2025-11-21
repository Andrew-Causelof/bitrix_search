import QueriesLatest from "./QueriesLatest";
import QueriesViewed from "./QueriesViewed";
import { useSearchSuggest } from "../hooks/useSearchSuggest";
import SuggestBlock from "./SuggestBlock";

function SearchModal({ show }) {
  const {
    isFocused,
    query,
    localHistory,
    globalSuggest,
    loading,
    handleClearAll,
    handleSelect,
  } = useSearchSuggest();

  if (!isFocused) return null;

  return (
    <>
      <div class="modal_overlay" data-close=""></div>

      <div className={`box box-default search_results_box`}>
        <div className="search_results" id="search-results">
          {query === "" && (
            <>
              <QueriesLatest
                title="Последние запросы"
                items={localHistory}
                onSelect={handleSelect}
              />
              <QueriesViewed
                title="Просмотренные посты"
                items={localHistory}
                onSelect={handleSelect}
              />
            </>
          )}

          {/* Саджест при вводе */}
          {query !== "" && (
            <SuggestBlock
              items={globalSuggest}
              query={query}
              loading={loading}
              onSelect={handleSelect}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default SearchModal;
