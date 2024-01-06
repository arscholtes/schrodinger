import React, { useState, useEffect } from 'react';
import './MountainClimb.css';

const MountainClimb = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="mountain-container">
            <img src="/path-to-mountain-background.jpg" alt="Mountain" className="mountain-background"/>
            <img src="/path-to-character.png" alt="Character" style={{ bottom: `${scrollPosition}px` }} className="climbing-character"/>
            {/* Goal flags and other elements */}
        </div>
    );
};

export default MountainClimb;
