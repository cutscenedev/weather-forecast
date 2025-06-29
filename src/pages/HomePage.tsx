import { useAppConfig } from "../app/config/AppConfig";
import useHomePageStore from "./useHomePageStore";
import useLayoutEffectOnce from "../components/hooks/useLayoutEffectOnce";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import Stack from "@mui/material/Stack";
import Weather from './weather/Weather'

export default function HomePage() {
  const {
    weather,
    loadSavedWeather,
    updateWeatherIfNeeded,

    cityName,
    setCityName,
  } = useHomePageStore();

  useLayoutEffectOnce(async () => {
    void loadSavedWeather();
  })

  return (
    <Stack>
      <SearchInput
        value={cityName}
        onChange={setCityName}
        onBlur={updateWeatherIfNeeded}
        onEnterPress={updateWeatherIfNeeded}
      />
      <SearchButton
        onClick={updateWeatherIfNeeded}
      />
      {weather && (
        <Weather weather={weather} />
      )}
    </Stack>
  )
}
