import type { Weather } from "../useHomePageStore"
import WeatherLoadingView from "./WeatherLoadingView"
import WeatherLoadingErrorView from "./WeatherLoadingErrorView"
import WeatherView from "./WeatherView"
import NoCitySelectedView from "./NoCitySelectedView"

interface Props {
  weather: Weather | null
  loading: boolean
  loadingError: Error | null
}

export default function Weather({
  weather,
  loading,
  loadingError,
}: Props) {

  return loadingError
    ? <WeatherLoadingErrorView error={loadingError} />
    : loading
      ? <WeatherLoadingView />
      : weather === null
        ? <NoCitySelectedView />
        : <WeatherView weather={weather} />
  }
