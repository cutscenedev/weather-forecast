export default function Config() {
  return {
    weatherApi: {
      url: import.meta.env.VITE_WEATHER_API_URL,
      key: import.meta.env.VITE_WEATHER_API_KEY,
    },
    storage: {
      localStoragePrefix: 'weather-forecast'
    }
  };
}
