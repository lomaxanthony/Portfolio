import React, { useState } from "react";

function Header() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    return (
        <header className="header-bar">
            <div className="header-left">
                <a href="/Portfolio/" className="logo">
                    <img
                        src="/Portfolio/favicon/android-chrome-192x192.png"
                        width={32}
                        height={32}
                        alt="terminalLogo"
                        className="terminalLogo"
                    />
                </a>
                <h1 className="siteName">Tony Lomax</h1>
            </div>
            <div className="header-right">
                <nav className="navButtons">
                    <h3>About</h3>
                    <h3>Projects</h3>
                    <h3>Timeline</h3>
                    <h3>Blog</h3>
                    <h3>Contact</h3>
                </nav>
                <button onClick={toggleDarkMode} className="darkModeToggle">
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </header>
    );
}

export default Header;