import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { getAssetPath } from '../utils/assets'

const Home = () => {
  const facilityHighlights = [
    {
      title: 'Banquet Halls',
      description: 'Banquet hall is a special purpose room, or a building, used for hosting large social and business events.',
      image: getAssetPath('/facilities/EachFacility/baquetHall.png'),
      slug: 'banquet-halls',
    },
    {
      title: 'Conference Halls',
      description: 'Great conference room, along with the lobby and private executive offices, frequently create a company\'s best and longest-lasting impression.',
      image: getAssetPath('/facilities/EachFacility/conferenceHall.png'),
      slug: 'conference-halls',
    },
    {
      title: 'Family Restaurant',
      description: 'Family style dining is a popular trend these days. It\'s a way to eat where everyone gets their own plate, staff brings the food to each person\'s.',
      image: getAssetPath('/facilities/EachFacility/facilityrestaurent.png'),
      slug: 'family-restaurant',
    },
    {
      title: 'Cafe',
      description: 'Sip, savor, and indulge in every moment at our cozy café, where each cup tells a story and every bite brings delight.',
      image: getAssetPath('/facilities/EachFacility/cafe.png'),
      slug: 'cafe',
    },
    {
      title: 'SPA',
      description: 'Therapy suites with steam and massage treatments for deep relaxation and rejuvenation.',
      image: getAssetPath('/facilities/EachFacility/spa.png'),
      slug: 'spa',
    },
    {
      title: 'Home Theatre',
      description: 'State-of-the-art home theatre with premium sound and visual systems for an immersive entertainment experience.',
      image: getAssetPath('/facilities/EachFacility/hometheatre.png'),
      slug: 'home-theatre',
    },
  ]

  const sportHighlights = [
    { title: 'Shuttle Badminton', description: 'Championship badminton and tennis courts with coaching.', image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=800&q=80', slug: 'shuttle-badminton' },
    { title: 'Swimming Pool', description: 'Temperature-controlled pool with poolside seating and showers.', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80', slug: 'swimming-pool' },
    { title: 'GYM', description: 'Modern gym, billiards, and a vibrant children\'s play arena.', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80', slug: 'gym' },
    { title: 'Billiards', description: 'Tournament-grade tables, coaching assistance, and a relaxed lounge vibe.', image: getAssetPath('/images/billiards.png'), slug: 'billiards' },
    { title: 'Tennis Court', description: 'Floodlit, cushioned courts with booking slots and pro gear on request.', image: getAssetPath('/images/tenniscourt.png'), slug: 'tennis-court' },
    { title: 'Children\'s Play Area', description: 'Safe, vibrant play spaces with supervision for little members.', image: getAssetPath('/images/childrensplayarea.png'), slug: 'childrens-play-area' },
  ]

  return (
    <main className="space-y-0">
      <Hero
        title="An elite address for cinema creatives and their families"
        subtitle="A co-operative cultural hub in Film Nagar offering refined hospitality, curated events, and premium sports under one roof."
        backgroundUrls={[
          'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80', // Cultural hall/theatre
          'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=80', // Elegant banquet hall
          'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&w=1600&q=80', // Premium dining space
          'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80', // Cultural event space
          'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80', // Elegant event venue
        ]}
        ctaPrimary={<Link to="/facilities" className="btn-primary">Explore Facilities</Link>}
        ctaSecondary={<Link to="/contact" className="btn-secondary bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 font-semibold border-2 border-white px-5 py-3 rounded transition">Plan a Visit</Link>}
      />

      <section className="py-10 space-y-6">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-display mb-4 uppercase">
              About Us
            </h2>
            <div className="flex justify-center">
              <img 
                src={getAssetPath("/images/headingdesign.png")}
                alt="Decorative divider" 
                className="h-16 w-auto"
              />
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
              alt="Film Nagar Cultural Centre"
              className="w-full h-96 object-cover"
              loading="lazy"
            />
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 font-display mb-4">
              A warm, members-first cultural centre in Film Nagar
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Built by and for the Telugu film fraternity, the centre blends hospitality, recreation,
              and arts programming. From intimate screenings to festive gatherings, we curate spaces
              that feel personal, premium, and rooted in local culture.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are neighbours to the Film Chamber, Artists Association, and Producer Council,
              enabling seamless collaboration across the industry. Adjacent to us is the serene Film
              Nagar Diva Sannidhanam temple complex, a treasured landmark for many of our members.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Every corner of the centre is designed to give members privacy, comfort, and service on
              demand—whether you are hosting guests, rehearsing ideas, or simply unwinding with
              family.
            </p>
            <Link to="/about" className="btn-secondary inline-flex">
              Read More
            </Link>
          </div>
          </div>
        </div>
      </section>

      <section className="py-10 space-y-6">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-display mb-4 uppercase">
              Facilities
            </h2>
            <div className="flex justify-center">
              <img 
                src={getAssetPath("/images/headingdesign.png")}
                alt="Decorative divider" 
                className="h-16 w-auto"
              />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {facilityHighlights.map((item) => (
              <Link key={item.title} to={`/facilities/${item.slug}`} className="glass rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#720000] transition-colors">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-6">
            <Link to="/facilities" className="btn-secondary inline-flex">
              Read More
            </Link>
          </div>
        </div>
      </section>

      <section 
        className="py-10 space-y-6 relative"
        style={{
          backgroundImage: `url(${getAssetPath('/images/sportssectionbg.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-display mb-4 uppercase">
              Sports
            </h2>
            <div className="flex justify-center">
              <img 
                src={getAssetPath("/images/headingdesign.png")}
                alt="Decorative divider" 
                className="h-16 w-auto"
              />
            </div>
          </div>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 font-display mb-3">
              Sports and fitness for every generation
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Train, play, and unwind with coaching support, pro-grade gear, and family-friendly
              spaces designed for active lifestyles.
            </p>
            <div className="mt-6">
              <Link to="/sports" className="btn-secondary inline-flex">
                View Sports
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sportHighlights.map((item) => (
              <Link key={item.title} to={`/sports/${item.slug}`} className="glass rounded-2xl overflow-hidden bg-white group hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#720000] transition-colors">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Book Now section */}
      <section className="py-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-display mb-3 uppercase">
              Book Now
            </h2>
            <div className="flex justify-center">
              <img 
                src={getAssetPath("/images/headingdesign.png")}
                alt="Decorative divider" 
                className="h-12 w-auto"
              />
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 items-stretch">
            <div className="space-y-6 max-w-md mx-auto lg:mx-0">
              <form className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f4b400]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f4b400]"
              />
              <input
                type="tel"
                placeholder="Mobile"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f4b400]"
              />
              <select
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f4b400]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select facility
                </option>
              <option>Banquet Halls</option>
              <option>Conference Halls</option>
              <option>Family Restaurant</option>
              <option>Food Court</option>
              <option>Cafe</option>
              <option>Patio</option>
              <option>SPA</option>
              <option>Pub</option>
              <option>Home Theatre</option>
              <option>Library</option>
              <option>NTR Lawn</option>
              <option>Liquor Roof Garden</option>
              <option>AC Double Room</option>
              <option>Party Room</option>
              <option>Suite Room</option>
              <option>Children Pickle Ball Court</option>
              </select>
              <input
                type="date"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f4b400]"
              />
              <input
                type="time"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f4b400]"
              />
                <div className="pt-2">
                  <button
                    type="button"
                    className="px-6 py-2 rounded-lg text-sm font-semibold text-white"
                    style={{ backgroundColor: '#720000' }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-full flex">
              <img
                src={getAssetPath("/images/booknow.png")}
                alt="Book now lounge"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home

