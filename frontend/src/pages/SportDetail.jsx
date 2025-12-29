import React from 'react'
import { Link, useParams } from 'react-router-dom'
import PageHeading from '../components/PageHeading'
import { getAssetPath } from '../utils/assets'

const sportsData = {
  'billiards': {
    title: 'Billiards',
    image: getAssetPath('/sports/a-32.png'),
    description:
      'Enjoy classic cue-sport sessions on tournament-quality tables with professional coaching and a relaxed lounge atmosphere.',
  },
  'beach-volley-ball': {
    title: 'Beach Volley Ball',
    image: getAssetPath('/sports/a-33.png'),
    description:
      'Feel the sand beneath your feet on our beach-style volleyball court, perfect for friendly rallies and social tournaments.',
  },
  'cards-room': {
    title: 'Cards Room',
    image: getAssetPath('/sports/a-34.png'),
    description:
      'A calm, air-conditioned space designed for card games and board games, ideal for relaxed evenings with friends and family.',
  },
  'tennis-court': {
    title: 'Tennis Court',
    image: getAssetPath('/sports/a-35.png'),
    description:
      'Well-maintained tennis courts with cushioned surfaces, coaching support, and floodlights for morning and evening play.',
  },
  'shuttle-badminton': {
    title: 'Shuttle Badminton',
    image: getAssetPath('/sports/a-36.png'),
    description:
      'Indoor badminton courts with quality flooring, coaching clinics, and friendly ladders for competitive play.',
  },
  'swimming-pool': {
    title: 'Swimming Pool',
    image: getAssetPath('/sports/a-37.png'),
    description:
      'A sparkling swimming pool with dedicated lanes, a kids’ area, lifeguard supervision, and relaxing deck seating.',
  },
  'squash-court': {
    title: 'Squash Court',
    image: getAssetPath('/sports/a-38.png'),
    description:
      'Enclosed squash courts designed for high-intensity rallies and structured training sessions.',
  },
  'shooting-court': {
    title: 'Shooting Court',
    image: getAssetPath('/sports/a-39.png'),
    description:
      'A supervised target practice range with proper safety gear and guidance from trained staff.',
  },
  'shooting': {
    title: 'Shooting',
    image: getAssetPath('/sports/a-40.png'),
    description:
      'Precision-focused shooting sessions with structured programs for beginners and enthusiasts.',
  },
  'gym': {
    title: 'GYM',
    image: getAssetPath('/sports/a-41.png'),
    description:
      'A modern gym with strength and cardio zones, functional equipment, and trainers to guide your workouts.',
  },
  'yoga-hall': {
    title: 'Yoga Hall',
    image: getAssetPath('/sports/a-42.png'),
    description:
      'A serene, airy hall designed for yoga, meditation, and mindfulness sessions.',
  },
  'childrens-play-area': {
    title: 'Children’s Play Area',
    image: getAssetPath('/sports/a-43.png'),
    description:
      'A colorful, safe play zone where children can explore, play, and enjoy supervised activities.',
  },
}

const SportDetail = () => {
  const { sportId } = useParams()
  const sport = sportId ? sportsData[sportId] : null

  if (!sport) {
    return (
      <main className="space-y-0">
        <PageHeading title="Sport Not Found" />
        <div className="container section-padding text-center">
          <p className="text-gray-700 mb-6">
            The sport you are looking for is not available. Please go back and choose another activity.
          </p>
          <Link to="/sports" className="btn-secondary inline-flex">
            Back to Sports
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="space-y-0">
      <PageHeading title={sport.title} />
      <div className="container section-padding space-y-8">
      <div>
        <Link
          to="/sports"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Sports
        </Link>
      </div>

      <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center min-h-[420px]">
            <img
              src={sport.image}
              alt={sport.title}
              className="max-h-[420px] w-full max-w-full object-contain"
              onError={(e) => {
                e.currentTarget.src = getAssetPath('/sports/a-32.png')
              }}
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold font-display" style={{ color: '#720000' }}>
              {sport.title}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">{sport.description}</p>
            <p className="text-gray-700">
              From early morning practice sessions to relaxed evening games, our sports facilities are designed to keep
              you active, social, and energised. Join coached programs or enjoy casual play at your own pace.
            </p>
          </div>
        </div>

        <aside className="space-y-3">
          {Object.entries(sportsData).map(([key, item]) => (
            <Link
              key={key}
              to={`/sports/${key}`}
              className={`flex items-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold transition ${
                key === sportId
                  ? 'bg-[#720000] text-white border-[#720000]'
                  : 'bg-white text-gray-800 border-gray-200 hover:border-[#720000]'
              }`}
            >
              <span role="img" aria-label="view" className="text-lg">👁️</span>
              <span>{item.title}</span>
            </Link>
          ))}
        </aside>
      </div>
      </div>
    </main>
  )
}

export default SportDetail


