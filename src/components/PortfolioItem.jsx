function PortfolioItem({title, imgUrl, stack, github, link}) {
    return (
        <div className="projectImage">
          <img
            src={imgUrl}
          />
          <div>
            <h2>{title}</h2>
            <hr className="projectLineBreak"></hr>
            <p className="stackType">
              <h4>Stack:</h4>
              {stack.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </p>
            <hr></hr>
            <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={link} target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>        
        </div>
    );
}

export default PortfolioItem;