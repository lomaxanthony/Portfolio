import React, { useState } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import TabSwitcher from './components/TabSwitcher'

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };


  return (
    <>
      <div>
        <Header />
        <button onClick={toggleDarkMode} className="darkModeToggle">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <main className='mainContent'>
          <Intro />
          <TabSwitcher />
        </main>
      </div>
    </>
  )
}

export default App;
