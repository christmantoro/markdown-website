import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero py-4">
            <div className="container">
                <h1 className="hero-title">Welcome to Our Website</h1>
                <p className="hero-subtitle">We provide the best services to help you succeed.</p>
                <a href="#services" className="hero-button">Learn More</a>
            </div>
        </section>
    );
};

export default Hero;