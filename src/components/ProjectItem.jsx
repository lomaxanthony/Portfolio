function ProjectItem({title, imgUrl, stack, github, link}) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
            <img
                src={imgUrl}
                alt={title}
                className="w-full h-48 object-cover"
            />
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
                        className="flex-1 text-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                        GitHub
                    </a>
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
                    >
                        Live Demo
                    </a>
                </div>
            </div>        
        </div>
    );
}

export default ProjectItem;