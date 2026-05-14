import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ChatWorkspace from './pages/ChatWorkspace'
import AgentsMarketplace from './pages/AgentsMarketplace'
import AnalyticsDashboard from './pages/AnalyticsDashboard'
import KnowledgePage from './pages/KnowledgePage'
import SettingsPage from './pages/SettingsPage'
import HelpPage from './pages/HelpPage'
import AccountPage from './pages/AccountPage'
import DocsPage from './pages/DocsPage'
import PricingPage from './pages/PricingPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatWorkspace />} />
        <Route path="/marketplace" element={<AgentsMarketplace />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
        <Route path="/knowledge" element={<KnowledgePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Router>
  )
}

export default App
