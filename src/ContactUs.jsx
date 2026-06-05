function ContactUs() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <h2>Contact Information</h2>
        <p>
          I’m always open to connecting about software engineering opportunities,
          projects, internships, or collaborations.
        </p>
      </div>

      <div className="contact-card">
        <div className="contact-info">
          <h3>Let’s Connect</h3>

          <p>
            Feel free to reach out if you would like to learn more about my work,
            discuss an opportunity, or connect professionally.
          </p>

          <div className="contact-links">
            <a href="mailto:jain.trisha@gmail.com">
              Email: jain.trisha@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/trishajain12"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn: linkedin.com/in/trishajain12
            </a>

            <a
              href="https://github.com/trishajain12"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub: github.com/trishajain12
            </a>
          </div>
        </div>

        <div className="contact-message">
          <h3>Currently Interested In</h3>

          <ul>
            <li>Software engineering roles</li>
            <li>Front-end and full-stack development</li>
            <li>AI-powered applications</li>
            <li>Product-focused engineering teams</li>
            <li>Collaborative technical projects</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;