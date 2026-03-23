import "./Projects.css";

/* ---------- PROJECT DATA ---------- */

const projects = [
  {
    title: "RentEquip",
    description:
      "A rental marketplace application that allows users to list, discover, and rent equipment or everyday items. Features include product listings, booking system, and real-time user interaction for seamless renting experience.",
    tech: "React Native • Firebase • Firestore",
    image: "/projects/rentEquip.png",
    github: "https://github.com/Krsahil271/rentequip",
  },
  {
    title: "Car Rental System",
    description:
      "A responsive vehicle rental platform that streamlines the process of browsing, booking, and managing car rentals. Built with a user-friendly interface and structured data handling to deliver a smooth reservation experience.",
    tech: "HTML • CSS • JavaScript",
    image: "/projects/carRental.png",
    github: "https://github.com/Krsahil271/Car-rental-system",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <p className="projects-label">// Featured Work</p>

        <h2 className="projects-title">
          My <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-card"
              key={index}
            >

              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span className="tech-tag">
                  {project.tech}
                </span>

                <div className="project-links">
                  <span className="github-btn">
                    View Project ↗
                  </span>
                </div>

              </div>

            </a>

          ))}
        </div>

      </div>
    </section>
  );
}