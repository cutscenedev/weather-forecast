import HomePage from '../pages/HomePage'
import { AppConfigProvider } from './config/AppConfig'
import { WeatherApiConnectorProvider } from './api/connectors/AppWeatherApiConnector'
import { WeatherApiProviderProvider } from './api/providers/AppWeatherApiProvider'
import AppStyles from './styles/AppStyles'
import { AppStorageServiceProvider } from './services/AppStorageService'

export default function App() {
  return (
    <AppStyles>
      <AppConfigProvider>
        <AppStorageServiceProvider>
          <WeatherApiConnectorProvider>
            <WeatherApiProviderProvider>
              <HomePage />
            </WeatherApiProviderProvider>
          </WeatherApiConnectorProvider>
        </AppStorageServiceProvider>
      </AppConfigProvider>
    </AppStyles>
  )
}
