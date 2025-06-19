import PortfolioItem from "./PortfolioItem";
import projects from "../data/projects"

function Portfolio() {
    return (
        <div className="portfolioContainer">
          <div className="projectGrid">
            {projects.map(project => (
              <div className="projectItem">
                <PortfolioItem 
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

export default Portfolio;