import { useState } from "react";
import { useWeatherApiProvider } from "../../app/api/providers/AppWeatherApiProvider"
import { WeatherStats } from "../../app/api/providers/WeatherApiProvider";
import { WeatherApiNetworkException } from "../../app/api/connectors/WeatherApiConnectorExceptions";
import { WeatherApiProviderGeneralException } from "../../app/api/providers/WeatherApiProviderExceptions";
import useSearchHistoryStore from "./useSearchHistoryStore";

export interface Weather extends Readonly<WeatherStats> {}

export default function useHomePageStore() {
  const weatherApiProvider = useWeatherApiProvider();

  const {
    searchHistory,
    addItemToSearchHistory,
    removeItemFromSearchHistory,
    syncSearchHistoryToStorage,
  } = useSearchHistoryStore();

  const [weatherLoadingError, setWeatherLoadingError] = useState<Error | null>(null)
  const [weatherLoading, setWeatherLoading] = useState(false)
  const [weather, setWeather] = useState<Weather | null>(null);

  const [citySearchValue, setCitySearchValue] = useState("");

  function changeCitySearchValue(v: string) {
    setWeatherLoadingError(null)
    setCitySearchValue(v)
  }

  function handleSearchHistoryDelete(searchItem: string) {
    const newSearchHistory = removeItemFromSearchHistory(searchItem);
    syncSearchHistoryToStorage(newSearchHistory)
  }

  function loadWeatherForEnteredCity() {
    return loadWeatherForCity(citySearchValue.trim())
  }

  async function loadWeatherForCity(city: string) {
    if (city.length === 0) {
      return;
    }

    setWeather(null)
    setWeatherLoading(true)
    setWeatherLoadingError(null)

    try {
      const response = await weatherApiProvider.getWeatherForCity(city);

      const newSearchHistory = addItemToSearchHistory(response.city);
      syncSearchHistoryToStorage(newSearchHistory);
      setWeather(response);
    } catch (error) {
      if (error instanceof WeatherApiNetworkException) {
        setWeatherLoadingError(error)
      } else if (error instanceof WeatherApiProviderGeneralException) {
        console.error("loadWeatherForCity failed: weather api error", error);

        setWeatherLoadingError(error)
      } else {
        console.error("loadWeatherForCity failed: unexpected error", error);

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
    loadWeatherForCity,
    loadWeatherForEnteredCity,

    citySearchValue,
    searchHistory,
    changeCitySearchValue,
    handleSearchHistoryDelete,
  }
}
