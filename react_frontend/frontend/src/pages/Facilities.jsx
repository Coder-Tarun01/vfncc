import FacilityCard from '../components/FacilityCard'
import PageHeading from '../components/PageHeading'
import { getAssetPath } from '../utils/assets'

const facilities = [
  {
    title: 'Lawns Abutting Sea',
    description: 'Expansive sea-facing lawns ideal for outdoor gatherings, celebrations, and relaxed evenings with scenic views.',
    image: getAssetPath('/facilities/EachFacility/gallary_images/lawns.jpeg'),
    slug: 'lawns-abutting-sea',
  },
  {
    title: 'View Point',
    description: 'Scenic viewpoint offering breathtaking panoramic views, perfect for relaxation and photography.',
    image: getAssetPath('/facilities/EachFacility/gallary_images/viewPoint.jpeg'),
    slug: 'conference-halls',
  },
  {
    title: 'Family Restaurant',
    description: 'Family style dining is a popular trend these days. It\'s a way to eat where everyone gets their own plate, staff brings the food to each person\'s.',
    image: getAssetPath('/facilities/familyrestaurent.png'),
    slug: 'family-restaurant',
  },
  {
    title: 'Dining Hall',
    description: 'Spacious dining hall for family meals, member gatherings, and curated dining experiences in a comfortable indoor setting.',
    image: getAssetPath('/facilities/EachFacility/gallary_images/diningHall.jpeg'),
    slug: 'dining-hall',
  },
  {
    title: 'Cafe',
    description: 'Sip, savor, and indulge in every moment at our cozy café, where each cup tells a story and every bite brings delight.',
    image: getAssetPath('/facilities/cafe.png'),
    slug: 'cafe',
  },
  {
    title: 'Patio',
    description: 'Transform your patio into a tranquil oasis where relaxation meets the outdoors.',
    image: getAssetPath('/facilities/patio.png'),
    slug: 'patio',
  },
  {
    title: 'SPA',
    description: 'Therapy suites with steam and massage treatments for deep relaxation and rejuvenation.',
    image: getAssetPath('/facilities/spa.png'),
    slug: 'spa',
  },
  {
    title: 'Pub',
    description: 'Evening lounge with crafted beverages, live sessions, and mood lighting for a perfect night out.',
    image: getAssetPath('/facilities/pub.png'),
    slug: 'pub',
  },
  {
    title: 'Open Air Theatre',
    description: 'Expansive open-air theatre setup for screenings, performances, and cultural evenings in a natural outdoor setting.',
    image: getAssetPath('/facilities/EachFacility/gallary_images/openAirTheatre.jpeg'),
    slug: 'open-air-theatre',
  },
  {
    title: 'Library',
    description: 'Quiet, curated shelves with scripts, film literature, and creative non-fiction for avid readers.',
    image: getAssetPath('/facilities/library.png'),
    slug: 'library',
  },
  {
    title: 'NTR Lawn',
    description: 'Spacious outdoor lawn area perfect for events, gatherings, and celebrations under the open sky.',
    image: getAssetPath('/facilities/ntrlawn.png'),
    slug: 'ntr-lawn',
  },
  {
    title: 'Liquor Roof Garden',
    description: 'Elegant rooftop garden space with bar service, offering stunning views and a sophisticated atmosphere.',
    image: getAssetPath('/facilities/liquorproofgarden.png'),
    slug: 'liquor-roof-garden',
  },
  {
    title: 'Parking Space',
    description: 'Spacious, well-maintained parking for members and guests, with clear markings and convenient access to the club.',
    image: getAssetPath('/facilities/EachFacility/gallary_images/parkingPlace.jpeg'),
    slug: 'parking-space',
  },
  {
    title: 'Party Room',
    description: 'Versatile party room designed for celebrations, gatherings, and special occasions with all necessary facilities.',
    image: getAssetPath('/facilities/PartyRoom.png'),
    slug: 'party-room',
  },
  {
    title: 'Suite Room',
    description: 'Luxurious suite rooms with premium amenities, perfect for extended stays and special guests.',
    image: getAssetPath('/facilities/SuiteRoom.png'),
    slug: 'suite-room',
  },
  {
    title: 'Children\'s Play Area',
    description: 'Safe, vibrant play spaces with supervision for little members.',
    image: getAssetPath('/facilities/EachFacility/gallary_images/kids.jpeg'),
    slug: 'childrens-play-area',
  },
  {
    title: 'PDR Room',
    description: 'Private Dining Room (PDR) offering an intimate setting for exclusive dining experiences and meetings.',
    image: getAssetPath('/facilities/PdrRoom.png'),
    slug: 'pdr-room',
  },
  {
    title: 'Projector Room',
    description: 'Fully equipped projector room with advanced presentation technology for meetings, screenings, and professional presentations.',
    image: getAssetPath('/facilities/EachFacility/projectorroom.png'),
    slug: 'projector-room',
  },
  {
    title: 'View Point',
    description: 'Scenic viewpoint offering breathtaking panoramic views, perfect for relaxation and photography.',
    image: getAssetPath('/facilities/EachFacility/gallary_images/viewPoint.jpeg'),
    slug: 'view-point',
  },
  {
    title: 'Cards Room',
    description: 'Comfortable, quiet room designed for card games and board games, ideal for relaxed evenings with friends and family.',
    image: getAssetPath('/facilities/EachFacility/cardsroom.png'),
    slug: 'cards-room',
  },
  {
    title: 'Office',
    description: 'Professional office space with modern amenities, perfect for administrative work and business operations.',
    image: getAssetPath('/facilities/EachFacility/office.png'),
    slug: 'office',
  },
  {
    title: 'Club Entrance',
    description: 'Grand entrance to the club, welcoming members and guests with elegant design and warm hospitality.',
    image: getAssetPath('/facilities/EachFacility/clubentrance.png'),
    slug: 'club-entrance',
  },
  {
    title: 'Swimming Pool',
    description: 'Sparkling swimming pool with dedicated lanes, a kids\' area, lifeguard supervision, and relaxing deck seating.',
    image: getAssetPath('/facilities/EachFacility/gallary_images/swimmingPool.jpeg'),
    slug: 'swimming-pool',
  },
  {
    title: 'Guest Room',
    description: 'Comfortable guest rooms with modern amenities, perfect for short stays and visiting members.',
    image: getAssetPath('/facilities/EachFacility/guestroom.png'),
    slug: 'guest-room',
  },
]

const Facilities = () => {
  return (
    <main className="space-y-0">
      <PageHeading title="Facilities" />
      <div className="container section-padding space-y-10">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 font-display">
            Spaces designed for elegant gatherings
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Every venue is thoughtfully serviced with attentive staff, contemporary interiors, and
            technology support to make your event flow effortlessly.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <FacilityCard
              key={facility.title}
              image={facility.image}
              title={facility.title}
              description={facility.description}
              slug={facility.slug}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Facilities

