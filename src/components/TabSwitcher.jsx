import React, { useRef, useState } from 'react';
import Portfolio from './Portfolio';
import Timeline from './Timeline';
import Blog from './Blog';

function TabSwitcher() {
    const [activeTab, setActiveTab] = useState(null);
    const contentRef = useRef(null);

    const renderComponent = () => {
        switch (activeTab) {
            case 'portfolio':
                return <Portfolio />;
            case 'timeline':
                return <Timeline />;
            case 'extra':
                return <Blog />;
            default:
                return null; 
        }
    };

    const handleTabClick = (tabName) => {
        setActiveTab((prevTab) => (prevTab === tabName ? null : tabName));
        if (contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: 'smooth' }); 
        } 
    };

    return (
        <div>
            {/* Tab Buttons */}
            <div className="tabButtonContainer">
                <button
                    className="portfolioButton"
                    onClick={() => handleTabClick('portfolio')}
                >
                    Portfolio
                </button>
                <button
                    className="timelineButton"
                    onClick={() => handleTabClick('timeline')}
                >
                    Timeline
                </button>
                <button
                    className="extraButton"
                    onClick={() => handleTabClick('extra')}
                >
                    Blog
                </button>
            </div>

            {/* Tab Content */}
            <div ref={contentRef}>
                {renderComponent()}
            </div>
        </div>
    );
}

export default TabSwitcher;