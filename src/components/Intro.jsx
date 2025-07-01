import { useState } from "react";
import { Link } from "react-router-dom";

function Intro() {
  const [openBlurb, setOpenBlurb] = useState(false);

  const toggleBlurb = () => {
    setOpenBlurb(!openBlurb);
  };

  const renderBlurb = () => {
    if (openBlurb) {
      return (
        <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-blue-500 transition-all duration-300 ease-in-out">
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            I've always had the urge to tweak things and make them run smoother.
            If something is almost right, I want to figure out what would
            actually make it right. Whether it's a kitchen workflow or a bit of
            clunky software, I naturally start breaking it down, looking for
            friction points, and thinking about how to fix them.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
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
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
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
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <section className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Hey, I'm Tony.
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          Thanks for checking out my site!
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
          This is basically a collection of stuff I've been working on —
          projects, random experiments, whatever's caught my interest lately.
          Feel free to poke around!
        </p>

        {/* About Me Button */}
        <button
          onClick={toggleBlurb}
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-8"
        >
          {openBlurb ? "Hide" : "About Me"}
        </button>

        {renderBlurb()}

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <Link
            to="/Portfolio/projects"
            className="px-8 py-4 bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 text-white font-medium rounded-full transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 shadow-lg"
          >
            📂 View Projects
          </Link>
          <Link
            to="/Portfolio/timeline"
            className="px-8 py-4 bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 text-white font-medium rounded-3xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 shadow-lg"
          >
            ⏱️ See Timeline
          </Link>
          <Link
            to="/Portfolio/notes"
            className="px-8 py-4 bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 text-white font-medium rounded-2xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 shadow-lg"
          >
            📝 Dev Notes
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Intro;
