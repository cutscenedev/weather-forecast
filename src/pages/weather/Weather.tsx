import type { Weather } from "../stores/useHomePageStore"
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

  if (loadingError) {
    return <WeatherLoadingErrorView error={loadingError} />
  }

  if (weather || loading) {
    return <WeatherView weather={weather} loading={loading} />
  }

  return <NoCitySelectedView />;
}
