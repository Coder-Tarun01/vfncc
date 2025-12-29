import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ProtectedRoute from './components/ProtectedRoute'
import SocialMediaSidebar from './components/SocialMediaSidebar'
import Home from './pages/Home'
import About from './pages/About'
import Facilities from './pages/Facilities'
import Sports from './pages/Sports'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import UpcomingEvents from './pages/UpcomingEvents'
import Newsletters from './pages/Newsletters'
import FacilityDetail from './pages/FacilityDetail'
import SportDetail from './pages/SportDetail'
import Login from './pages/admin/Login'
import Register from './pages/admin/Register'
import Dashboard from './pages/admin/Dashboard'

// Layout component for public pages
const PublicLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1 pb-16">
        {children}
      </div>
      <Footer />
      <SocialMediaSidebar />
    </div>
  )
}

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public routes with Navbar and Footer */}
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/facilities" element={<PublicLayout><Facilities /></PublicLayout>} />
        <Route path="/facilities/:facilityId" element={<PublicLayout><FacilityDetail /></PublicLayout>} />
        <Route path="/sports" element={<PublicLayout><Sports /></PublicLayout>} />
        <Route path="/sports/:sportId" element={<PublicLayout><SportDetail /></PublicLayout>} />
        <Route path="/gallery" element={<PublicLayout><Gallery /></PublicLayout>} />
        <Route path="/upcoming-events" element={<PublicLayout><UpcomingEvents /></PublicLayout>} />
        <Route path="/newsletters" element={<PublicLayout><Newsletters /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
        
        {/* Admin routes without Navbar/Footer */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/register" element={<Register />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </>
  )
}

export default App
