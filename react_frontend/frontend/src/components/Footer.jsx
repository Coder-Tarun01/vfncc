import { Link } from 'react-router-dom'
import { getAssetPath } from '../utils/assets'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Sports', to: '/sports' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Upcoming Events', to: '/upcoming-events' },
  { label: 'Newsletters', to: '/newsletters' },
  { label: 'Contact', to: '/contact' },
]

const Footer = () => {
  return (
    <footer className="border-t text-white" style={{ backgroundColor: '#720000', borderColor: '#5a0000' }}>
      <div className="container section-padding grid gap-12 lg:grid-cols-4">
        <div>
          <div className="flex flex-col items-start gap-3">
            <img 
              src={getAssetPath("/images/vfncc-removebg-preview (1).png")} 
              alt="VFNCC Logo" 
              className="h-16 w-auto"
              onError={(e) => {
                // Fallback if image doesn't exist
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center text-white font-black" style={{ display: 'none' }}>
              VF
            </div>
          </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-200">
            A premium members-only enclave for cinema professionals and their families, offering
            warm hospitality, recreation, and cultural experiences in the heart of Film Nagar.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4" style={{ color: '#f4b400' }}>Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-gray-200 hover:text-yellow-300 transition inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4" style={{ color: '#f4b400' }}>Contact</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Thimmapuram, Kapuluppada</li>
            <li>Visakhapatnam, Andhra Pradesh 531163</li>
            <li className="text-white font-medium">+91 70361 87999</li>
            <li className="text-white font-medium">+91 (40) 23636100</li>
            <li className="text-white font-medium">fncc123@gmail.com</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4" style={{ color: '#f4b400' }}>Hours</h3>
          <ul className="text-sm text-gray-200 space-y-2">
            <li>Club & Dining: 11:00 AM – 11:00 PM</li>
            <li>Sports & Fitness: 6:00 AM – 10:00 PM</li>
            <li>Front Desk: 24/7 member support</li>
          </ul>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: '#5a0000' }}>
        <div className="container py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-gray-200">
          <span>© {new Date().getFullYear()} Vizag Film Nagar Cultural Centre. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <span className="hover:text-yellow-300 transition cursor-pointer">Terms</span>
            <span className="hover:text-yellow-300 transition cursor-pointer">Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

