import useHomePageStore from "./stores/useHomePageStore";
import CitySearchInput from "./CitySearchInput";
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

    citySearchValue,
    searchHistory,
    handleSearchHistoryDelete,
    changeCitySearchValue,
  } = useHomePageStore();

  return (
    <Stack
      flexGrow={1}
      maxWidth={400}
      minWidth={400}
      alignSelf="center"
      alignItems="stretch"
      px={3}
    >
      <Box flex="0 1 20%" />

      <Stack direction="row" justifyContent="stretch" alignItems="center">
        <CitySearchInput
          autoFocus
          value={citySearchValue}
          searchHistory={searchHistory}
          onSelect={loadWeatherForCity}
          onDelete={handleSearchHistoryDelete}
          onInputChange={changeCitySearchValue}
          onEnterPress={loadWeatherForEnteredCity}
          disabled={weatherLoading}
          sx={{ marginRight: 2 }}
        />
        <SearchButton
          loading={weatherLoading}
          onClick={loadWeatherForEnteredCity}
        />
      </Stack>

      <Box flex="0 1 20%" />

      <Weather
        weather={weather}
        loading={weatherLoading}
        loadingError={weatherLoadingError}
      />
    </Stack>
  )
}
