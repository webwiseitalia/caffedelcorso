/**
 * MAIN.JSX - Entry point dell'applicazione
 * Caffè del Corso - Sito web bar/caffetteria
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
