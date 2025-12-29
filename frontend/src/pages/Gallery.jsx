import { useState, useEffect, useCallback } from 'react'
import GalleryGrid from '../components/GalleryGrid'
import { api } from '../utils/api'
import PageHeading from '../components/PageHeading'
import { getAssetPath } from '../utils/assets'

// Placeholder images as fallback - using facility images
const getPlaceholderImages = () => [
    {
      src: getAssetPath('/facilities/EachFacility/baquetHall.png'),
      alt: 'Banquet Hall',
      caption: 'Banquet Hall',
      type: 'image',
    },
    {
      src: getAssetPath('/facilities/EachFacility/conferenceHall.png'),
      alt: 'Conference Hall',
      caption: 'Conference Hall',
      type: 'image',
    },
    {
      src: getAssetPath('/facilities/EachFacility/facilityrestaurent.png'),
      alt: 'Family Restaurant',
      caption: 'Family Restaurant',
      type: 'image',
    },
    {
      src: getAssetPath('/facilities/EachFacility/cafe.png'),
      alt: 'Cafe',
      caption: 'Cafe',
      type: 'image',
    },
    {
      src: getAssetPath('/facilities/EachFacility/patio.png'),
      alt: 'Patio',
      caption: 'Patio',
      type: 'image',
    },
    {
      src: getAssetPath('/facilities/EachFacility/spa.png'),
      alt: 'SPA',
      caption: 'SPA',
      type: 'image',
    },
    {
      src: getAssetPath('/facilities/EachFacility/pub.png'),
      alt: 'Pub',
      caption: 'Pub',
      type: 'image',
    },
    {
      src: getAssetPath('/facilities/EachFacility/hometheatre.png'),
      alt: 'Home Theatre',
      caption: 'Home Theatre',
      type: 'image',
    },
    {
      src: getAssetPath('/facilities/EachFacility/library.png'),
      alt: 'Library',
      caption: 'Library',
      type: 'image',
    },
    {
      src: getAssetPath('/facilities/EachFacility/ntrlawn.png'),
      alt: 'NTR Lawn',
      caption: 'NTR Lawn',
      type: 'image',
    },
    {
      src: getAssetPath('/facilities/EachFacility/suiteroom.png'),
      alt: 'Suite Room',
      caption: 'Suite Room',
      type: 'image',
    },
    {
      src: getAssetPath('/facilities/EachFacility/childrenpickleballroom.png'),
      alt: 'Children Pickle Ball Court',
      caption: 'Children Pickle Ball Court',
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

