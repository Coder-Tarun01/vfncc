import { useState, useEffect } from 'react'

const Hero = ({ title, subtitle, ctaPrimary, ctaSecondary, backgroundUrls = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Default images if none provided - matching cultural centre theme
  const defaultImages = [
    'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80', // Cultural hall/theatre
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=80', // Elegant banquet hall
    'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&w=1600&q=80', // Premium dining space
    'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80', // Cultural event space
  ]

  const images = backgroundUrls.length > 0 ? backgroundUrls : defaultImages

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white text-gray-900 shadow-2xl">
      {/* Background Images Slider */}
      <div className="absolute inset-0">
        {images.map((url, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative container py-24 sm:py-28 lg:py-32">
        <p className="text-yellow-300 uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold mb-4">
          Premium Members Club
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl font-display text-white">
          {title}
        </h1>
        <p className="mt-6 text-lg text-gray-100 max-w-2xl leading-relaxed">{subtitle}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          {ctaPrimary}
          {ctaSecondary}
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-yellow-400'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero

