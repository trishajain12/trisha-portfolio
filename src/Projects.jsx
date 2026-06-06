import websiteDemo from './assets/portfolio-demo.mov';

function Projects() {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      status: 'In Progress',
      description:
        'Designed and built a responsive personal portfolio website to showcase my background, work experience, technical skills, projects, and contact information using React and custom CSS.',
      video: websiteDemo,
      tech: ['React', 'JavaScript', 'HTML/CSS', 'Responsive Design'],
      github: 'https://github.com/tjain010/trisha-portfolio',
      demo: '#',
    },
    {
      title: 'Agentic AI Travel Architect',
      status: 'In Progress',
      description:
        'Building a backend travel-planning system using FastAPI, LangGraph, and ChromaDB to generate structured itinerary recommendations with retrieved context.',
      tech: ['Python', 'FastAPI', 'LangGraph', 'ChromaDB', 'Docker'],
      github: 'https://github.com/trishajain12/YOUR-TRAVEL-REPO',
      demo: '#',
    },
    {
      title: 'TrujainTravels Accounting Platform',
      status: 'In Progress',
      description:
        'Developed a full-stack financial platform for travel agencies to automate profit rollups, transaction auditing, and AI-powered transaction categorization.',
      tech: ['Python', 'SQL', 'Flutter', 'AI Categorization'],
      github: 'https://github.com/trishajain12/TruJain-Travels',
      demo: '#',
    },
    {
      title: 'AI-Assisted Market Research Platform',
      status: 'In Progress',
      description:
        'Created a full-stack research tool that transforms user topics into structured research questions and outline-driven reports using LLM workflows.',
      tech: ['React', 'Python', 'FastAPI', 'Pydantic', 'LLMs'],
      github: 'https://github.com/trishajain12/market-research-assistant-api',
      demo: '#',
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <h2>Projects</h2>
        <p>
          A collection of software engineering projects focused on full-stack
          development, AI tools, data-driven applications, and user-centered
          design.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-demo">
              {project.video ? (
                <video src={project.video} controls muted loop playsInline />
              ) : (
                <div className="project-placeholder">
                  <p>{project.title}</p>
                </div>
              )}
            </div>

            <div className="project-content">
              <div className="project-title-row">
                <h3>{project.title}</h3>
                <span className="project-status">{project.status}</span>
              </div>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;