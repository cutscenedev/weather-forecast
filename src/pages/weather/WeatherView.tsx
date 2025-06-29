import Stack from "@mui/material/Stack"
import { Weather } from "../useHomePageStore"

interface Props {
  weather: Weather
}

export default function WeatherView({
  weather,
}: Props) {

  return (
    <Stack>
      <p>Weather for city: {weather.city}</p>
      <p>current temp: {weather.currentTemp}</p>
      <p>condition: {weather.condition}</p>
      <p>wind speed km/h: {weather.windSpeed}</p>
      <p>min-max temp today: {weather.todayTempRange[0]} - {weather.todayTempRange[1]}</p>
    </Stack>
  )
}
