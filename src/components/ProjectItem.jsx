function ProjectItem({ title, imgUrl, stack, github, link }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
      <img src={imgUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Stack:
          </h4>
          <div className="flex flex-wrap gap-2">
            {stack.map((item, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-600">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 bg-transparent hover:bg-gray-500/20 text-gray-300 hover:text-white border border-green-300 font-medium rounded-md transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 shadow-lg"
          >
            GitHub
          </a>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 bg-transparent hover:bg-white/10 text-blue-100 hover:text-white-900 border border-blue-300 font-medium rounded-md transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2 shadow-lg"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
