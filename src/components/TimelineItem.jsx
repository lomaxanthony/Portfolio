// filepath: c:\Users\lomax\Website\Static\Portfolio\src\components\TimelineItem.jsx
function TimelineItem({ year, title, duration, details }) {
  return (
    <div className="relative">
      {/* Timeline dot  */}
      <div className="absolute left-[0.46rem] md:left-[.4rem] w-3 h-3 md:w-4 md:h-4 bg-blue-400 rounded-full border-2 md:border-4 border-white transform -translate-x-1/2 z-10 top-[-0.39rem]"></div>
      
      {/* Content container */}
      <div className="ml-8 md:ml-12 mr-2 md:mr-2 bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg shadow-md border border-white/20">
        <div className="mb-3 md:mb-4">
          <h4 className="text-xs md:text-sm font-medium text-blue-300 mb-1 md:mb-2">
            {year}
          </h4>
          <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">
            {title}
          </h3>
          <p className="text-xs md:text-sm text-gray-300 font-medium">
            {duration}
          </p>
        </div>
        <div>
          <p className="text-base text-gray-200 leading-relaxed">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;