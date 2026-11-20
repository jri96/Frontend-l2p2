import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Bootstrap wordt nu via SASS geladen in App.scss,
// daarom staat de losse bootstrap.min.css import hier niet meer.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
