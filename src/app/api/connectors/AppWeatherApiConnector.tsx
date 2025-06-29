import createAppModule from "../../createAppModule";
import WeatherApiConnector from "./WeatherApiConnector";

export const [
  WeatherApiConnectorProvider,
  useWeatherApiConnector,
] = createAppModule(WeatherApiConnector)
