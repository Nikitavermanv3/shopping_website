import LandingPage from "./pages/landingPage/LandingPage"
import ViewAllPage from './pages/viewAllPage/ViewAllPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/viewAllCategories" element={<ViewAllPage />} />
        </Routes>
      </>
    </Router>

  )
}

export default App