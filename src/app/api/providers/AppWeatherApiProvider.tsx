import createAppModule from "../../createAppModule";
import WeatherApiProvider from "./WeatherApiProvider";

export const [
  WeatherApiProviderProvider,
  useWeatherApiProvider,
] = createAppModule(WeatherApiProvider)
