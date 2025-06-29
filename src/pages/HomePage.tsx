import Button from "@mui/material/Button";
import { useAppConfig } from "../app/config/AppConfig";

export default function HomePage() {
  const appConfig = useAppConfig();

  return (
    <>
      {appConfig.weatherApi.url} <br />
      <Button variant="contained">Hello world</Button>
    </>
  )
}
