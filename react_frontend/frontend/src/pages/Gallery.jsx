import { useState, useEffect, useCallback } from 'react'
import GalleryGrid from '../components/GalleryGrid'
import { api } from '../utils/api'
import PageHeading from '../components/PageHeading'
import { getAssetPath } from '../utils/assets'

// Placeholder images as fallback - using gallery images
const getPlaceholderImages = () => [
    {
      src: getAssetPath('/facilities/EachFacility/gallary_images/diningHall.jpeg'),
      alt: 'Dining Hall',
      caption: 'Dining Hall',
      type: 'image',
    },
    {
      src: getAssetPath('/facilities/EachFacility/gallary_images/garden.jpeg'),
      alt: 'Garden',
      caption: 'Garden',
      type: 'image',
    },
    {
      src: getAssetPath('/facilities/EachFacility/gallary_images/kids.jpeg'),
      alt: 'Kids Area',
      caption: 'Kids Area',
      type: 'image',
    },
    {
      src: getAssetPath('/facilities/EachFacility/gallary_images/lawns.jpeg'),
      alt: 'Lawns',
      caption: 'Lawns',
      type: 'image',
    },
    {
      src: getAssetPath('/facilities/EachFacility/gallary_images/openAirTheatre.jpeg'),
      alt: 'Open Air Theatre',
      caption: 'Open Air Theatre',
      type: 'image',
    },
    {
      src: getAssetPath('/facilities/EachFacility/gallary_images/parkingPlace.jpeg'),
      alt: 'Parking Place',
      caption: 'Parking Place',
      type: 'image',
    },
    {
      src: getAssetPath('/facilities/EachFacility/gallary_images/rooms.jpeg'),
      alt: 'Rooms',
      caption: 'Rooms',
      type: 'image',
    },
    {
      src: getAssetPath('/facilities/EachFacility/gallary_images/swimmingPool.jpeg'),
      alt: 'Swimming Pool',
      caption: 'Swimming Pool',
      type: 'image',
    },
    {
      src: getAssetPath('/facilities/EachFacility/gallary_images/viewPoint.jpeg'),
      alt: 'View Point',
      caption: 'View Point',
      type: 'image',
    },
    {
      src: getAssetPath('/facilities/EachFacility/gallary_images/WhatsApp Image 2026-03-30 at 4.54.37 PM.jpeg'),
      alt: 'Gallery Image',
      caption: 'Gallery Image',
      type: 'image',
    },
  ]

const Gallery = () => {
  const [media, setMedia] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchMedia = useCallback(async () => {
    try {
      setLoading(true)
      setError('')
      const data = await api.getPublicMedia()
      if (data.error) {
        setError(data.error)
        // Fallback to placeholder images if API fails
        setMedia(getPlaceholderImages())
      } else {
        setMedia(data.length > 0 ? data : getPlaceholderImages())
      }
    } catch (err) {
      console.error('Failed to fetch media:', err)
      setError('Failed to load gallery')
      // Fallback to placeholder images
      setMedia(getPlaceholderImages())
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchMedia()
  }, [fetchMedia])

  return (
    <main className="space-y-0">
      <PageHeading title="Gallery" />
      <div className="container section-padding space-y-10">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 font-display">
            Moments from the centre
          </h1>
          <p className="text-gray-700 leading-relaxed">
            A peek into our celebrations, curated dinners, fitness sessions, and serene corners around
            the property.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading gallery...</p>
          </div>
        ) : error && media.length === 0 ? (
          <div className="text-center py-12">
            <p style={{ color: '#d32f2f' }}>{error}</p>
          </div>
        ) : (
          <GalleryGrid media={media} />
        )}
      </div>
    </main>
  )
}

export default Gallery

