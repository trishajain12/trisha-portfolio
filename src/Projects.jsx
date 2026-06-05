//import travelDemo from './assets/travel-demo.png';
//import accountingDemo from './assets/accounting-demo.png';
//import researchDemo from './assets/research-demo.png';

function Projects() {
  const projects = [
    {
      title: 'Agentic AI Travel Architect',
      description:
        'Built a backend travel-planning system that uses FastAPI, LangGraph, and ChromaDB to generate structured itinerary recommendations with retrieved context.',
      //image: travelDemo,
      tech: ['Python', 'FastAPI', 'LangGraph', 'ChromaDB', 'Docker'],
      github: 'https://github.com/trishajain12/YOUR-TRAVEL-REPO',
      demo: '#',
    },
    {
      title: 'TrujainTravels Accounting Platform',
      description:
        'Developed a full-stack financial platform for travel agencies to automate profit rollups, transaction auditing, and AI-powered transaction categorization.',
      //image: accountingDemo,
      tech: ['Python', 'SQL', 'Flutter', 'AI Categorization'],
      github: 'https://github.com/trishajain12/TruJain-Travels',
      demo: '#',
    },
    {
      title: 'AI-Assisted Market Research Platform',
      description:
        'Created a full-stack research tool that transforms user topics into structured research questions and outline-driven reports using LLM workflows.',
      //image: researchDemo,
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
          A collection of software engineering projects focused on AI tools,
          full-stack development, data-driven applications, and user-centered
          design.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-demo">
              <img src={project.image} alt={`${project.title} demo`} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
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

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;