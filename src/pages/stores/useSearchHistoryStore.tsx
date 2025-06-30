import { useState } from "react";
import { useAppStorageService } from "../../app/services/AppStorageService";

export type WeatherSearchHistory = string[]

const STORAGE_WEATHER_SEARCH_HISTORY_KEY = 'weather-search-history'
const MAX_SEARCH_HISTORY_LENGTH = 10

export default function useSearchHistoryStore() {
  const appStorage = useAppStorageService();

  const [searchHistory, setSearchHistory] = useState<WeatherSearchHistory>(getInitialSearchHistory);

  function getInitialSearchHistory() {
    const storedWeatherSearchHistory = appStorage
      .get<WeatherSearchHistory>(STORAGE_WEATHER_SEARCH_HISTORY_KEY)

    return storedWeatherSearchHistory || []
  }

  function addItemToSearchHistory(searchItem: string) {
    const searchHistoryCopy = [...searchHistory]

    const searchHistoryNoDuplicates = searchHistoryCopy.filter(v => v !== searchItem)
    searchHistoryNoDuplicates.unshift(searchItem)
    searchHistoryNoDuplicates.splice(MAX_SEARCH_HISTORY_LENGTH)

    setSearchHistory(searchHistoryNoDuplicates)

    return searchHistoryNoDuplicates
  }

  function removeItemFromSearchHistory(searchItem: string) {
    const searchHistoryCopy = [...searchHistory]

    const searchHistoryWithoutItem = searchHistoryCopy.filter(v => v !== searchItem)

    setSearchHistory(searchHistoryWithoutItem)

    return searchHistoryWithoutItem;
  }

  function syncSearchHistoryToStorage(searchHistory: WeatherSearchHistory) {
    appStorage.set(
      STORAGE_WEATHER_SEARCH_HISTORY_KEY,
      searchHistory,
    )
  }

  return {
    searchHistory,
    addItemToSearchHistory,
    removeItemFromSearchHistory,
    syncSearchHistoryToStorage,
  }
}
