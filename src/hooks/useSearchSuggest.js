import { useState, useEffect, useCallback, useRef } from "react";
import { debounce } from "lodash";
import { fetchGlobalSuggest } from "../api/bitrixSearchApi.js";
import { SearchHistory } from "../storage/searchHistory.js";

export const useSearchSuggest = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [globalSuggest, setGlobalSuggest] = useState([]);
  const [localHistory, setLocalHistory] = useState(() => {
    return SearchHistory.get();
  });
  const [loading, setLoading] = useState(false);

  // Создаём debounced функцию через useRef — это обход всех проблем линтера
  const debouncedSearchRef = useRef();

  useEffect(() => {
    debouncedSearchRef.current = debounce((value) => {
      setLoading(true);
      fetchGlobalSuggest(value)
        .then((results) => {
          setGlobalSuggest(results || []);
        })
        .catch(() => {
          setGlobalSuggest([]);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 300);
  }, []); // создаётся один раз при монтировании

  // Чистая функция без async/await и без стрелочек внутри useCallback
  const triggerSearch = useCallback((value) => {
    if (debouncedSearchRef.current) {
      debouncedSearchRef.current(value);
    }
  }, []);

  const handleQueryChange = useCallback(
    (value) => {
      setQuery(value);
      if (value.trim()) {
        triggerSearch(value);
      } else {
        setGlobalSuggest([]);
        // можно отменить текущий запрос
        if (debouncedSearchRef.current?.cancel) {
          debouncedSearchRef.current.cancel();
        }
      }
    },
    [triggerSearch]
  );

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => {
    setTimeout(() => setIsFocused(false), 200);
  }, []);

  const handleClearAll = useCallback(() => {
    setQuery("");
    setGlobalSuggest([]);
    SearchHistory.clear();
    setLocalHistory([]);
  }, []);

  const handleSelect = useCallback((phrase) => {
    SearchHistory.add(phrase);
    setQuery(phrase);
    setIsFocused(false);
    // window.location.href = `/search/?q=${encodeURIComponent(phrase)}`;
  }, []);

  return {
    query,
    isFocused,
    globalSuggest,
    localHistory,
    loading,
    handleQueryChange,
    handleFocus,
    handleBlur,
    handleClearAll,
    handleSelect,
  };
};
