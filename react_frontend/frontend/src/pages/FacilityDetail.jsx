import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import BookNowModal from '../components/BookNowModal'
import PageHeading from '../components/PageHeading'
import { getAssetPath } from '../utils/assets'

const facilitiesData = {
  'banquet-halls': {
    title: 'Banquet Halls',
    image: getAssetPath('/facilities/EachFacility/baquetHall.png'),
    description: 'Our grand banquet halls are special purpose rooms designed for hosting large social and business events. These pillar-free spaces feature premium acoustics, elegant lighting, and contemporary interiors that create the perfect ambiance for receptions, screenings, celebrations, and corporate gatherings. With state-of-the-art AV equipment and attentive staff, we ensure your event flows effortlessly from start to finish.',
    features: [
      'Spacious pillar-free design',
      'Premium sound and lighting systems',
      'Flexible seating arrangements',
      'Professional AV equipment',
      'Dedicated event coordination',
      'Catering services available'
    ]
  },
  'conference-halls': {
    title: 'Conference Halls',
    description: 'Our conference halls create a company\'s best and longest-lasting impression. These boardroom-style spaces are equipped with advanced audio-visual technology, perfect for press briefings, crew huddles, business meetings, and professional presentations. The elegant interiors and professional atmosphere ensure productive discussions and successful outcomes.',
    image: getAssetPath('/facilities/EachFacility/conferenceHall.png'),
    features: [
      'Professional boardroom setup',
      'Advanced AV systems',
      'High-speed internet connectivity',
      'Projection and display equipment',
      'Comfortable seating arrangements',
      'Catering and refreshment services'
    ]
  },
  'family-restaurant': {
    title: 'Family Restaurant',
    description: 'CATERING TIMINGS:\n\nThe Kitchen will be open for service during the following hours on all Days:\n(i) From 07.00 AM to 10.30 AM for Breakfast\n(ii) From 12.00 Noon to 02.30 PM for Lunch\n(iii) From 05:00 PM to 10:00 PM for evening Tiffins, Snacks and Dinner',
    image: getAssetPath('/facilities/EachFacility/facilityrestaurent.png'),
    features: [
      'Breakfast: 7:00 AM - 10:30 AM',
      'Lunch: 12:00 PM - 2:30 PM',
      'Evening & Dinner: 5:00 PM - 10:00 PM',
      'Multi-cuisine menu',
      'Family-friendly atmosphere',
      'Attentive service staff'
    ]
  },
  'cafe': {
    title: 'Cafe',
    description: 'CATERING TIMINGS:\n\nThe Kitchen will be open for service during the following hours on all Days:\n(i) From 07.00 AM to 10.30 AM for Breakfast\n(ii) From 12.00 Noon to 02.30 PM for Lunch\n(iii) From 05:00 PM to 10:00 PM for evening Tiffins, Snacks and Dinner',
    image: getAssetPath('/facilities/EachFacility/cafe.png'),
    features: [
      'Breakfast: 7:00 AM - 10:30 AM',
      'Lunch: 12:00 PM - 2:30 PM',
      'Evening & Dinner: 5:00 PM - 10:00 PM',
      'Artisanal coffee selection',
      'Fresh patisserie and pastries',
      'Relaxed seating areas'
    ]
  },
  'patio': {
    title: 'Patio',
    description: 'CATERING TIMINGS:\n\nThe Kitchen will be open for service during the following hours on all Days:\n(i) From 07.00 AM to 10.30 AM for Breakfast\n(ii) From 12.00 Noon to 02.30 PM for Lunch\n(iii) From 05:00 PM to 10:00 PM for evening Tiffins, Snacks and Dinner',
    image: getAssetPath('/facilities/EachFacility/patio.png'),
    features: [
      'Breakfast: 7:00 AM - 10:30 AM',
      'Lunch: 12:00 PM - 2:30 PM',
      'Evening & Dinner: 5:00 PM - 10:00 PM',
      'Outdoor dining experience',
      'Natural lighting and fresh air',
      'Perfect for social gatherings'
    ]
  },
  'spa': {
    title: 'SPA',
    description: 'Our therapy suites offer steam and massage treatments for deep relaxation and rejuvenation. Step into a world of tranquility where skilled therapists provide personalized treatments designed to refresh your mind, body, and spirit. Experience premium wellness services in a serene, luxurious environment.',
    image: getAssetPath('/facilities/EachFacility/spa.png'),
    features: [
      'Professional massage therapy',
      'Steam room facilities',
      'Personalized treatments',
      'Relaxation therapies',
      'Skilled therapists',
      'Luxurious spa environment'
    ]
  },
  'pub': {
    title: 'Pub',
    description: 'CATERING TIMINGS:\n\nThe Kitchen will be open for service during the following hours on all Days:\n(i) From 07.00 AM to 10.30 AM for Breakfast\n(ii) From 12.00 Noon to 02.30 PM for Lunch\n(iii) From 05:00 PM to 10:00 PM for evening Tiffins, Snacks and Dinner',
    image: getAssetPath('/facilities/EachFacility/pub.png'),
    features: [
      'Breakfast: 7:00 AM - 10:30 AM',
      'Lunch: 12:00 PM - 2:30 PM',
      'Evening & Dinner: 5:00 PM - 10:00 PM',
      'Crafted beverage selection',
      'Live entertainment sessions',
      'Evening lounge atmosphere'
    ]
  },
  'home-theatre': {
    title: 'Home Theatre',
    description: 'Experience state-of-the-art home theatre with premium sound and visual systems for an immersive entertainment experience. Our theatre features cutting-edge technology, comfortable seating, and exceptional acoustics, making it perfect for film screenings, presentations, or enjoying your favorite movies and shows.',
    image: getAssetPath('/facilities/EachFacility/hometheatre.png'),
    charges: 'Rs. 1000 per 3 hours',
    features: [
      'Premium sound systems',
      'High-definition visual displays',
      'Comfortable theatre seating',
      'Immersive viewing experience',
      'Perfect for screenings',
      'Advanced AV technology'
    ]
  },
  'library': {
    title: 'Library',
    description: 'Our quiet, curated library features shelves filled with scripts, film literature, and creative non-fiction for avid readers. This peaceful space offers a perfect retreat for reading, research, or quiet contemplation, with comfortable seating and a carefully selected collection of books and resources.',
    image: getAssetPath('/facilities/EachFacility/library.png'),
    features: [
      'Curated book collection',
      'Film scripts and literature',
      'Creative non-fiction',
      'Quiet reading spaces',
      'Comfortable seating',
      'Research resources'
    ]
  },
  'ntr-lawn': {
    title: 'NTR Lawn',
    description: 'Our spacious outdoor lawn area is perfect for events, gatherings, and celebrations under the open sky. Named in honor of the legendary actor, this beautiful lawn provides a versatile space for outdoor events, cultural programs, and community gatherings in a natural, open-air setting.',
    image: getAssetPath('/facilities/EachFacility/ntrlawn.png'),
    features: [
      'Spacious outdoor area',
      'Perfect for large events',
      'Open-air celebrations',
      'Cultural program venue',
      'Natural setting',
      'Versatile event space'
    ]
  },
  'suite-room': {
    title: 'Suite Room',
    description: 'Our luxurious suite rooms feature premium amenities, perfect for extended stays and special guests. These comfort-first suites are designed for short stays, artist residencies, and guest directors, offering privacy, comfort, and service on demand in an elegant, well-appointed environment.',
    image: getAssetPath('/facilities/EachFacility/suiteroom.png'),
    features: [
      'Luxurious accommodations',
      'Premium amenities',
      'Comfort-first design',
      'Perfect for extended stays',
      'Privacy and comfort',
      'Service on demand'
    ]
  },
  'children-pickle-ball-court': {
    title: 'Children Pickle Ball Court',
    description: 'Our dedicated pickle ball court for children provides a safe and fun environment for young players. This specialized court is designed with children in mind, offering age-appropriate equipment and supervision, ensuring a safe, enjoyable experience while learning and playing this exciting sport.',
    image: getAssetPath('/facilities/EachFacility/childrenpickleballroom.png'),
    features: [
      'Dedicated children\'s court',
      'Safe playing environment',
      'Age-appropriate equipment',
      'Supervised activities',
      'Fun learning experience',
      'Professional coaching available'
    ]
  },
  'food-court': {
    title: 'Food Court',
    description: 'CATERING TIMINGS:\n\nThe Kitchen will be open for service during the following hours on all Days:\n(i) From 07.00 AM to 10.30 AM for Breakfast\n(ii) From 12.00 Noon to 02.30 PM for Lunch\n(iii) From 05:00 PM to 10:00 PM for evening Tiffins, Snacks and Dinner',
    // No dedicated EachFacility image, use common banquet visual
    image: getAssetPath('/facilities/EachFacility/baquetHall.png'),
    features: [
      'Breakfast: 7:00 AM - 10:30 AM',
      'Lunch: 12:00 PM - 2:30 PM',
      'Evening & Dinner: 5:00 PM - 10:00 PM',
      'Multiple food stations',
      'Diverse cuisine options',
      'Quick service available'
    ]
  },
  'liquor-roof-garden': {
    title: 'Liquor Roof Garden',
    description: 'Our elegant rooftop garden space features bar service, offering stunning views and a sophisticated atmosphere. This unique venue combines the beauty of outdoor gardens with premium bar service, creating an exceptional setting for evening gatherings, celebrations, or simply enjoying a drink with a view.',
    // No dedicated EachFacility image, use common banquet visual
    image: getAssetPath('/facilities/EachFacility/baquetHall.png'),
    features: [
      'Rooftop garden setting',
      'Premium bar service',
      'Stunning views',
      'Sophisticated atmosphere',
      'Evening venue',
      'Outdoor elegance'
    ]
  },
  'ac-double-room': {
    title: 'AC Double Room',
    description: 'Our comfortable air-conditioned double rooms feature modern amenities for a relaxing stay. These well-appointed rooms provide a perfect retreat for guests, offering comfort, convenience, and all the essential amenities needed for a pleasant and restful experience.',
    // No dedicated EachFacility image, use common banquet visual
    image: getAssetPath('/facilities/EachFacility/baquetHall.png'),
    features: [
      'Air-conditioned comfort',
      'Modern amenities',
      'Double occupancy',
      'Comfortable accommodations',
      'Essential facilities',
      'Relaxing environment'
    ]
  },
  'party-room': {
    title: 'Party Room',
    description: 'Our versatile party room is designed for celebrations, gatherings, and special occasions with all necessary facilities. Whether you\'re hosting a birthday party, anniversary celebration, or any special event, this space provides the perfect setting with flexible arrangements and comprehensive amenities.',
    // No dedicated EachFacility image, use common banquet visual
    image: getAssetPath('/facilities/EachFacility/baquetHall.png'),
    features: [
      'Versatile event space',
      'Perfect for celebrations',
      'Flexible arrangements',
      'Comprehensive amenities',
      'Special occasion venue',
      'Event coordination available'
    ]
  },
  'pdr-room': {
    title: 'PDR Room',
    description: 'Our Private Dining Room (PDR) offers an intimate setting for exclusive dining experiences and meetings. This elegant, private space provides the perfect environment for business dinners, family gatherings, or special occasions where privacy and personalized service are paramount.',
    // No dedicated EachFacility image, use common banquet visual
    image: getAssetPath('/facilities/EachFacility/baquetHall.png'),
    features: [
      'Private dining experience',
      'Intimate setting',
      'Exclusive venue',
      'Personalized service',
      'Perfect for business dinners',
      'Special occasion venue'
    ]
  },
  'projector-room': {
    title: 'Projector Room',
    description: 'Our fully equipped projector room features advanced presentation technology, perfect for meetings, screenings, and professional presentations. This modern space is designed with state-of-the-art audio-visual equipment, comfortable seating, and optimal lighting conditions to ensure your presentations are impactful and engaging.',
    image: getAssetPath('/facilities/EachFacility/projectorroom.png'),
    features: [
      'Advanced projection systems',
      'Professional AV equipment',
      'Comfortable seating',
      'Optimal lighting conditions',
      'Perfect for presentations',
      'Meeting and screening space'
    ]
  },
  'view-point': {
    title: 'View Point',
    description: 'Our scenic viewpoint offers breathtaking panoramic views, perfect for relaxation, photography, and enjoying the natural beauty of the surroundings. This elevated space provides a peaceful retreat where you can unwind, take in the stunning vistas, and capture memorable moments.',
    image: getAssetPath('/facilities/EachFacility/viewpoint1.png'),
    images: [
      getAssetPath('/facilities/EachFacility/viewpoint1.png'),
      getAssetPath('/facilities/EachFacility/viewpoint2.png')
    ],
    charges: 'Rs. 1000 per 3 hours',
    features: [
      'Panoramic views',
      'Perfect for photography',
      'Peaceful retreat',
      'Natural beauty',
      'Relaxation space',
      'Scenic surroundings'
    ]
  },
  'cards-room': {
    title: 'Cards Room',
    description: 'PLAYING CARDS:\n\n1. Card Section shall remain open on all days from 11.00 AM. to 10.00 PM.\n\n2. Rummy & Pool Game open only to Members of the VFNCC. Dependent Members and Guests will not be permitted to play the Cards. The right of admission of the Center rests with the Management Committee in the larger interest of VFNCC.\n\n3. These Card games are subject to the rules approved by the Management Committee from time to time.',
    image: getAssetPath('/facilities/EachFacility/cardsroom.png'),
    features: [
      'Open daily from 11:00 AM to 10:00 PM',
      'Exclusive to VFNCC Members',
      'Rummy & Pool games available',
      'Subject to Management Committee rules',
      'Comfortable playing environment',
      'Well-maintained facility'
    ]
  },
  'office': {
    title: 'Office',
    description: 'OFFICE HOURS:\n\nThe Office of the "Vizag Filmnagar Cultural Center", Visakhapatnam will be open during the following hours: MONDAY to SUNDAY. 10.00 AM to 06.00 PM',
    image: getAssetPath('/facilities/EachFacility/office.png'),
    features: [
      'Open Monday to Sunday',
      'Office Hours: 10:00 AM - 6:00 PM',
      'Administrative services',
      'Professional workspace',
      'Modern office amenities',
      'Business operations support'
    ]
  },
  'club-entrance': {
    title: 'Club Entrance',
    description: 'Our grand club entrance welcomes members and guests with elegant design and warm hospitality. This impressive entryway sets the tone for the premium experience that awaits, featuring beautiful architecture, welcoming ambiance, and a sense of exclusivity that reflects the club\'s prestigious nature.',
    image: getAssetPath('/facilities/EachFacility/clubentrance.png'),
    features: [
      'Elegant design',
      'Grand entrance',
      'Welcoming ambiance',
      'Beautiful architecture',
      'Premium experience',
      'Prestigious atmosphere'
    ]
  },
  'swimming-pool': {
    title: 'Swimming Pool',
    description: 'SWIMMINGPOOL:\n\nTIMINGS: will be open during the following hours: MONDAY to SUNDAY. 08.00 AM to 05.00 PM',
    image: getAssetPath('/facilities/EachFacility/swimmingpool.png'),
    features: [
      'Open Monday to Sunday',
      'Timings: 8:00 AM - 5:00 PM',
      'Dedicated swimming lanes',
      'Kids\' area',
      'Lifeguard supervision',
      'Deck seating'
    ]
  },
  'guest-room': {
    title: 'Guest Room',
    description: 'Feature - Details\n\nRoom Type - Deluxe\nCheck-in Time - 12:00 PM (Noon)\nCheck-out Time - 11:00 AM\nCharges (Member) - ₹ 1680/- (including tax)\nCharges (Guest) - ₹ 2240/- (including tax)',
    image: getAssetPath('/facilities/EachFacility/guestroom.png'),
    features: [
      'Room Type: Deluxe',
      'Check-in: 12:00 PM (Noon)',
      'Check-out: 11:00 AM',
      'Member Charges: ₹ 1680/- (including tax)',
      'Guest Charges: ₹ 2240/- (including tax)',
      'Modern amenities and facilities'
    ]
  }
}

