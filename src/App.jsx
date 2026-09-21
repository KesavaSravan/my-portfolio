import { Github, Linkedin, Mail, Phone, Sun, Moon, Download, MapPin, Calendar, ArrowRight, Home, Code, Briefcase, FileText } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ChatBot from "./ChatBot";
import ProjectsPage from "./ProjectsPage";
import { projectsData } from "./projectsData";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function HomeContent() {
  return (
    <main className="main-content">
      {/* Summary */}
      <motion.section
        className="content-section"
        id="tour-summary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
      >
        <h2 className="section-title">Professional Summary</h2>
        <div className="summary-content">
          <p>Applied AI Specialist with hands-on experience architecting, scaling, and deploying production AI systems and Agentic workflows. Skilled in bridging enterprise customer requirements with robust AI architecture, leveraging LLMs (Groq, GPT, Claude, Gemini), Model Context Protocol (MCP), LangGraph, and RAG pipelines powered by FastAPI and cloud containerization. Proven track record of end-to-end technical ownership, enterprise API integrations, vector databases, and production monitoring for high-reliability AI applications.</p>
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        className="content-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
      >
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-item glass-panel">
          <div className="experience-header">
            <h3 className="position-title">System Engineer</h3>
            <span className="company-name" style={{ color: '#667eea', fontWeight: '600' }}>Publicis Sapient, Bengaluru</span>
            <span className="duration" style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}><Calendar size={16} /> Feb 2025 – Present</span>
          </div>
          <ul className="experience-list">
            <li>Architected and deployed production AI agent workflows using Agentic Studio and Model Context Protocol (MCP) servers, integrating enterprise APIs to automate complex operational workloads.</li>
            <li>Engineered high-performance semantic search pipelines utilizing multi-provider vector embeddings and FAISS vector databases, cutting retrieval latency by 40% while improving query accuracy.</li>
            <li>Streamlined containerized microservices deployment with Docker, Docker Compose, and Jenkins CI/CD pipelines, driving high availability, zero-downtime releases, and 99.9% deployment reliability.</li>
            <li>Implemented comprehensive production monitoring and observability infrastructure using Prometheus and Grafana to track LLM token metrics, API latencies, and agent execution health in real time.</li>
            <li>Partnered directly with cross-functional enterprise stakeholders in a technical consulting capacity to translate business constraints into scalable, production-ready AI solution architectures.</li>
          </ul>
        </div>
      </motion.section>

      {/* Technical Skills (Bento Grid) */}
      <motion.section
        id="skills"
        className="content-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
      >
        <h2 className="section-title">Technical Skills</h2>
        <div className="bento-grid">
          <div className="bento-item medium">
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: '600' }}>Languages</h4>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">C</span>
            </div>
          </div>
          <div className="bento-item medium">
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: '600' }}>Backend & APIs</h4>
            <div className="skill-tags">
              <span className="skill-tag">FastAPI</span>
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">REST APIs</span>
              <span className="skill-tag">Microservices</span>
              <span className="skill-tag">JWT</span>
              <span className="skill-tag">RBAC</span>
              <span className="skill-tag">Node.js</span>
            </div>
          </div>
          <div className="bento-item large">
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: '600' }}>AI Engineering</h4>
            <div className="skill-tags">
              <span className="skill-tag">LLMs (Groq / GPT / Claude / Gemini)</span>
              <span className="skill-tag">Agentic AI</span>
              <span className="skill-tag">Model Context Protocol (MCP)</span>
              <span className="skill-tag">RAG & Hybrid Search</span>
              <span className="skill-tag">LangChain & LCEL</span>
              <span className="skill-tag">LangGraph</span>
              <span className="skill-tag">Structured Output (Pydantic)</span>
              <span className="skill-tag">Prompt Engineering</span>
              <span className="skill-tag">Semantic Search</span>
              <span className="skill-tag">FAISS & ChromaDB</span>
              <span className="skill-tag">Hugging Face</span>
              <span className="skill-tag">Sentence Transformers</span>
              <span className="skill-tag">Multimodal / Vision QA</span>
              <span className="skill-tag">scikit-learn</span>
            </div>
          </div>
          <div className="bento-item small">
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: '600' }}>Databases</h4>
            <div className="skill-tags">
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">Vector DBs (FAISS, Chroma)</span>
            </div>
          </div>
          <div className="bento-item large">
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: '600' }}>Cloud & DevOps</h4>
            <div className="skill-tags">
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Docker Compose</span>
              <span className="skill-tag">Kubernetes</span>
              <span className="skill-tag">Jenkins</span>
              <span className="skill-tag">GitHub Actions</span>
              <span className="skill-tag">CI/CD</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Azure</span>
              <span className="skill-tag">GCP</span>
              <span className="skill-tag">Linux</span>
            </div>
          </div>
          <div className="bento-item small">
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: '600' }}>Observability</h4>
            <div className="skill-tags">
              <span className="skill-tag">Prometheus</span>
              <span className="skill-tag">Grafana</span>
              <span className="skill-tag">LangSmith</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        className="content-section"
        id="tour-projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 className="section-title" style={{ margin: 0 }}>Featured Projects</h2>
          <Link to="/projects" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit', fontSize: '1rem', opacity: 0.8 }}>
            Show More <ArrowRight size={18} />
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[...projectsData].reverse().slice(0, 3).map((project) => (
            <div key={project.id} className="project-card glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <h3 className="project-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.4rem' }}>{project.title}</span>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="git-icon-btn" title="View on GitHub">
                    <Github size={20} />
                  </a>
                )}
              </h3>
              <p className="project-description" style={{ flexGrow: 1 }}>{project.description}</p>
              <div className="project-tech" style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <strong>Technologies:</strong> {project.technologies}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link to="/projects" className="download-btn" style={{ display: 'inline-flex', padding: '0.75rem 2rem', borderRadius: '50px', textDecoration: 'none', fontWeight: '500', gap: '0.5rem' }}>
            View All Projects
          </Link>
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        className="content-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUpVariant}
      >
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          <div className="education-item glass-panel" style={{ padding: '2rem' }}>
            <h4 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>B.Tech – Electrical and Computer Engineering</h4>
            <p className="institution" style={{ color: '#06b6d4', fontWeight: '500', marginBottom: '0.5rem' }}>Amrita Vishwa Vidyapeetham, Coimbatore</p>
            <p className="duration" style={{ color: 'var(--text-secondary)' }}>2020 – 2024 | CGPA: 7.5 / 10</p>
          </div>
        </div>
      </motion.section>

      {/* Download Resume */}
      <motion.section
        className="download-section"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <a href={`${import.meta.env.BASE_URL}resumekesavasravan.pdf`} download className="download-btn" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
          <Download size={24} />
          Download Resume
        </a>
      </motion.section>
    </main>
  );
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(true);
  const location = useLocation();
  const dragAreaRef = useRef(null);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const handleScrollToTop = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollToProjects = (e) => {
    if (location.pathname === "/projects") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollToSkills = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById("skills");
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`portfolio-container ${darkMode ? 'dark-theme' : 'light-theme'}`}>

      {/* Floating Navbar */}
      <div className="floating-nav-wrapper" ref={dragAreaRef}>
        <motion.nav
          className="floating-nav"
          drag="y"
          dragConstraints={dragAreaRef}
          dragElastic={0.1}
          whileDrag={{ cursor: 'grabbing' }}
          style={{ cursor: 'grab' }}
        >
          <Link to="/" onClick={handleScrollToTop} title="Home">
            <div className="nav-icon"><Home size={20} /></div>
            <span className="nav-label">Home</span>
          </Link>
          <Link to="/#skills" onClick={handleScrollToSkills} title="Skills">
            <div className="nav-icon"><Code size={20} /></div>
            <span className="nav-label">Skills</span>
          </Link>
          <Link to="/projects" onClick={handleScrollToProjects} title="Projects">
            <div className="nav-icon"><Briefcase size={20} /></div>
            <span className="nav-label">Projects</span>
          </Link>
          <a href={`${import.meta.env.BASE_URL}resumekesavasravan.pdf`} target="_blank" rel="noreferrer" title="Resume (PDF)">
            <div className="nav-icon"><FileText size={20} /></div>
            <span className="nav-label">Resume</span>
          </a>
          <div className="nav-divider"></div>
          <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle-vertical" title="Toggle Theme">
            <div className="nav-icon">{darkMode ? <Sun size={20} /> : <Moon size={20} />}</div>
            <span className="nav-label">{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </motion.nav>
      </div>

      <Routes>
        <Route path="/" element={
          <>
            {/* Header */}
            <header className="portfolio-header" id="tour-header">
              <div className="header-overlay"></div>
              <motion.div
                className="header-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="profile-image-container">
                  <img src={`${import.meta.env.BASE_URL}sravan.jpeg`} alt="Kesava Sravan" className="profile-image" />
                </div>
                <h1 className="main-title">Hariyapuraju Kesava Sravan</h1>
                <p className="job-title" style={{ fontFamily: 'Outfit, sans-serif' }}>System Engineer @ Publicis Sapient</p>
                <p className="location" style={{ fontFamily: 'Outfit, sans-serif', marginTop: '1rem' }}><MapPin size={18} /> Bengaluru, Karnataka, India</p>

                {/* Hero Quick CTA Group */}
                <div className="header-cta-group">
                  <a href={`${import.meta.env.BASE_URL}resumekesavasravan.pdf`} download className="header-cta-btn primary">
                    <Download size={18} />
                    <span>Download Resume</span>
                  </a>
                  <a href={`${import.meta.env.BASE_URL}resumekesavasravan.pdf`} target="_blank" rel="noreferrer" className="header-cta-btn secondary">
                    <FileText size={18} />
                    <span>View Resume</span>
                  </a>
                  <Link to="/projects" className="header-cta-btn outline">
                    <Briefcase size={18} />
                    <span>Explore Projects</span>
                  </Link>
                </div>
              </motion.div>
            </header>

            {/* Contact */}
            <section className="contact-section" id="contact">
              <motion.div
                className="contact-grid"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a href={`${import.meta.env.BASE_URL}resumekesavasravan.pdf`} target="_blank" rel="noreferrer" className="contact-card glass-panel resume">
                  <FileText size={24} /><span>Resume (PDF)</span>
                </a>
                <a href="https://github.com/kesavasravan" target="_blank" rel="noreferrer" className="contact-card glass-panel">
                  <Github size={24} /><span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/kesava-sravan/" target="_blank" rel="noreferrer" className="contact-card glass-panel linkedin">
                  <Linkedin size={24} /><span>LinkedIn</span>
                </a>
                <a href="mailto:kesavasravan467@gmail.com" className="contact-card glass-panel email">
                  <Mail size={24} /><span>Email</span>
                </a>
                <a href="tel:+919398495822" className="contact-card glass-panel phone">
                  <Phone size={24} /><span>Phone</span>
                </a>
              </motion.div>
            </section>

            <HomeContent />
          </>
        } />
        <Route path="/projects" element={
          <ProjectsPage />
        } />
      </Routes>

      <footer className="portfolio-footer glass-panel" style={{ borderBottom: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: '0' }}>
        <p style={{ fontFamily: 'Outfit, sans-serif' }}>© 2026 Hariyapuraju Kesava Sravan — Portfolio built with React & Framer Motion</p>
      </footer>

      {/* AI Chatbot */}
      <ChatBot
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isOpen={isChatOpen}
        setIsOpen={setIsChatOpen}
      />

      {/* Vercel Web Analytics */}
      <Analytics />

    </div>
  );
}
