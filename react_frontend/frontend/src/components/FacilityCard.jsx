import { useState } from 'react'
import { Link } from 'react-router-dom'
import BookNowModal from './BookNowModal'

const FacilityCard = ({ image, title, description, slug }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="bg-white rounded-lg p-6 flex flex-col gap-4 hover:shadow-lg transition-all duration-300 border border-gray-200 text-center">
        {image && (
          <Link to={`/facilities/${slug}`} className="flex justify-center mb-2">
            <img 
              src={image} 
              alt={title}
              className="h-16 w-16 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </Link>
        )}
        <h3 className="text-lg font-bold text-gray-900 uppercase text-center" style={{ color: '#720000' }}>
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed flex-grow">
          {description}
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full px-6 py-2 rounded text-sm font-semibold transition-colors duration-200 text-center mx-auto"
          style={{ 
            backgroundColor: '#8B6F47', 
            color: 'white' 
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7A5F37'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8B6F47'}
        >
          Book Now
        </button>
      </div>
      <BookNowModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        facilityName={title}
      />
    </>
  )
}

export default FacilityCard

