import Typography from "@mui/material/Typography"

interface Props {
  error: Error
}

export default function WeatherLoadingErrorView({
  error
}: Props) {

  return (
    <Typography>
      {error.message}
    </Typography>
  )
}
