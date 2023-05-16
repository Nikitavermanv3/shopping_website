import LandingPage from "./pages/landingPage/LandingPage"
import ViewAllPage from './pages/viewAllPage/ViewAllPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FacilityManagement from "./sections/popularCategories/facilityManagement/FacilityManagement"
import Logistics from "./sections/popularCategories/logistics/Logistics"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/viewAllCategories" element={<ViewAllPage />} />
        <Route path="/facility-management" element={<FacilityManagement />} />
        <Route path="/logistics" element={<Logistics />} />
      </Routes>
    </Router>
  )
}

export default App