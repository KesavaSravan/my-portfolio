import { Github, Linkedin, Mail, Phone, Sun, Moon, Download, MapPin, Calendar, ExternalLink } from "lucide-react";
import { useState } from "react";
import "./App.css";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`portfolio-container ${darkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Theme Toggle Button */}
      <button 
        onClick={toggleTheme}
        className="theme-toggle-btn"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Header Section */}
      <header className="portfolio-header">
        <div className="header-overlay"></div>
        <div className="header-content">
          <div className="profile-image-container">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQEZptJc1owfWw/profile-displayphoto-crop_800_800/B4EZeLs.N2G4AI-/0/1750395516434?e=1756944000&v=beta&t=Sk5SMk4hdCQsL0S-DYY2vggBG6xCSajON27enDAPohs"
              alt="Profile"
              className="profile-image"
            />
          </div>
          <h1 className="main-title">Hariyapuraju Kesava Sravan</h1>
          <p className="job-title">Trainee System Engineer @ Publicis Sapient</p>
          <p className="location">
            <MapPin size={16} />
            Bengaluru, Karnataka, India
          </p>
        </div>
      </header>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-grid">
          <a 
            href="https://github.com/kesavasravan" 
            target="_blank" 
            rel="noreferrer"
            className="contact-card"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/kesava-sravan/" 
            target="_blank" 
            rel="noreferrer"
            className="contact-card linkedin"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:kesavasravan467@gmail.com"
            className="contact-card email"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a 
            href="tel:+919398495822"
            className="contact-card phone"
          >
            <Phone size={20} />
            <span>Phone</span>
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        
        {/* Professional Summary */}
        <section className="content-section">
          <h2 className="section-title">Professional Summary</h2>
          <div className="summary-content">
            <p>
              Electrical and Computer Engineering graduate with hands-on experience in full-stack development,
              machine learning, and system engineering. Currently serving as a Trainee System Engineer at Publicis Sapient,
              where I develop network diagnostic tools and implement enterprise-level solutions.
            </p>
            <p>
              Specialized in Java, Spring Boot, API development, and Machine Learning. Experience includes developing
              deep learning models for product classification and radio signal processing using CNN and ResNet architectures.
            </p>
            <p>
              Passionate about accessibility technology, AI/ML applications, and enterprise software development.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="content-section">
          <h2 className="section-title">Professional Experience</h2>
          <div className="experience-item">
            <div className="experience-header">
              <h3 className="position-title">Trainee System Engineer</h3>
              <span className="company-name">Publicis Sapient</span>
              <span className="duration">
                <Calendar size={16} />
                Feb 2024 - Present
              </span>
            </div>
            <ul className="experience-list">
              <li>Developing network diagnostic microservices using Spring Boot, WebSockets, and REST APIs.</li>
              <li>Integrated JWT-based authentication with Feign clients for secure communication.</li>
              <li>Enabled Prometheus & Grafana-based monitoring across Node.js and Java services.</li>
              <li>Built automated testing pipelines using JUnit and Postman for CI/CD integration.</li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section className="content-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Programming Languages</h4>
              <div className="skill-tags">
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C</span>
                <span className="skill-tag">SQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Frameworks & Tools</h4>
              <div className="skill-tags">
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Prometheus</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="content-section">
          <h2 className="section-title">Featured Projects</h2>
          <div className="project-card">
            <h3 className="project-title">Image Sound Companion</h3>
            <p className="project-description">
              Developed an assistive technology app for visually impaired users that converts image content into speech
              using CNN and LSTM models.
            </p>
            <div className="project-tech">
              <strong>Technologies:</strong> Python, TensorFlow, Keras, OpenCV, CNN, LSTM
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="content-section">
          <h2 className="section-title">Education</h2>
          <div className="education-list">
            <div className="education-item">
              <h4>B.Tech in Electronics and Communication Engineering</h4>
              <p className="institution">Amrita Vishwa Vidyapeetham</p>
              <p className="duration">2020 - 2024 | GPA: 7.5/10</p>
            </div>
            <div className="education-item">
              <h4>12th Grade</h4>
              <p className="institution">Bhashyam Junior College</p>
              <p className="duration">GPA: 9.5/10</p>
            </div>
            <div className="education-item">
              <h4>10th Grade</h4>
              <p className="institution">Sri Chaithanya School</p>
              <p className="duration">GPA: 9.5/10</p>
            </div>
          </div>
        </section>

        {/* Download Resume */}
        <section className="download-section">
          <a href="/resume.pdf" download className="download-btn">
            <Download size={20} />
            Download Resume
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="portfolio-footer">
        <p>© 2025 Hariyapuraju Kesava Sravan — Portfolio built with React</p>
      </footer>
    </div>
  );
}