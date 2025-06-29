import HomePage from '../pages/HomePage'
import { AppConfigProvider } from './config/AppConfig'
import { WeatherApiConnectorProvider } from './api/connectors/AppWeatherApiConnector'
import { WeatherApiProviderProvider } from './api/providers/AppWeatherApiProvider'
import AppStyles from './styles/AppStyles'

export default function App() {
  return (
    <AppStyles>
      <AppConfigProvider>
        <WeatherApiConnectorProvider>
          <WeatherApiProviderProvider>
            <HomePage />
          </WeatherApiProviderProvider>
        </WeatherApiConnectorProvider>
      </AppConfigProvider>
    </AppStyles>
  )
}
