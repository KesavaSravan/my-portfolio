import { Link } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projectsData } from "./projectsData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ProjectsPage({ darkMode }) {
  return (
    <main className="main-content" style={{ paddingTop: '8rem' }}>
      <motion.section 
        className="content-section" 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </div>
        <h2 className="section-title">All Projects</h2>
        
        <motion.div 
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[...projectsData].reverse().map((project) => (
            <motion.div key={project.id} className="project-card glass-panel" variants={itemVariants} style={{ padding: '2rem' }}>
              <h3 className="project-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.4rem' }}>{project.title}</span>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="git-icon-btn" title="View on GitHub">
                    <Github size={20} />
                  </a>
                )}
              </h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech" style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <strong>Technologies:</strong> {project.technologies}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </main>
  );
}
