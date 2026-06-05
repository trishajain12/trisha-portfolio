import profilePic from './assets/IMG_1399.jpg';

function Header() {
  return (
    <header>
      <div className="header-intro">
        <img
          className="profilePic"
          src={profilePic}
          alt="Trisha Jain profile picture"
        />

        <div className="header-text">
          <h1>TRISHA JAIN</h1>
          <p>Software Engineer | Creative Problem Solver</p>
        </div>
      </div>

      <nav className="options-menu">
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#work">Work Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact Information</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;