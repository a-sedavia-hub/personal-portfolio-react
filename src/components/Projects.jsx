function Projects() {
  const projects = [
    {
      title: "Lost and Found Management System",
      description:
        "A web-based system designed to manage lost and found items efficiently.",
      status: "ONGOING",
      image: "/images/project-pic/sample-project-1.png",
      category: "Web Development",
      github:
        "https://github.com/a-sedavia-hub/centralized-lost-and-found-system",
      featured: true,
    },
    {
      title: "Project Title 2",
      description:
        "A description of the project goes here. It can be a brief overview of what the project is about.",
      status: "DONE",
      image: "https://placehold.co/600x400?text=Project+2&font=open-sans",
      category: "Category of the Project 2",
      github: "https://github.com/a-sedavia-hub",
      featured: false,
    },
    {
      title: "Project Title 3",
      description:
        "A description of the project goes here. It can be a brief overview of what the project is about.",
      status: "DONE",
      image: "https://placehold.co/600x400?text=Project+3&font=open-sans",
      category: "Category of the Project 3",
      github: "https://github.com/a-sedavia-hub",
      featured: false,
    },
  ];

  return (
    <section className="section projects" id="projects">
      <div className="section-heading">
        <span className="eyebrow">MY WORK</span>
        <h2>Selected Projects</h2>
        <p>Some of the projects I have worked on during my learning journey.</p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article
            className={`project-card ${project.featured ? "featured" : ""}`}
            key={project.title}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-info">
              <span className="project-category">{project.category}</span>

              <h3>{project.title}</h3>
              <span
                className={`project-status ${project.status.toLowerCase() === "ongoing" ? "status-on-going" : "status-done"}`}
              >
                {project.status}
              </span>

              <p>{project.description}</p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {" "}
                Learn More ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default Projects;
