import { useState } from "react";
import { useWeatherApiProvider } from "../app/api/providers/AppWeatherApiProvider"
import { WeatherStats } from "../app/api/providers/WeatherApiProvider";
import { WeatherApiNetworkException } from "../app/api/connectors/WeatherApiConnectorExceptions";
import { WeatherApiProviderGeneralException } from "../app/api/providers/WeatherApiProviderExceptions";

export interface Weather extends Readonly<WeatherStats> {}

export default function useHomePageStore() {
  const weatherApiProvider = useWeatherApiProvider();

  const [weatherLoadingError, setWeatherLoadingError] = useState<Error | null>(null)
  const [weatherLoading, setWeatherLoading] = useState(false)
  const [weather, setWeather] = useState<Weather | null>(null);

  const [cityName, setCityName] = useState("");

  function changeCityName(newCityName: string) {
    setWeatherLoadingError(null)
    setCityName(newCityName)
  }

  async function initSavedWeatherIfNeeded() {

  }

  async function updateWeatherIfNeeded() {
    if (cityName.trim().length === 0) {
      return;
    }

    setWeather(null)
    setWeatherLoading(true)
    setWeatherLoadingError(null)

    try {
      const response = await weatherApiProvider.getWeatherForCity(cityName);

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
    initSavedWeatherIfNeeded,
    updateWeatherIfNeeded,

    cityName,
    changeCityName,
  }
}
