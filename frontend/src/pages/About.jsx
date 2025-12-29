import PageHeading from '../components/PageHeading'
import { getAssetPath } from '../utils/assets'

const committeeMembers = [
  {
    name: 'Sri R.V. CHANDRA MOULI PRASAD',
    memberId: '(FM-4)',
    designation: 'President'
  },
  {
    name: 'Sri CH SRINIVASA RAJU',
    memberId: '(LM-4)',
    designation: 'Secretary'
  },
  {
    name: 'Sri K. BALAJI SIVA PRASAD',
    memberId: '(LM-145)',
    designation: 'Treasurer'
  },
  {
    name: 'Sri N.R.K REDDY',
    memberId: '(FML-1)',
    designation: 'Joint Secretary'
  },
  {
    name: 'Sri JASTI SRIKANTH',
    memberId: '(LM-25)',
    designation: 'Member'
  },
  {
    name: 'Sri E ASHOK KUMAR',
    memberId: '(LM-22)',
    designation: 'Member'
  },
  {
    name: 'Sri K. GURUMURTHY',
    memberId: '(FML-39)',
    designation: 'Member'
  },
  {
    name: 'Sri K. VENKATESWARA RAO',
    memberId: '(FML-7)',
    designation: 'Member'
  },
  {
    name: 'Sri B.N.V. MANIKANTA',
    memberId: '(LM-247)',
    designation: 'Member'
  },
  {
    name: 'Sri A.L.N. RAJU',
    memberId: '(LM-243)',
    designation: 'Member'
  },
  {
    name: 'Sri A V SRIHARI RAJU',
    memberId: '(PM-402)',
    designation: 'Member'
  },
  {
    name: 'Sri N. BHASKAR',
    memberId: '(LM-19)',
    designation: 'Member'
  },
  {
    name: 'Sri G.S.S.N Raju',
    memberId: '(LM-340)',
    designation: 'Member'
  },
  {
    name: 'Sri L SATYANAND',
    memberId: '(FM-2)',
    designation: 'Member'
  }
]

const About = () => {
  return (
    <main className="space-y-0">
      <PageHeading title="About Us" />
      <div className="container section-padding space-y-12">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 font-display">
              A co-operative haven for Telugu cinema professionals
            </h1>
          <p className="text-gray-700 leading-relaxed">
            Nestled in Film Nagar, Hyderabad, the centre was created by members of the Telugu film
            community to serve as a welcoming hub for recreation, culture, and conversations that
            bring storytellers together. We host social gatherings, film-friendly events, and
            television-related activities that keep the creative spirit thriving.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are neighbours to the Film Chamber, Artists Association, and Producer Council,
            enabling seamless collaboration across the industry. Adjacent to us is the serene Film
            Nagar Diva Sannidhanam temple complex, a treasured landmark for many of our members.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Every corner of the centre is designed to give members privacy, comfort, and service on
            demand—whether you are hosting guests, rehearsing ideas, or simply unwinding with
            family.
          </p>
        </div>
        <div className="glass rounded-3xl p-8 grid gap-6">
          <div className="rounded-2xl overflow-hidden border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80"
              alt="Club lounge ambiance"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
              <p className="font-semibold text-xs mb-1" style={{ color: '#720000' }}>Location</p>
              <p>Film Nagar, Hyderabad, Telangana</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
              <p className="font-semibold text-xs mb-1" style={{ color: '#720000' }}>Purpose</p>
              <p>Recreation, cultural, film and TV related activities for members.</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
              <p className="font-semibold text-xs mb-1" style={{ color: '#720000' }}>Associations</p>
              <p>Close to Film Chamber, Artists Association, Producer Council.</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
              <p className="font-semibold text-xs mb-1" style={{ color: '#720000' }}>Landmark</p>
              <p>Beside Film Nagar Diva Sannidhanam temple complex.</p>
            </div>
          </div>
        </div>
        </div>

        {/* Committee Section */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-display mb-4 uppercase">
              Committee Members
            </h2>
            <div className="flex justify-center">
              <img 
                src={getAssetPath("/images/headingdesign.png")} 
                alt="Decorative divider" 
                className="h-16 w-auto"
              />
            </div>
          </div>

          <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
            {committeeMembers.map((member, index) => (
              <div key={index} className="glass rounded-2xl overflow-hidden flex flex-col">
                <div className="aspect-square bg-gray-100 flex items-center justify-center p-4">
                  <img
                    src={getAssetPath(`/committe/Picture${index + 1}.png`)}
                    alt={member.name}
                    className="w-[85%] h-[85%] object-cover rounded-lg"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-400">Member ${index + 1}</div>`
                    }}
                  />
                </div>
                <div className="p-4 text-center space-y-1">
                  <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs text-gray-600">{member.memberId}</p>
                  <p className="text-xs font-medium" style={{ color: '#720000' }}>
                    {member.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default About

