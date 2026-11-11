function Techstack() {
  const technologies = [
    { name: "HTML5", logo: "/images/tech/html-logo.png" },
    { name: "CSS3", logo: "/images/tech/css-logo.png" },
    { name: "JavaScript", logo: "/images/tech/javascript-logo.png" },
    { name: "React", logo: "/images/tech/react-logo.png" },
    { name: "Python", logo: "/images/tech/python-logo.png" },
    { name: "MySQL", logo: "/images/tech/mysql-logo.png" },
    { name: "Git", logo: "/images/tech/git-logo.png" },
    { name: "Java", logo: "/images/tech/java.png" },
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
