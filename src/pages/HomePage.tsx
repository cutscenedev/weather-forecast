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
    loadWeatherForCity,
    loadWeatherForEnteredCity,

    cityName,
    searchHistory,
    handleCityDelete,
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
          searchHistory={searchHistory}
          onSelect={loadWeatherForCity}
          onDelete={handleCityDelete}
          onInputChange={changeCityName}
          onEnterPress={loadWeatherForEnteredCity}
          disabled={weatherLoading}
          sx={{ flex: 1, marginRight: 2 }}
        />
        <SearchButton
          loading={weatherLoading}
          onClick={loadWeatherForEnteredCity}
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
