import timeline from '../data/timeline'
import TimelineItem from './TimelineItem'

//   Timeline Props =  year, title, duration, details

function Timeline () {
        return (
          <div className="timelineContainer">
            <div className='timelineList'>
                {timeline.map(item => (
                  <TimelineItem
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                  />
                ))}
            </div>
          </div>
        )
}

export default Timeline;