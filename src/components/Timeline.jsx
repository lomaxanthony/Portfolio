import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";

function Timeline() {
  return (
    <div className="min-h-screen py-6 md:py-12 px-4 md:px-0">
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-8 shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center">
          My Journey
        </h2>

        <div className="relative">
          {/* line for timeline */}
          <div className="absolute left-[0.4rem] md:left-[.33rem] top-[6px] md:top-[8px] w-0.5 bg-white/30" style={{height: 'calc(100% - 12px)'}}></div>

          <div className="space-y-6 md:space-y-8">
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