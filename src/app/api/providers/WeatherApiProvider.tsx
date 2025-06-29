import { useWeatherApiConnector } from "../connectors/AppWeatherApiConnector"
import { Root as ForecastResponse } from "./forecastResponse";

export interface WeatherStats {
  currentTemp: number
  condition: string
  windSpeed: number
  todayTempRange: [number, number]
}

export default function ForecastApiProvider() {
  const weatherApiConnector = useWeatherApiConnector();

  async function getWeatherForCity(city: string): Promise<WeatherStats> {
    const { data } = await weatherApiConnector.request<ForecastResponse>({
      method: "GET",
      url: `/forecast.json`,
      params: {
        q: city,
      },
    });

    const weatherStats = mapForecastResponseToWeather(data);

    // remap api exception to custom errors with human readable messages

    return weatherStats;
  }

  function mapForecastResponseToWeather(forecast: ForecastResponse): WeatherStats {
    return {
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
