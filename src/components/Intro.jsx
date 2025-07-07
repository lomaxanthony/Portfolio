import { useState } from "react";
import { Link } from "react-router-dom";
import AboutMe from "./AboutMe";

function Intro() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <section className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Hey, I'm Tony.
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
          Thanks for checking out my site!
        </h2>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
          This is a collection of stuff I've been working on: projects, random
          experiments, whatever's caught my interest lately. Feel free to poke
          around!
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <Link
            to="/Portfolio/projects"
            className="px-8 py-4 bg-transparent hover:bg-white/10 text-blue-100 hover:text-white-900 border border-blue-300 font-medium rounded-md transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2 shadow-lg"
          >
            📂 View Projects
          </Link>
          <Link
            to="/Portfolio/timeline"
            className="px-8 py-4 bg-transparent hover:bg-white/10 text-blue-100 hover:text-white-900 border border-blue-300 font-medium rounded-md transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2 shadow-lg"
          >
            ⏱️ See Timeline
          </Link>
          <Link
            to="/Portfolio/notes"
            className="px-8 py-4 bg-transparent hover:bg-white/10 text-blue-100 hover:text-white-900 border border-blue-300 font-medium rounded-md transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2 shadow-lg"
          >
            📝 Dev Notes
          </Link>
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={toggleModal}
            className="px-6 py-2 bg-transparent hover:bg-white/10 text-blue-100 hover:text-white-900 border border-green-300 font-medium rounded-md transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2 shadow-lg"
          >
            About Me
          </button>
        </div>
      </section>

      <AboutMe
        showModal={showModal}
        toggleModal={toggleModal}
        closeModal={closeModal}
      />
    </div>
  );
}

export default Intro;