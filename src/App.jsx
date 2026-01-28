import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import EventiPrivati from './pages/EventiPrivati'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <Router>
      <CookieBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/eventi-privati" element={<EventiPrivati />} />
      </Routes>
    </Router>
  )
}

export default App
