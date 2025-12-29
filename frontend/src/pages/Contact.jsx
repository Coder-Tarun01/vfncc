import { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', message: '' })

  return (
    <main className="space-y-0">
      {/* Contact Heading with Map */}
      <div 
        className="relative px-4 py-6 md:py-8"
        style={{
          background: 'radial-gradient(circle at center, rgba(128,0,0,0.85) 0%, rgba(70,0,0,0.9) 45%, rgba(0,0,0,0.96) 100%)',
        }}
      >
        <div className="container">
          <h1 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide text-center mb-6">
            Contact
          </h1>
          <div className="w-full rounded-2xl overflow-hidden shadow-lg" style={{ border: '2px solid #f4b400' }}>
            <iframe
              src="https://www.google.com/maps?q=Thimmapuram+Kapuluppada+Visakhapatnam+Andhra+Pradesh+531163&output=embed"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VFNCC Location Map"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container section-padding space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 font-display">Visit or write to us</h1>
          <p className="text-gray-700 leading-relaxed max-w-2xl">
            We are located in the heart of Film Nagar. Reach out to plan an event, schedule a tour, or
            inquire about memberships. We typically respond within one business day.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="glass rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Contact Details</h2>
            <div className="text-sm text-gray-700 space-y-2">
              <p className="font-semibold text-gray-900">Address</p>
              <p>
                Thimmapuram, Kapuluppada,
                <br />
                Visakhapatnam, Andhra Pradesh 531163
              </p>
            </div>
            <div className="text-sm text-gray-700 space-y-1">
              <p className="font-semibold text-gray-900">Mobile</p>
              <p>+91 70361 87999</p>
            </div>
            <div className="text-sm text-gray-700 space-y-1">
              <p className="font-semibold text-gray-900">Phone</p>
              <p>+91 (40) 23636100</p>
            </div>
            <div className="text-sm text-gray-700 space-y-1">
              <p className="font-semibold text-gray-900">Email</p>
              <p>fncc123@gmail.com</p>
            </div>
          </div>

          <div className="lg:col-span-2 glass rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Send a message</h2>
            <form className="grid gap-4">
              <label className="text-sm text-gray-700 space-y-1">
                <span>Name</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none"
                  onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px #720000'}
                  onBlur={(e) => e.currentTarget.style.boxShadow = ''}
                />
              </label>
              <label className="text-sm text-gray-700 space-y-1">
                <span>Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none"
                  onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px #720000'}
                  onBlur={(e) => e.currentTarget.style.boxShadow = ''}
                />
              </label>
              <label className="text-sm text-gray-700 space-y-1">
                <span>Phone</span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 00000 00000"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none"
                  onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px #720000'}
                  onBlur={(e) => e.currentTarget.style.boxShadow = ''}
                />
              </label>
              <label className="text-sm text-gray-700 space-y-1">
                <span>Date</span>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none"
                  onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px #720000'}
                  onBlur={(e) => e.currentTarget.style.boxShadow = ''}
                />
              </label>
              <label className="text-sm text-gray-700 space-y-1">
                <span>Message</span>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows="4"
                  placeholder="How can we help?"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none"
                  onFocus={(e) => e.currentTarget.style.boxShadow = '0 0 0 2px #720000'}
                  onBlur={(e) => e.currentTarget.style.boxShadow = ''}
                />
              </label>
              <button 
                type="button" 
                className="btn-primary w-full sm:w-auto"
                style={{ backgroundColor: '#f4b400', borderColor: '#f4b400' }}
              >
                Submit (demo only)
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact

