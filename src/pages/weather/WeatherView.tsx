import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { Weather } from "../stores/useHomePageStore"
import Skeleton from "@mui/material/Skeleton"

interface Props {
  weather: Weather | null
  loading: boolean
}

export default function WeatherView({
  weather,
  loading,
}: Props) {
  return (
    <Card sx={{ width: "100%", bgcolor: "background.default", borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid size={8}>
            <Typography color="text.secondary">City:</Typography>
          </Grid>
          <Grid size={4}>
            {loading
              ? <Skeleton />
              : <Typography fontWeight="bold">{weather!.city}</Typography>
            }
          </Grid>
          <Grid size={8}>
            <Typography color="text.secondary">Current temp:</Typography>
          </Grid>
          <Grid size={4}>
            {loading
              ? <Skeleton />
              : <Typography fontWeight="bold">{weather!.currentTemp}</Typography>
            }
          </Grid>
          <Grid size={8}>
            <Typography color="text.secondary">Condition:</Typography>
          </Grid>
          <Grid size={4}>
            {loading
              ? <Skeleton />
              : <Typography fontWeight="bold">{weather!.condition}</Typography>
            }
          </Grid>
          <Grid size={8}>
            <Typography color="text.secondary">Wind speed (km/h):</Typography>
          </Grid>
          <Grid size={4}>
            {loading
              ? <Skeleton />
              : <Typography fontWeight="bold">{weather!.windSpeed}</Typography>
            }
          </Grid>
          <Grid size={8}>
            <Typography color="text.secondary">Temp today (min-max):</Typography>
          </Grid>
          <Grid size={4}>
            {loading
              ? <Skeleton />
              : <Typography fontWeight="bold">
                  {weather!.todayTempRange[0]}° - {weather!.todayTempRange[1]}°
                </Typography>
            }
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
