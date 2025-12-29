import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { getAssetPath } from '../utils/assets'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/sports', label: 'Sports' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/upcoming-events', label: 'Upcoming Events' },
  { to: '/newsletters', label: 'Newsletters' },
  { to: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: '#720000', borderColor: '#5a0000' }}>
      <nav className="container py-3 space-y-3">
        {/* Row 1: brand + title + action */}
        <div className="hidden lg:grid grid-cols-3 items-center gap-4">
          <Link to="/" className="flex items-center gap-3 justify-self-start">
            <img 
              src={getAssetPath("/images/vfncc-removebg-preview (1).png")}
              alt="VFNC Logo" 
              className="h-16 w-auto"
              onError={(e) => {
                // Fallback if image doesn't exist
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center text-white font-black" style={{ display: 'none' }}>
                  FN
                </div>
          </Link>

          <div className="justify-self-center text-center">
            <span className="font-black uppercase tracking-[0.25em] text-xl whitespace-nowrap" style={{ color: '#f4b400', fontWeight: 900 }}>
              Vizag Film Nagar Cultural Centre
            </span>
          </div>

          <div className="justify-self-end flex items-center gap-3">
            <img 
              src={getAssetPath("/images/fncc-30years-logo.png")}
              alt="30 Years of FNCC" 
              className="h-16 w-auto"
              onError={(e) => {
                // Fallback if image doesn't exist
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'inline-flex';
              }}
            />
            <Link to="/contact" className="btn-primary text-sm" style={{ display: 'none' }}>Become a Member</Link>
          </div>
        </div>

        {/* Row 2: nav links */}
        <div className="hidden lg:flex items-center justify-center gap-4 border-t pt-3" style={{ borderColor: '#5a0000' }}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `group relative overflow-hidden px-3 py-2 text-sm font-semibold uppercase tracking-wide transition ${
                  isActive ? 'text-yellow-300' : 'text-white'
                }`
              }
            >
              <span className="relative z-10 transition group-hover:text-[#720000]">{item.label}</span>
              <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-200" style={{ backgroundColor: '#f4b400' }} />
            </NavLink>
          ))}
        </div>

        {/* Mobile header */}
        <div className="flex items-center justify-between gap-4 lg:hidden">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={getAssetPath("/images/vfncc-removebg-preview (1).png")}
              alt="VFNC Logo" 
              className="h-12 w-auto"
              onError={(e) => {
                // Fallback if image doesn't exist
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center text-white font-black" style={{ display: 'none' }}>
                  FN
                </div>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="text-white p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5a0000'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.75h16.5M3.75 12h16.5M3.75 18.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t" style={{ backgroundColor: '#720000', borderColor: '#5a0000' }}>
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-sm font-medium py-2 rounded-md px-3 transition ${
                    isActive ? 'text-yellow-300' : 'text-white'
                  }`
                }
                style={({ isActive }) => isActive ? { backgroundColor: '#5a0000' } : {}}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.classList.contains('text-yellow-300')) {
                    e.currentTarget.style.backgroundColor = '#5a0000';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full text-center"
            >
              Connect With Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

