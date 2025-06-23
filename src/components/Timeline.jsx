import timeline from '../data/timeline'
import TimelineItem from './TimelineItem'

//   Timeline Props =  year, title, duration, details

function Timeline () {
        return (
          <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              My Journey
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <TimelineItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                  />
                ))}
              </div>
            </div>
          </div>
        )
}

export default Timeline;