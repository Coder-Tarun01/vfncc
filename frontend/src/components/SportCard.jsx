import { Link } from 'react-router-dom'

const SportCard = ({ image, title, description, slug }) => {
  return (
    <Link to={`/sports/${slug}`} className="block">
      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg group">
        <div className="flex items-center justify-center pt-6">
      <img
        src={image}
        alt={title}
            className="h-24 md:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
        </div>
        <div className="px-5 pb-5 pt-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
        </div>
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
          style={{ background: 'linear-gradient(to top, rgba(114, 0, 0, 0.4), rgba(114, 0, 0, 0.1), transparent)' }}
        />
      </div>
    </Link>
  )
}

export default SportCard

