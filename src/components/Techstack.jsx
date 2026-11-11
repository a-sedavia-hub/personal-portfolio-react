import htmlLogo from "../images/tech/html-logo.png";
import cssLogo from "../images/tech/css-logo.png";
import jsLogo from "../images/tech/javascript-logo.png";
import reactLogo from "../images/tech/react-logo.png";
import pyLogo from "../images/tech/python-logo.png";
import mysqlLogo from "../images/tech/mysql-logo.png";
import gitLogo from "../images/tech/git-logo.png";
import javaLogo from "../images/tech/java.png";

function Techstack() {
  const technologies = [
    { name: "HTML5", logo: htmlLogo },
    { name: "CSS3", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "React", logo: reactLogo },
    { name: "Python", logo: pyLogo },
    { name: "MySQL", logo: mysqlLogo },
    { name: "Git", logo: gitLogo },
    { name: "Java", logo: javaLogo },
  ];

  return (
    <section className="tech-stack" id="techstack">
      <p className="tech-stack-heading">TECHNOLOGIES I WORK WITH</p>

      <div className="tech-carousel">
        <div className="tech-track">
          {/* First set of logos */}
          <div className="tech-group">
            {technologies.map((tech) => (
              <div className="tech-item" key={tech.name}>
                <img src={tech.logo} alt={tech.name} />
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless infinite scrolling */}
          <div className="tech-group" aria-hidden="true">
            {technologies.map((tech) => (
              <div className="tech-item" key={tech.name}>
                <img src={tech.logo} alt="" />
              </div>
            ))}
          </div>

          <div className="tech-group" aria-hidden="true">
            {technologies.map((tech) => (
              <div className="tech-item" key={tech.name}>
                <img src={tech.logo} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Techstack;
