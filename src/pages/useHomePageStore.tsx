import { useState } from "react";
import { useWeatherApiProvider } from "../app/api/providers/AppWeatherApiProvider"
import { WeatherStats } from "../app/api/providers/WeatherApiProvider";

export interface Weather extends Readonly<WeatherStats> {}

export default function useHomePageStore() {
  const weatherApiProvider = useWeatherApiProvider();

  const [weather, setWeather] = useState<Weather | null>(null);
  const [cityName, setCityName] = useState("");

  async function loadSavedWeather() {
    // init state from LocalStorage
    // fetch weather
  }

  async function updateWeatherIfNeeded() {
    if (cityName.trim().length === 0) {
      return;
    }

    try {
      const response = await weatherApiProvider.getWeatherForCity(cityName);

      setWeather(response);
    } catch (error) {
      console.error("Failed to load weather:", error);

      throw error;
    }
  }

  return {
    weather,
    loadSavedWeather,
    updateWeatherIfNeeded,

    cityName,
    setCityName,
  }
}
