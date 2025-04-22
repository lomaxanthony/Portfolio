function PortfolioItem({title, imgUrl, stack, github, link}) {
    return (
        <div className="projectImage">
          <img
            src={imgUrl}
            alt="project"
          />
          <div>
            <h3>{title}</h3>
            <p>
              {stack.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </p>
            <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={link} target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>        
        </div>
    );
}

export default PortfolioItem;