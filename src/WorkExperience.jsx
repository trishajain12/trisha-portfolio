function WorkExperience() {
  return (
    <section className="work-section" id="work">
      <div className="work-heading">
        <h2>Work Experience</h2>
      </div>

      <div className="work-timeline">
        <div className="work-card">
          <div className="work-card-header">
            <div>
              <h3>Product Development — Software Engineering Intern</h3>
              <p className="company">Quicken Inc.</p>
            </div>
            <span className="work-date">May 2026 – Aug. 2026</span>
          </div>

          <p className="work-location">Menlo Park, CA</p>

          <div className="tech-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>Frontend Development</span>
          </div>

          <ul>
            <li>
              Incoming software engineering intern focused on product
              development and front-end engineering.
            </li>
            <li>
              Preparing to contribute to React-based user interfaces, debugging
              workflows, and product-focused engineering tasks.
            </li>
          </ul>
        </div>

        <div className="work-card">
          <div className="work-card-header">
            <div>
              <h3>Product Development — QA Engineer Intern</h3>
              <p className="company">Quicken Inc.</p>
            </div>
            <span className="work-date">Jun. 2025 – Sept. 2025</span>
          </div>

          <p className="work-location">Menlo Park, CA</p>

          <div className="tech-tags">
            <span>JavaScript</span>
            <span>Maestro</span>
            <span>LambdaTest</span>
            <span>REST APIs</span>
            <span>CI/CD</span>
          </div>

          <ul>
            <li>
              Reduced manual regression testing time by 18% by engineering 35+
              automated Maestro tests for the Simplifi mobile platform.
            </li>
            <li>
              Developed reusable JavaScript-based API automation infrastructure
              for environment setup and teardown, reducing CI/CD pipeline time
              by 60%.
            </li>
            <li>
              Executed end-to-end test suites across mobile devices and
              viewports, documented UI defects, and collaborated with product
              and engineering teams to validate fixes.
            </li>
          </ul>
        </div>

        <div className="work-card">
          <div className="work-card-header">
            <div>
              <h3>Software Engineering Intern</h3>
              <p className="company">Comaiba Inc.</p>
            </div>
            <span className="work-date">Jun. 2024 – Aug. 2024</span>
          </div>

          <p className="work-location">San Jose, CA</p>

          <div className="tech-tags">
            <span>MySQL</span>
            <span>HTML</span>
            <span>Frontend Debugging</span>
            <span>Backend Optimization</span>
            <span>CI/CD</span>
          </div>

          <ul>
            <li>
              Optimized MySQL query performance and refactored inefficient
              backend patterns to improve dashboard latency and reliability.
            </li>
            <li>
              Improved frontend stability by resolving 15+ high-priority HTML
              bugs and optimizing complex state transitions during customer
              onboarding.
            </li>
            <li>
              Helped reduce UI-related regressions by integrating end-to-end
              tests into the internal CI/CD pipeline.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;