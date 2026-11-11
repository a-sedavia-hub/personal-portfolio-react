import sunLogo from "../images/header/sun.png";
import moonLogo from "../images/header/moon.png";

function Navbar({ isDark, toggleTheme }) {
  return (
    <header className="navbar">
      <a href="#about" className="logo">
        Alvhir<span>.</span>
      </a>

      <div className="navbar-right">
        <nav>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
          <img src={isDark ? sunLogo : moonLogo} alt="" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
