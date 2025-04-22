import { useState } from "react";

function Intro() {

    const [openBlurb, setOpenBlurb] = useState(false);
    
    const toggleBlurb = () => {
      setOpenBlurb( !openBlurb);
    };

    const renderBlurb = () => {
      if (openBlurb) {
        return (
          <div  className="introBlurb">
            <p>
              I’m an endlessly curious tinkerer who’s always exploring new ideas, tools, and ways to make things better — whether that’s improving myself, the tech I work with, or the way things function.
            </p>
            <p>
              I have spent the last decade as a Manager at Woodstock's Pizza Parlor. During that time I found myself constantly looking for small ways to improve systems and workflows — whether it was reorganizing stations for better flow, tweaking techniques to improve consistency, or experimenting with better ways to train new team members. I like asking “why” and “what if” — and then testing the answers.
            </p>
            <p>
              I love digging into how things work, breaking them (sometimes on purpose), and building them back smarter.
            </p>
          </div>
        );
      }
      
      {/* Show nothig unless button is clicked */}
      return null;
    };

    {/* Render the introduction and give an option to click a button to render more about me */}
    return (
      <section>
        <h1 className="intro-heading">Hello, my name is Tony.</h1>
        <h2 className="intro-heading">Welcome to my site!</h2>
        <p className="intro-text">
            This site is a snapshot of what I’ve been up to — projects, experiments, and whatever’s currently got my attention. Thanks for stopping by!
        </p>
        <button onClick={toggleBlurb} className="blurb-toggle">
            {openBlurb ? "Hide" : "About Me"}
        </button>
        {renderBlurb()}
      </section>
    )
}

export default Intro;