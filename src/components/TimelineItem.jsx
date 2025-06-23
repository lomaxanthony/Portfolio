//   Timeline Props =  year, title, duration, details

function TimelineItem ({year, title, duration, details}) {
    return (
        <div className="relative flex items-start">
            {/* Timeline dot */}
            <div className="absolute left-8 w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 transform -translate-x-1/2 z-10"></div>
            
            {/* Content */}
            <div className="ml-20 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 w-full">
                <div className="mb-4">
                    <h4 className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                        {year}
                    </h4>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {duration}
                    </p>
                </div>
                <div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {details}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TimelineItem;