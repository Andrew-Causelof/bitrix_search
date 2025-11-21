import QueriesLatest from "./QueriesLatest";
import QueriesViewed from "./QueriesViewed";

function SearchModal({ show }) {
  return (
    <>
      {show && <div class="modal_overlay" data-close=""></div>}

      <div
        className={`box box-default search_results_box ${show ? "show" : ""}`}
      >
        <div className="search_results" id="search-results">
          <QueriesLatest />
          <QueriesViewed />
        </div>
      </div>
    </>
  );
}

export default SearchModal;
