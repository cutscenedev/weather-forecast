import useHomePageStore from "./useHomePageStore";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import Stack from "@mui/material/Stack";
import Weather from './weather/Weather'
import Box from "@mui/material/Box";

export default function HomePage() {
  const {
    weather,
    weatherLoading,
    weatherLoadingError,
    actualizeWeather,

    cityName,
    changeCityName,
  } = useHomePageStore();

  return (
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
          onBlur={actualizeWeather}
          onEnterPress={actualizeWeather}
          disabled={weatherLoading}
          sx={{ flex: 1, marginRight: 2 }}
        />
        <SearchButton
          loading={weatherLoading}
          onClick={actualizeWeather}
        />
      </Stack>
      <Box flex="0 1 10%" />
      <Weather
        weather={weather}
        loading={weatherLoading}
        loadingError={weatherLoadingError}
      />
    </Stack>
  )
}
