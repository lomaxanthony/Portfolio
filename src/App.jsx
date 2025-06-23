import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Blog from './components/Blog';

function App() {
    return (
        <div>
            <Header />
            <Intro />
            <section id="portfolio">
                <Portfolio />
            </section>
            <section id="timeline">
                <Timeline />
            </section>
            <section id="blog">
                <Blog />
            </section>
        </div>
    );
}

export default App;