import timeline from '../data/timeline'
import TimelineItem from './TimelineItem'

//   Timeline Props =  year, title, duration, details

function Timeline() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          My Journey
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/30"></div>
          
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
    </div>
  );
}

export default Timeline;