import { Github, Linkedin, Mail, Phone, Sun, Moon, Download, MapPin, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ChatBot from "./ChatBot";
import ProjectsPage from "./ProjectsPage";
import { projectsData } from "./projectsData";
import "./App.css";

function HomeContent() {
  return (
    <main className="main-content">
      {/* Summary */}
      <section className="content-section">
        <h2 className="section-title">Professional Summary</h2>
        <div className="summary-content">
          <p>Software Engineer specializing in AI-enabled backend systems and automation solutions, with experience in Generative AI, RAG-based applications, and agentic AI workflows.</p>
          <p>Skilled in building scalable APIs and integrating AI capabilities with enterprise applications. Proficient in Java, Spring Boot, LangChain, and vector databases for production-grade systems.</p>
          <p>Passionate about AI/ML applications, agentic systems, and enterprise software development that delivers real-world impact.</p>
        </div>
      </section>

      {/* Experience */}
      <section className="content-section">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-item">
          <div className="experience-header">
            <h3 className="position-title">Systems Engineer</h3>
            <span className="company-name">Publicis Sapient, Bengaluru</span>
            <span className="duration"><Calendar size={16} /> Feb 2025 – Present</span>
          </div>
          <ul className="experience-list">
            <li>Designed and developed scalable microservices using Java and Spring Boot to support enterprise and AI-enabled workflows.</li>
            <li>Built secure REST APIs with JWT authentication and role-based access control for distributed systems.</li>
            <li>Developed backend services enabling AI-driven workflows and system integrations.</li>
            <li>Improved performance through database optimization and efficient query design in PostgreSQL and MySQL.</li>
            <li>Implemented CI/CD pipelines using Jenkins and Docker for automated deployments.</li>
            <li>Established monitoring using Prometheus and Grafana to improve system reliability.</li>
            <li>Developed unit and integration tests using JUnit and Mockito for production stability.</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="content-section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Languages</h4>
            <div className="skill-tags">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">C</span>
              <span className="skill-tag">SQL</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Backend & APIs</h4>
            <div className="skill-tags">
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">Spring Security</span>
              <span className="skill-tag">Spring Data JPA</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">Microservices</span>
              <span className="skill-tag">JWT</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>AI & Generative AI</h4>
            <div className="skill-tags">
              <span className="skill-tag">LLMs</span>
              <span className="skill-tag">RAG</span>
              <span className="skill-tag">LangChain</span>
              <span className="skill-tag">NLP</span>
              <span className="skill-tag">Hugging Face</span>
              <span className="skill-tag">Agentic AI</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Databases</h4>
            <div className="skill-tags">
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">FAISS</span>
              <span className="skill-tag">Vector Databases</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Tools & DevOps</h4>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Jenkins</span>
              <span className="skill-tag">Prometheus</span>
              <span className="skill-tag">Grafana</span>
              <span className="skill-tag">Maven</span>
              <span className="skill-tag">Linux</span>
            </div>
          </div>
          <div className="skill-category">
            <h4>Automation & AI Platforms</h4>
            <div className="skill-tags">
              <span className="skill-tag">Power Automate</span>
              <span className="skill-tag">Copilot Studio</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="content-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 className="section-title" style={{ margin: 0 }}>Featured Projects</h2>
          <Link to="/projects" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit', fontSize: '0.9rem', opacity: 0.8 }}>
            Show More <ArrowRight size={16} />
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[...projectsData].reverse().slice(0, 3).map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>{project.title}</span>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="git-icon-btn" title="View on GitHub">
                    <Github size={20} />
                  </a>
                )}
              </h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                <strong>Technologies:</strong> {project.technologies}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link to="/projects" className="download-btn" style={{ display: 'inline-flex', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: '500', gap: '0.5rem' }}>
            View All Projects
          </Link>
        </div>
      </section>

      {/* Education */}
      <section className="content-section">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          <div className="education-item">
            <h4>B.Tech – Electrical and Computer Engineering</h4>
            <p className="institution">Amrita Vishwa Vidyapeetham, Bengaluru</p>
            <p className="duration">2020 – 2024 | CGPA: 7.5 / 10</p>
          </div>
        </div>
      </section>

      {/* Download Resume */}
      <section className="download-section">
        <a href={`${import.meta.env.BASE_URL}Kesava Sravan Hariyapuraju Resume.pdf`} download className="download-btn">
          <Download size={20} />
          Download Resume
        </a>
      </section>
    </main>
  );
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`portfolio-container ${darkMode ? 'dark-theme' : 'light-theme'}`}>

      <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle-btn">
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <Routes>
        <Route path="/" element={
          <>
            {/* Header */}
            <header className="portfolio-header">
              <div className="header-overlay"></div>
              <div className="header-content">
                <div className="profile-image-container">
                  <img src={`${import.meta.env.BASE_URL}sravan.jpeg`} alt="Kesava Sravan" className="profile-image" />
                </div>
                <h1 className="main-title">Hariyapuraju Kesava Sravan</h1>
                <p className="job-title">Systems Engineer @ Publicis Sapient</p>
                <p className="location"><MapPin size={16} /> Bengaluru, Karnataka, India</p>
              </div>
            </header>

            {/* Contact */}
            <section className="contact-section">
              <div className="contact-grid">
                <a href="https://github.com/kesavasravan" target="_blank" rel="noreferrer" className="contact-card">
                  <Github size={20} /><span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/kesava-sravan/" target="_blank" rel="noreferrer" className="contact-card linkedin">
                  <Linkedin size={20} /><span>LinkedIn</span>
                </a>
                <a href="mailto:kesavasravan467@gmail.com" className="contact-card email">
                  <Mail size={20} /><span>Email</span>
                </a>
                <a href="tel:+919398495822" className="contact-card phone">
                  <Phone size={20} /><span>Phone</span>
                </a>
              </div>
            </section>

            <HomeContent />
          </>
        } />
        <Route path="/projects" element={
          <ProjectsPage darkMode={darkMode} />
        } />
      </Routes>

      <footer className="portfolio-footer">
        <p>© 2025 Hariyapuraju Kesava Sravan — Portfolio built with React</p>
      </footer>

      {/* AI Chatbot */}
      <ChatBot darkMode={darkMode} />

    </div>
  );
}