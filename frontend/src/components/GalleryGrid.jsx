const GalleryGrid = ({ media, images }) => {
  const items = media || images || []
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, idx) => (
        <div
          key={item.id || idx}
          className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white group"
        >
          {item.type === 'video' ? (
            <div className="relative">
              <video
                src={item.src}
                className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                controls
                preload="metadata"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <p className="text-white text-xs font-medium">{item.caption}</p>
              </div>
            </div>
          ) : (
            <>
              <img
                src={item.src}
                alt={item.alt}
                className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-sm font-medium pointer-events-none">
                {item.caption}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default GalleryGrid

