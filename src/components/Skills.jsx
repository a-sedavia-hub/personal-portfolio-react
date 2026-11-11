function Skills() {
  const skills = [
    {
      title: "Web Development",
      description: "Building responsive and user-friendly websites.",
    },
    {
      title: "Database Management",
      description: "Working with databases and managing structured data.",
    },
    {
      title: "Data Analysis",
      description: "Exploring data and generating meaningful insights.",
    },
  ];

  return (
    <section className="section skills">
      <div className="section-heading">
        <span className="eyebrow">WHAT I DO</span>
        <h2>Skills & Expertise</h2>
        <p>Technologies and areas I am currently developing my knowledge in.</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.title}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Skills;
