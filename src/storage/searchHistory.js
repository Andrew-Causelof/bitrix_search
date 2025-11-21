const KEY = "bitrix_search_history";
const MAX = 10;

export const SearchHistory = {
  add(phrase) {
    if (!phrase?.trim()) return;

    let history = this.get();
    history = history.filter((item) => item.phrase !== phrase);
    history.unshift({ phrase, timestamp: Date.now() });

    if (history.length > MAX) history = history.slice(0, MAX);

    localStorage.setItem(KEY, JSON.stringify(history));
  },

  get() {
    try {
      return JSON.parse(localStorage.getItem(KEY) || "[]");
    } catch {
      return [];
    }
  },

  clear() {
    localStorage.removeItem(KEY);
  },
};
