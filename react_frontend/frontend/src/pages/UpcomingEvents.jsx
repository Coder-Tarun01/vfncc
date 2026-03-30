import PageHeading from '../components/PageHeading'

const events = [
  {
    title: 'Monsoon Soirée & Live Band',
    date: 'July 12, 2026',
    time: '7:00 PM – 10:30 PM',
    description: 'An open-air evening with indie bands, chef-led grazing tables, and handcrafted drinks.',
    badge: 'Members + Guests',
  },
  {
    title: 'Telugu Cinema Retrospective',
    date: 'July 26, 2026',
    time: '6:30 PM – 9:30 PM',
    description: 'Classic film screenings with director commentary followed by a fireside chat.',
    badge: 'Members Only',
  },
  {
    title: 'Wellness Weekend',
    date: 'August 2-3, 2026',
    time: '6:00 AM – 11:00 AM',
    description: 'Sunrise yoga, aqua fitness, and nutrition consults for a holistic reset.',
    badge: 'Open Slots',
  },
]

const UpcomingEvents = () => {
  return (
    <main className="space-y-0">
      <PageHeading title="Upcoming Events" />
      <div className="container section-padding space-y-10">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 font-display">Upcoming at the Centre</h1>
          <p className="text-gray-700 leading-relaxed">
            Mark your calendar for member socials, screenings, and wellness sessions curated for the
            Film Nagar community.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event) => (
            <div key={event.title} className="glass rounded-2xl p-6 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#720000' }}>{event.date}</p>
                  <h3 className="text-xl font-semibold text-gray-900 mt-1">{event.title}</h3>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300">
                  {event.badge}
                </span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{event.description}</p>
              <p className="text-sm text-gray-600">Time: {event.time}</p>
              <div className="flex gap-3 pt-2">
                <button className="btn-primary text-xs">RSVP</button>
                <button className="btn-secondary text-xs">Add to Calendar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default UpcomingEvents

