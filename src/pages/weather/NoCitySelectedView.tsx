import Typography from "@mui/material/Typography"
import { Weather } from "../stores/useHomePageStore"


export default function NoCitySelectedView() {

  return (
    <Typography>
      Please enter your city to see weather forecast.
    </Typography>
  )
}
