// Получение саджеста от bitrix:search.title
export const fetchGlobalSuggest = async (query) => {
  if (!query || query.length < 2) return [];

  try {
    const response = await fetch(
      `/bitrix/components/bitrix/search.title/input.php?q=${encodeURIComponent(
        query
      )}`
    );

    if (!response.ok) throw new Error("Network error");

    const text = await response.text();
    // Битрикс отдаёт строки через \n
    return text
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean)
      .slice(0, 10);
  } catch (err) {
    console.error("Suggest API error:", err);
    return [];
  }
};

// Топ-запросы (можно вызвать с пустым q или сделать отдельный эндпоинт)
export const fetchPopularQueries = async () => {
  return fetchGlobalSuggest(""); // или отдельный путь, если настроил
};
