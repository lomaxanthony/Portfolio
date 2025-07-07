function TimelineItem({ year, title, duration, details }) {
  return (
    <div className="relative flex items-start">
      {/* Timeline dot */}
      <div className="absolute left-8 w-4 h-4 bg-blue-400 rounded-full border-4 border-white transform -translate-x-1/2 z-5"></div>
      
      {/* Content */}
      <div className="ml-20 bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-md border border-blue-300 w-full">
        <div className="mb-4">
          <h4 className="text-sm font-medium text-green-300 mb-2">
            {year}
          </h4>
          <h3 className="text-xl font-semibold text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-300 font-medium">
            {duration}
          </p>
        </div>
        <div>
          <p className="text-gray-200 leading-relaxed">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;