import './home.css';
import pic from '../../../public/pic3.jpg';

function Home() {
    return (
        <div className="home fade-in">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-text slide-left delay-1">
                    <h1 className="main-header">Welcome to <span>Rainbow</span></h1>
                    <p className="tagline">
                        Explore a world of vibrant colors and creative inspiration.
                    </p>

                    <ul className="feature-list slide-up delay-2">
                        <li>🎨 Discover beautiful color palettes</li>
                        <li>🌈 Share and showcase your creations</li>
                        <li>✨ Connect with a creative community</li>
                    </ul>

                    <div className="hero-buttons slide-up delay-3">
                        <button className="btn hover-glow">Learn More</button>
                        <button className="btn hover-lift btn-accent">Try Demo</button>
                    </div>
                </div>

                <div className="hero-image slide-right delay-2">
                    <img src={pic} alt="Rainbow illustration" />
                </div>
            </section>

            {/* About / Description Section */}
            <section className="info-section slide-up delay-4">
                <h2>Where Colors Come to Life</h2>
                <p>
                    Rainbow is your ultimate destination for vibrant and colorful experiences.
                    Dive into a world where every shade tells a story, and every hue sparks creativity.
                    Whether you’re a designer or a color lover, Rainbow is where inspiration begins.
                </p>
            </section>
        </div>
    );
}

export default Home;
