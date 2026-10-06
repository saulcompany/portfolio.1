import "./Hero.css";

function Hero(){
    return(
        <section className="hero" id="home">
            <div className="container hero-inner">
                <div className="hero-text">
                    <p className="hero-greeting">Hello, This is</p>
                    <h1 className="hero-name">Pawan Kumar</h1>
                    <h2 className="hero-title">MERN Stack Developer</h2>
                    <p className="hero-tagline">
                        I build simple, fast web apps with React and Node.js. This is my portfolio website where you can see my projects and contact me for any work.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            See my projects
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact me
                        </a>
                    </div>
                </div>

                <div className="hero-photo">
                    <img src="/profile.png" alt="Pawan" />
                </div>
            </div>
        </section>
    );
}

export default Hero;