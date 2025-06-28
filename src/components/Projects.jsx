import ProjectItem from "./ProjectItem";
import projectData from "../data/projectData"

function Projects() {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectData.map((project, index) => (
                    <div key={index} className="transform transition-transform duration-200 hover:scale-105">
                        <ProjectItem 
                            imgUrl={project.imgUrl}
                            title={project.title}
                            stack={project.stack}
                            github={project.github}
                            link={project.link}
                        />
                    </div> 
                ))}
            </div>  
        </div>
    )
}

export default Projects;