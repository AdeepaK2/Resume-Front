import React from 'react';
import './App.css';
import Navigation from "./component/Navigation.jsx";
import Maincart from "./component/Maincart.jsx";
import Project from "./component/Project.jsx";
import Portfolio from "./component/Portfolio.js";

const App = () => {
    return (
        <div>
            <Navigation />
            <main>
                {/* Home Component or Introduction Section */}
                <section id="home">
                    <h1>Welcome to My Portfolio</h1>
                    <p>Introduction and brief about yourself.</p>
                </section>

                {/* Portfolio Section */}
                <section id="portfolio">
                    <h2>My Projects</h2>
                    <Portfolio />
                </section>

                {/* Testimonials Section */}
                <section id="testimonials">
                    <h2>Testimonials</h2>
                    <Testimony />
                </section>

                {/* Maincart Section - if it's a feature */}
                <section id="main-feature">
                    <Maincart />
                </section>

                {/* Contact Section */}
                <section id="contact">
                    <h2>Contact Me</h2>
                    {/* Add contact form or details here */}
                </section>
            </main>

            {/* Footer Component */}
            <footer>
                <p>&copy; 2024 Your Name. All rights reserved.</p>
                {/* Add social media links here */}
            </footer>
        </div>
    );
}

export default App;

