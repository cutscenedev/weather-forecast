import Stack from "@mui/material/Stack"
import { Weather } from "../useHomePageStore"
import Grid from "@mui/material/Grid"

interface Props {
  weather: Weather
}

export default function WeatherView({
  weather,
}: Props) {

  return (
    <Grid container>
      <Grid size={8}>City:</Grid>
      <Grid size={4}>{weather.city}</Grid>
      <Grid size={8}>Current temp:</Grid>
      <Grid size={4}>{weather.currentTemp}</Grid>
      <Grid size={8}>Condition:</Grid>
      <Grid size={4}>{weather.condition}</Grid>
      <Grid size={8}>Wind speed (km/h):</Grid>
      <Grid size={4}>{weather.windSpeed}</Grid>
      <Grid size={8}>Temp today (min-max):</Grid>
      <Grid size={4}>{weather.todayTempRange[0]} - {weather.todayTempRange[1]}</Grid>
    </Grid>
  )
}
