import { useState } from "react";
import { useWeatherApiProvider } from "../app/api/providers/AppWeatherApiProvider"
import { WeatherStats } from "../app/api/providers/WeatherApiProvider";
import { WeatherApiNetworkException } from "../app/api/connectors/WeatherApiConnectorExceptions";
import { WeatherApiProviderGeneralException } from "../app/api/providers/WeatherApiProviderExceptions";
import { useAppStorageService } from "../app/services/AppStorageService";

export interface Weather extends Readonly<WeatherStats> {}

type WeatherSearchHistory = string[]

const STORAGE_WEATHER_SEARCH_HISTORY_KEY = 'weather-search-history'
const MAX_SEARCH_HISTORY_LENGTH = 10

export default function useHomePageStore() {
  const weatherApiProvider = useWeatherApiProvider();
  const appStorage = useAppStorageService();

  const [weatherLoadingError, setWeatherLoadingError] = useState<Error | null>(null)
  const [weatherLoading, setWeatherLoading] = useState(false)
  const [weather, setWeather] = useState<Weather | null>(null);

  const [searchHistory, setSearchHistory] = useState<WeatherSearchHistory>(getInitialSearchHistory);
  const [cityName, setCityName] = useState("");

  function changeCityName(newCityName: string) {
    setWeatherLoadingError(null)
    setCityName(newCityName)
  }

  function addItemToSearchHistory(searchItem: string) {
    const searchHistoryCopy = [...searchHistory]

    const searchHistoryNoDuplicates = searchHistoryCopy.filter(v => v !== searchItem)
    searchHistoryNoDuplicates.unshift(searchItem)
    searchHistoryNoDuplicates.splice(MAX_SEARCH_HISTORY_LENGTH)

    setSearchHistory(searchHistoryNoDuplicates)
  }

  function syncSearchHistoryToStorage() {
    appStorage.set(
      STORAGE_WEATHER_SEARCH_HISTORY_KEY,
      searchHistory,
    )
  }

  function getInitialSearchHistory() {
    const storedWeatherSearchHistory = appStorage
      .get<WeatherSearchHistory>(STORAGE_WEATHER_SEARCH_HISTORY_KEY)

    return storedWeatherSearchHistory || []
  }

  async function actualizeWeather() {
    const city = cityName.trim()

    if (city.length === 0) {
      return;
    }

    setWeather(null)
    setWeatherLoading(true)
    setWeatherLoadingError(null)

    try {
      const response = await weatherApiProvider.getWeatherForCity(city);

      addItemToSearchHistory(response.city);
      syncSearchHistoryToStorage();
      setWeather(response);
    } catch (error) {
      if (error instanceof WeatherApiNetworkException) {
        setWeatherLoadingError(error)
      } else if (error instanceof WeatherApiProviderGeneralException) {
        console.error("updateWeatherIfNeeded: api error.", error);

        setWeatherLoadingError(error)
      } else {
        console.error("updateWeatherIfNeeded: unexpected error.", error);

        const unhandledException = new Error('An unexpected error occurred. Please try again, and if the problem persists, contact support or your system administrator for assistance.')

        setWeatherLoadingError(unhandledException)
      }
    } finally {
      setWeatherLoading(false);
    }
  }

  return {
    weather,
    weatherLoading,
    weatherLoadingError,
    actualizeWeather,

    cityName,
    changeCityName,
  }
}
