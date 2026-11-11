import hero from "../images/hero/hero-sedavia.png";
import heroDark from "../images/hero/hero-sedavia-night.png";

function Hero({ isDark }) {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <span className="eyebrow">COMPUTER SCIENCE STUDENT</span>

        <h1>
          Hi, I'm <span>Alvhir Sedavia.</span>
        </h1>

        <h2>Computer Science Student / Aspiring Data Analyst</h2>

        <p>
          I am passionate about technology, programming, and discovering
          meaningful insights through data. I enjoy learning new technologies
          and building practical solutions to real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            Explore My Work
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <img
          src={isDark ? heroDark : hero}
          alt="photo of Alvhir Sedavia"
          className="profile-image"
        />
      </div>
    </section>
  );
}
export default Hero;
