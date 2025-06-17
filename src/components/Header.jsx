import React, { useState } from "react";

function Header() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    return (
        <header className="title">
            <div>
                <a 
                  href="/"
                  className="logo"
                >
                    <img
                      src="/favicon/android-chrome-192x192.png"
                      width={40}
                      height={40}
                      alt="terminalLogo"
                      className="terminalLogo"
                    />
                </a>
                <h1>Tony Lomax</h1>
            </div>
            <button onClick={toggleDarkMode} className="darkModeToggle">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </header>
    );
}

export default Header;