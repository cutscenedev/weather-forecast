import CssBaseline from '@mui/material/CssBaseline'
import HomePage from '../pages/HomePage'
import { AppConfigProvider } from './config/AppConfig'

export default function App() {
  return (
    <AppConfigProvider>
      <CssBaseline />
      <HomePage />
    </AppConfigProvider>
  )
}
