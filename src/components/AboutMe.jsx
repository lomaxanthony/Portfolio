function AboutMe({ showModal, toggleModal, closeModal }) {
  if (!showModal) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={closeModal}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              About Me
            </h3>
            <button
              onClick={toggleModal}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-3xl font-bold leading-none"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-4 text-left">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I've always had the urge to tweak things and make them run smoother.
              If something is almost right, I want to figure out what would
              actually make it right. Whether it's a kitchen workflow or a bit of
              clunky software, I naturally start breaking it down, looking for
              friction points, and thinking about how to fix them.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I've spent the last decade managing at Woodstock's Pizza Parlor in
              Corvallis, Oregon. It's not just about making pizza but building
              systems that hold up under pressure. I've spent years obsessively
              refining my process for making a pizza by aiming to make the best
              one I can, as fast as I can, every time. That mindset eventually
              grew into a broader focus on operational efficiency — improving
              training, streamlining prep, solving small problems before they turn
              into big ones. I'm probably the person who asks "why do we do it
              this way?" more than anyone wants to hear.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              That same curiosity and drive to improve is what pulled me into
              software development. Code is just another system and another set of
              moving parts to understand then refine. When I'm working on a
              project, I think the same way: what's slowing this down, how can I
              make it cleaner, and what would help someone else step in and
              understand it faster?
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Now I'm looking to bring that mindset to a team where I can keep
              learning, keep improving, and help build things that work better —
              for users, for coworkers, and for the people who come next.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;