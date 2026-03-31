import { Link } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";
import { projectsData } from "./projectsData";

export default function ProjectsPage({ darkMode }) {
  return (
    <main className="main-content" style={{ paddingTop: '4rem' }}>
      <section className="content-section">
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </div>
        <h2 className="section-title">All Projects</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[...projectsData].reverse().map((project) => (
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
      </section>
    </main>
  );
}
