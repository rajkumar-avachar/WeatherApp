import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WeatherPage from './WeatherApp/WeatherPage'
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherPage/>
  </StrictMode>,
)
