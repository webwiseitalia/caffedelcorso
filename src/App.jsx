import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import HomePage from './pages/HomePage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import EventiPrivati from './pages/EventiPrivati'
import ColazioniBrunch from './pages/ColazioniBrunch'
import CookieBanner from './components/CookieBanner'

// Componente per resettare lo scroll ad ogni cambio pagina
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Forza lo scroll al top immediatamente e dopo un breve delay
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/eventi-privati" element={<EventiPrivati />} />
        <Route path="/colazioni-brunch" element={<ColazioniBrunch />} />
      </Routes>
    </Router>
  )
}

export default App
