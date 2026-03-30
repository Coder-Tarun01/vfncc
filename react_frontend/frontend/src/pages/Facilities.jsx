import FacilityCard from '../components/FacilityCard'
import PageHeading from '../components/PageHeading'
import { getAssetPath } from '../utils/assets'

const facilities = [
  {
    title: 'Banquet Halls',
    description: 'Banquet hall is a special purpose room, or a building, used for hosting large social and business events.',
    image: getAssetPath('/facilities/baquethall.png'),
    slug: 'banquet-halls',
  },
  {
    title: 'Conference Halls',
    description: 'Great conference room, along with the lobby and private executive offices, frequently create a company\'s best and longest-lasting impression.',
    image: getAssetPath('/facilities/ConferenceHall.png'),
    slug: 'conference-halls',
  },
  {
    title: 'Family Restaurant',
    description: 'Family style dining is a popular trend these days. It\'s a way to eat where everyone gets their own plate, staff brings the food to each person\'s.',
    image: getAssetPath('/facilities/familyrestaurent.png'),
    slug: 'family-restaurant',
  },
  {
    title: 'Food Court',
    description: 'Indulge in a world of flavors and culinary delights at our vibrant food court, where every bite is a journey of satisfaction.',
    image: getAssetPath('/facilities/foodcourt.png'),
    slug: 'food-court',
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
    title: 'Home Theatre',
    description: 'State-of-the-art home theatre with premium sound and visual systems for an immersive entertainment experience.',
    image: getAssetPath('/facilities/hometheatre.png'),
    slug: 'home-theatre',
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
    title: 'AC Double Room',
    description: 'Comfortable air-conditioned double rooms with modern amenities for a relaxing stay.',
    image: getAssetPath('/facilities/AcDoubleRoom.png'),
    slug: 'ac-double-room',
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
    title: 'Children Pickle Ball Court',
    description: 'Dedicated pickle ball court for children, providing a safe and fun environment for young players.',
    image: getAssetPath('/facilities/childrenPickleBallCourt.png'),
    slug: 'children-pickle-ball-court',
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
    image: getAssetPath('/facilities/EachFacility/viewpoint1.png'),
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
    image: getAssetPath('/facilities/EachFacility/swimmingpool.png'),
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

