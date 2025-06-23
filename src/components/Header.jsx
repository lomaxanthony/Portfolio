import React, { useState, useEffect } from "react";

function Header() {
    const [darkMode, setDarkMode] = useState(false);

    // Ensure clean initial state
    useEffect(() => {
        document.body.classList.remove('dark');
        document.body.style.backgroundColor = 'white';
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.body.classList.add('dark');
            document.body.style.backgroundColor = '#111827'; // gray-900
        } else {
            document.body.classList.remove('dark');
            document.body.style.backgroundColor = 'white';
        }
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 80; // Approximate header height
            const elementPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className="bg-white dark:bg-gray-700 shadow-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Left side - Logo and Name */}
                    <div className="flex items-center space-x-3">
                        <a href="/Portfolio/" className="flex items-center space-x-2">
                            <img
                                src="/Portfolio/favicon/android-chrome-192x192.png"
                                width={40}
                                height={40}
                                alt="terminalLogo"
                                className="rounded-lg"
                            />
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Tony Lomax
                            </h1>
                        </a>
                    </div>

                    <div className="flex items-center space-x-6">
                        <nav className="hidden md:flex items-center space-x-6">
                            <button 
                                onClick={() => scrollToSection('portfolio')}
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                                Portfolio
                            </button>
                            <button 
                                onClick={() => scrollToSection('timeline')}
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                                Timeline
                            </button>
                            <button 
                                onClick={() => scrollToSection('blog')}
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                                Blog
                            </button>
                        </nav>
                        
                        <button 
                            onClick={toggleDarkMode} 
                            className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-16 text-center"
                        >
                            {darkMode ? '☀️' : '🌙'}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;