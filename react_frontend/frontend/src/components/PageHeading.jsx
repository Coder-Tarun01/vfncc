const PageHeading = ({ title }) => {
  return (
    <div 
      className="flex items-center justify-center px-4 py-6 md:py-8"
      style={{
        minHeight: '200px',
        background: 'radial-gradient(circle at center, rgba(128,0,0,0.85) 0%, rgba(70,0,0,0.9) 45%, rgba(0,0,0,0.96) 100%)',
      }}
    >
      {/* Main heading text */}
      <h1 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide text-center">
        {title}
      </h1>
    </div>
  )
}

export default PageHeading

