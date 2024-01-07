import React from 'react';
import './LandingPage.css';
import MountainClimb from "./MountainClimb";
import journeyBG from '../images/Journey.png';

function LandingPage() {
    // Prepare the style
    const landingPageStyle = {
        backgroundImage: `url(${journeyBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    return (
        <div className="landing-page" style={landingPageStyle}>
            <header className="hero-section">
                <h1>Welcome to My Portfolio</h1>
                <p>Discover my world of coding and design</p>
                <button>See My Work</button>
            </header>

            <section className="about-section">
                <h2>About Me</h2>
                <p>Alex Scholtes</p>
                <p>Software Developer</p>
            </section>

            <section className="portfolio-section">
                <h2>My Portfolio</h2>
                {/* Portfolio items will go here */}
            </section>
            <MountainClimb />
            <section className="contact-section">
                <h2>Contact Me</h2>
                {/* Contact form will go here */}
            </section>

            <footer>
                <p>Copyright © 2024</p>
            </footer>
        </div>
    );
}

export default LandingPage;