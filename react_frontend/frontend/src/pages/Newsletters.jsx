import PageHeading from '../components/PageHeading'

const newsletters = [
  {
    title: 'Quarterly Spotlight',
    month: 'June 2026',
    summary: 'Highlights of member achievements, upcoming collaborations, and club upgrades.',
    linkLabel: 'Download PDF',
  },
  {
    title: 'Events & Culture Digest',
    month: 'May 2026',
    summary: 'Recap of recent socials, film panels, and community initiatives.',
    linkLabel: 'Read Online',
  },
  {
    title: 'Wellness & Sports',
    month: 'April 2026',
    summary: 'Training tips from our coaches, facility schedules, and junior programs.',
    linkLabel: 'Download PDF',
  },
]

const Newsletters = () => {
  return (
    <main className="space-y-0">
      <PageHeading title="Newsletters" />
      <div className="container section-padding space-y-10">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 font-display">Club updates & stories</h1>
          <p className="text-gray-700 leading-relaxed">
            Stay informed with our monthly roundups covering events, facility news, and member wins.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {newsletters.map((item) => (
            <article key={item.title} className="glass rounded-2xl p-6 flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#720000' }}>{item.month}</p>
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-1">{item.summary}</p>
              <button className="btn-secondary text-xs self-start">{item.linkLabel}</button>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Newsletters

