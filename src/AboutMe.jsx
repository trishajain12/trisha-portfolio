function AboutMe() {
  return (
    <section className="about-section" id="about">
      <div className="about-heading">
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-main-card">
          <h3>Software Engineer with a Product-Focused & Data-Driven Mindset</h3>

          <p>
            I’m Trisha Jain, a Software Engineer and Computer Science with Business
            Applications graduate from UC Riverside. My background combines core
            software engineering with business-focused problem solving, giving me
            experience thinking about both how systems are built and how they create
            value for users. Through my coursework and projects, I worked with data
            from collection and cleaning to analysis, using tools like SQL, Python,
            and data-driven workflows to understand patterns and support better
            decision-making.
          </p>

          <p>
            Over time, I became especially interested in turning that processed data
            into clear, useful applications. I enjoy building full-stack and front-end
            experiences that make information easier to access, understand, and act
            on. My experience spans React, JavaScript, SQL, backend APIs, automation,
            testing, AI tools, and database-backed applications. I like working across
            the stack, collaborating with teams, and transforming complex technical
            problems into clean, reliable, user-focused products.
          </p>
        </div>

        <div className="about-side-card">
          <h3>Education</h3>
          <p className="card-title">University of California, Riverside</p>
          <p>GPA: 3.76 - Dean’s/Chancellor’s Honors List</p>
          <div className="quick-facts">
            <div>
              <span>Degree</span>
              <strong>B.S. Computer Science with Business Applications</strong>
            </div>
            <div>
              <span>Graduation</span>
              <strong>June 2026</strong>
            </div>
            <div>
              <span>Current Location</span>
              <strong>San Francisco, CA</strong>
            </div>

            <div>
              <span>Open To</span>
              <strong>Relocation & Hybrid/Remote Roles</strong>
            </div>

          </div>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>Leadership</h3>

          <p className="card-title">Society of Women Engineers</p>
          <p>Technology Lead</p>

          <p className="card-title">Prosthetics Club</p>
          <p>Code Consultant & Web Developer</p>

          <p>
            I enjoy code reviews, team collaboration, and building tools that make
            technical work more accessible, organized, and impactful.
          </p>
        </div>

        <div className="about-card">
          <h3>Technical Interests</h3>
          <ul className="clean-list">
            <li>Full-stack product development</li>
            <li>Front-end development and user-centered design</li>
            <li>Data cleaning, processing, analysis, and visualization</li>
            <li>AI-powered tools and workflow automation</li>
            <li>Testing, CI/CD, and scalable engineering practices</li>
          </ul>
        </div>

        <div className="about-card skills-card">
          <h3>Technical Skills</h3>

          <div className="skill-group">
            <h4>Languages</h4>
            <div className="skill-pills">
              <span>Python</span>
              <span>Java</span>
              <span>C++</span>
              <span>JavaScript</span>
              <span>SQL</span>
              <span>HTML/CSS</span>
            </div>
          </div>

          <div className="skill-group">
            <h4>Frameworks & Technologies</h4>
            <div className="skill-pills">
              <span>React.js</span>
              <span>Node.js</span>
              <span>FastAPI</span>
              <span>Spring Boot</span>
              <span>Flutter</span>
              <span>REST APIs</span>
              <span>LangChain</span>
              <span>LangGraph</span>
              <span>RAG</span>
            </div>
          </div>

          <div className="skill-group">
            <h4>Data, AI & Databases</h4>
            <div className="skill-pills">
              <span>Pandas</span>
              <span>NumPy</span>
              <span>scikit-learn</span>
              <span>Tableau</span>
              <span>ChromaDB</span>
              <span>MySQL</span>
              <span>PostgreSQL</span>
              <span>SQLite</span>
              <span>OpenAI API</span>
              <span>Gemini API</span>
            </div>
          </div>

          <div className="skill-group">
            <h4>Developer Tools & Testing</h4>
            <div className="skill-pills">
              <span>Git</span>
              <span>GitHub</span>
              <span>Docker</span>
              <span>Linux</span>
              <span>CI/CD</span>
              <span>Selenium</span>
              <span>Maestro</span>
              <span>LambdaTest</span>
              <span>Jest</span>
              <span>JUnit</span>
              <span>API Testing</span>
              <span>Regression Testing</span>
              <span>Agile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;