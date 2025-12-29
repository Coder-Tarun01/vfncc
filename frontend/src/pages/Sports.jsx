import SportCard from '../components/SportCard'
import PageHeading from '../components/PageHeading'
import { getAssetPath } from '../utils/assets'

const sports = [
  {
    title: 'Billiards',
    slug: 'billiards',
    description: 'Tournament-grade tables, coaching assistance, and a relaxed lounge vibe.',
      image: getAssetPath('/sports/a-32.png'),
    },
  {
    title: 'Beach Volley Ball',
    slug: 'beach-volley-ball',
    description: 'Sandy court setups for casual rallies and friendly beach-style tournaments.',
    image: getAssetPath('/sports/a-33.png'),
  },
  {
    title: 'Cards Room',
    slug: 'cards-room',
    description: 'Comfortable, quiet room for cards and board games with friends and family.',
    image: getAssetPath('/sports/a-34.png'),
  },
  {
    title: 'Tennis Court',
    slug: 'tennis-court',
    description: 'Floodlit, cushioned courts with booking slots and pro gear on request.',
    image: getAssetPath('/sports/a-35.png'),
  },
  {
    title: 'Shuttle Badminton',
    slug: 'shuttle-badminton',
    description: 'Indoor courts, coaching clinics, and ladders for competitive play.',
    image: getAssetPath('/sports/a-36.png'),
  },
  {
    title: 'Swimming Pool',
    slug: 'swimming-pool',
    description: 'Sparkling pool with deck seating, lifeguards, and aqua fitness sessions.',
    image: getAssetPath('/sports/a-37.png'),
  },
  {
    title: 'Squash Court',
    slug: 'squash-court',
    description: 'Enclosed courts for high-intensity rallies and structured training.',
    image: getAssetPath('/sports/a-38.png'),
  },
  {
    title: 'Shooting Court',
    slug: 'shooting-court',
    description: 'Target practice range with supervision and safety guidance.',
    image: getAssetPath('/sports/a-39.png'),
  },
  {
    title: 'Shooting',
    slug: 'shooting',
    description: 'Precision-focused shooting sessions with proper safety protocols.',
    image: getAssetPath('/sports/a-40.png'),
  },
  {
    title: 'GYM',
    slug: 'gym',
    description: 'Strength and cardio zones, personal training, and recovery guidance.',
    image: getAssetPath('/sports/a-41.png'),
  },
  {
    title: 'Yoga Hall',
    slug: 'yoga-hall',
    description: 'Calm, airy hall designed for guided yoga and mindfulness sessions.',
    image: getAssetPath('/sports/a-42.png'),
  },
  {
    title: 'Children’s Play Area',
    slug: 'childrens-play-area',
    description: 'Safe, vibrant play spaces with supervision for little members.',
    image: getAssetPath('/sports/a-43.png'),
  },
]

const Sports = () => {
  return (
    <main className="space-y-0">
      <PageHeading title="Sports" />
      <div className="container section-padding space-y-10">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 font-display">
            Play, train, and unwind every day
          </h1>
          <p className="text-gray-700 leading-relaxed">
            From early morning practice to late-night rallies, our facilities are built for
            consistency, coaching, and camaraderie.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sports.map((sport) => (
            <SportCard key={sport.slug} {...sport} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Sports

