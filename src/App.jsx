import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Notes from "./components/Notes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/Portfolio/" element={<Home />} />
            <Route path="/Portfolio/projects" element={<Projects />} />
            <Route path="/Portfolio/timeline" element={<Timeline />} />
            <Route path="/Portfolio/notes" element={<Notes />} />
            <Route path="/Portfolio/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
