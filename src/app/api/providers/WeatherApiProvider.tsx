import axios from "axios";
import { useWeatherApiConnector } from "../connectors/AppWeatherApiConnector"
import { Root as ForecastResponse } from "./forecastResponse";
import { WeatherApiProviderGeneralException } from "./WeatherApiProviderExceptions";

export interface WeatherStats {
  city: string
  currentTemp: number
  condition: string
  windSpeed: number
  todayTempRange: [number, number]
}

export default function ForecastApiProvider() {
  const weatherApiConnector = useWeatherApiConnector();

  async function getWeatherForCity(city: string): Promise<WeatherStats> {
    try {
      const { data } = await weatherApiConnector.request<ForecastResponse>({
        method: "GET",
        url: `/forecast.json`,
        params: {
          q: city,
        },
      });

      const weatherStats = mapForecastResponseToWeather(data);

      return weatherStats;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data?.error?.message) {
          throw new WeatherApiProviderGeneralException(error.response.data.error.message)
        }
      }

      throw error
    }
  }

  function mapForecastResponseToWeather(forecast: ForecastResponse): WeatherStats {
    return {
      city: forecast.location.name,
      currentTemp: forecast.current.temp_c,
      condition: forecast.current.condition.text,
      windSpeed: forecast.current.wind_kph,
      todayTempRange: [
          forecast.forecast.forecastday[0].day.mintemp_c,
          forecast.forecast.forecastday[0].day.maxtemp_c,
      ],
    } as const
  };

  return {
    getWeatherForCity,
  };
}
