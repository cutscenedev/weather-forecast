import type { Weather } from "../useHomePageStore"

interface Props {
  weather: Weather
}

export default function Weather({
  weather
}: Props) {
  return (
    <div>
      <p>current temp: {weather.currentTemp}</p>
      <p>condition: {weather.condition}</p>
      <p>wind speed km/h: {weather.windSpeed}</p>
      <p>min-max temp today: {weather.todayTempRange[0]} - {weather.todayTempRange[1]}</p>
    </div>
  )
}
