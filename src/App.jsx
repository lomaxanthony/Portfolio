import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Notes from './components/Notes';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/Portfolio/" element={<Intro />} />
                    <Route path="/Portfolio/projects" element={<Projects />} />
                    <Route path="/Portfolio/timeline" element={<Timeline />} />
                    <Route path="/Portfolio/notes" element={<Notes />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;