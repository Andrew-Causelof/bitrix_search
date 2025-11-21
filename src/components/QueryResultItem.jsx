import React from "react";

function QueryResultItem() {
  return (
    <div className="search_results_item search_results_item-post">
      <a className="post post-search" href="post-full.html">
        <div className="post_search_content">
          <p className="post_search_title" href="post-full.html">
            Почему 80% арбитражников теряют свои деньги на старте запуска РК в
            Google Ads
          </p>
          <div className="post_search_preview">
            <img
              src="https://dev.affcult.ru/local/templates/affcult/assets/images/public/post-preview.jpg"
              alt="Почему 80% арбитражников теряют свои деньги на старте запуска РК в Google Ads"
            />
          </div>
        </div>
        <div className="post_actions">
          <div className="post_action">
            <button
              className="post_action_btn"
              data-action-fn="log"
              title="Комментарии"
            >
              <svg
                className="post_action_icon"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <use href="https://dev.affcult.ru/local/templates/affcult/assets/images/svg/menu-sprite.svg#menu-comment"></use>{" "}
              </svg>
              <span className="post_action_count">18</span>
            </button>
          </div>
          <div className="post_action">
            <button
              className="post_action_btn"
              data-action-fn="log"
              title="Добавить в избранное"
            >
              <svg
                className="post_action_icon"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <use href="https://dev.affcult.ru/local/templates/affcult/assets/images/svg/menu-sprite.svg#menu-bookmarks"></use>{" "}
              </svg>
              <span className="post_action_count">4</span>
            </button>
          </div>
          <div className="post_action post_action-alt">
            <div className="post_action_views">
              <svg
                className="post_action_icon"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <use href="https://dev.affcult.ru/local/templates/affcult/assets/images/svg/menu-sprite.svg#menu-views"></use>{" "}
              </svg>
              <span className="post_action_count">12K</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default QueryResultItem;