const FacilityDetail = () => {
  const { facilityId } = useParams()
  const facility = facilitiesData[facilityId]
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!facility) {
    return (
      <main className="space-y-0">
        <PageHeading title="Facility Not Found" />
        <div className="container section-padding text-center">
          <p className="text-gray-700 mb-6">The facility you're looking for doesn't exist.</p>
          <Link to="/facilities" className="btn-secondary inline-flex">
            Back to Facilities
          </Link>
        </div>
      </main>
    )
  }

  const facilityEntries = Object.entries(facilitiesData)

  return (
    <main className="space-y-0">
      <PageHeading title={facility.title} />
      <div className="container section-padding space-y-8">
      <div>
        <Link 
          to="/facilities" 
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Facilities
        </Link>
      </div>

      <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          {facility.images && facility.images.length > 1 ? (
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              {facility.images.map((img, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center min-h-[420px]">
                  <img 
                    src={img} 
                    alt={`${facility.title} - View ${index + 1}`}
                    className="max-h-[420px] w-full object-contain"
                    onError={(e) => {
                      e.target.src = getAssetPath('/facilities/EachFacility/baquetHall.png')
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center min-h-[420px]">
              <img 
                src={facility.image} 
                alt={facility.title}
                className="max-h-[420px] w-full max-w-full object-contain"
                onError={(e) => {
                  e.target.src = getAssetPath('/facilities/EachFacility/baquetHall.png')
                }}
              />
            </div>
          )}

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold font-display" style={{ color: '#720000' }}>
              {facility.title}
            </h1>
            {facility.charges && (
              <div className="inline-block px-4 py-2 rounded-lg bg-yellow-50 border-2" style={{ borderColor: '#f4b400' }}>
                <p className="text-sm font-semibold" style={{ color: '#720000' }}>
                  Charges: {facility.charges}
                </p>
              </div>
            )}
            <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{facility.description}</div>
            {facility.title !== 'Cards Room' && 
             facility.title !== 'Family Restaurant' && 
             facility.title !== 'Food Court' && 
             facility.title !== 'Cafe' && 
             facility.title !== 'Patio' && 
             facility.title !== 'Pub' &&
             facility.title !== 'Office' &&
             facility.title !== 'Swimming Pool' &&
             facility.title !== 'Guest Room' && (
              <p className="text-gray-700">
                Every venue is thoughtfully serviced with attentive staff, contemporary interiors, and technology support
                to make your event flow effortlessly. Host celebrations, screenings, or gatherings with on-demand service
                and seamless coordination.
              </p>
            )}
          </div>

          {facility.features && facility.features.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4" style={{ color: '#720000' }}>
                Key Features
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {facility.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" style={{ color: '#f4b400' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-4 pt-2 flex-wrap">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-primary"
            >
              Book Now
            </button>
            <Link to="/facilities" className="btn-secondary">
              View All Facilities
            </Link>
          </div>
        </div>

        <aside className="space-y-3">
          {facilityEntries.map(([key, item]) => (
            <Link
              key={key}
              to={`/facilities/${key}`}
              className={`flex items-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold transition ${
                key === facilityId
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

      <BookNowModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        facilityName={facility.title}
      />
      </div>
    </main>
  )
}

export default FacilityDetail

