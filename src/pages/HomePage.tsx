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
    <Stack flex={1} alignItems="center">
      <Stack
        flexGrow={1}
        maxWidth={500}
        minWidth={300}
        width="100%"
        alignItems="stretch"
        px={3}
      >
        <Box flex="0 1 20%" />

        <Stack direction="row" justifyContent="stretch" alignItems="center" mb={4}>
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

        <Weather
          weather={weather}
          loading={weatherLoading}
          loadingError={weatherLoadingError}
        />
      </Stack>
    </Stack>
  )
}
