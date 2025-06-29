import CssBaseline from '@mui/material/CssBaseline'
import HomePage from '../pages/HomePage'
import { AppConfigProvider } from './config/AppConfig'
import { WeatherApiConnectorProvider } from './api/connectors/AppWeatherApiConnector'
import { WeatherApiProviderProvider } from './api/providers/AppWeatherApiProvider'

export default function App() {
  return (
    <AppConfigProvider>
      <WeatherApiConnectorProvider>
        <WeatherApiProviderProvider>
          <CssBaseline />
          <HomePage />
        </WeatherApiProviderProvider>
      </WeatherApiConnectorProvider>
    </AppConfigProvider>
  )
}
