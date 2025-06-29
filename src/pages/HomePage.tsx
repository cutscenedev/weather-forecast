import { useAppConfig } from "../app/config/AppConfig";
import useHomePageStore from "./useHomePageStore";
import useLayoutEffectOnce from "../components/hooks/useLayoutEffectOnce";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import Stack from "@mui/material/Stack";
import Weather from './weather/Weather'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function HomePage() {
  const {
    weather,
    weatherLoading,
    weatherLoadingError,
    initSavedWeatherIfNeeded,
    updateWeatherIfNeeded,

    cityName,
    changeCityName,
  } = useHomePageStore();

  useLayoutEffectOnce(async () => {
    void initSavedWeatherIfNeeded();
  })

  return (
    // <Stack flex={1} alignItems="center">
    <Stack
      flex={1}
      maxWidth={400}
      minWidth={400}
      alignSelf="center"
      alignItems="stretch"
      px={3}
    >
      <Box flex="0 1 25%" />
      <Stack direction="row" justifyContent="stretch" alignItems="center">
        <SearchInput
          autoFocus
          value={cityName}
          onChange={changeCityName}
          onBlur={updateWeatherIfNeeded}
          onEnterPress={updateWeatherIfNeeded}
          disabled={weatherLoading}
          sx={{ flex: 1, marginRight: 2 }}
        />
        <SearchButton
          loading={weatherLoading}
          onClick={updateWeatherIfNeeded}
        />
      </Stack>
      <Box flex="0 1 10%" />
      <Weather
        weather={weather}
        loading={weatherLoading}
        loadingError={weatherLoadingError}
      />
    </Stack>

    // </Stack>
  )
}
