export const projectsData = [
  {
    id: 1,
    title: "AI-Powered Role-Based Learning Management System",
    description: "Architected a microservices-based LMS with role-based access control and AI-assisted learning features. Developed a RAG-based AI assistant for context-aware knowledge retrieval and conversational interaction. Built agentic AI workflows using LLM orchestration and semantic search with vector databases. Designed backend APIs enabling integration between AI agents and application services.",
    technologies: "Java, Spring Boot, LangChain, RAG, Vector Databases, LLMs, Agentic AI",
    link: null
  },
  {
    id: 2,
    title: "Distributed Network Diagnostics Microservice Platform",
    description: "Designed and implemented microservices for network diagnostics including ping, traceroute, DNS lookup, and connectivity tests. Built REST APIs using Node.js and Spring Boot with JWT-based authentication. Containerized services using Docker and Docker Compose for scalable deployment and service orchestration. Implemented automated notifications and logging for diagnostic operations.",
    technologies: "Spring Boot, Node.js, REST APIs, JWT, Docker, Prometheus, Grafana",
    link: null
  },
  {
    id: 3,
    title: "RoleReadyResume",
    description: "A full-stack AI-powered resume tailoring application. This app takes a user's existing resume and a target job description, and uses an LLM (via Groq API) to rewrite, optimize, and perfectly format a tailored, ATS-friendly resume. Features include AI optimization, direct Markdown editing, precise DOM-to-PDF rendering, and backend logging.",
    technologies: "React, Vite, Node.js, Express, Groq API (Llama 3.3 70B), html2pdf.js",
    link: "https://github.com/KesavaSravan/RoleReadyResume"
  },
  {
    id: 4,
    title: "MCP Temperature Tool Server",
    description: "A Model Context Protocol (MCP) tool server built with Python and FastAPI, designed for cloud deployments (Render, Vercel, Railway). Implements an async JSON-RPC 2.0 architecture to expose tools for fetching live city temperatures, 3-day forecasts, and unit conversions using the OpenWeatherMap API.",
    technologies: "Python, FastAPI, MCP, JSON-RPC, Pytest, Uvicorn",
    link: "https://github.com/KesavaSravan/mcp-temperature-tool"
  },
  {
    id: 5,
    title: "Deep Research MCP Server",
    description: "A production-quality Deep Research MCP Server with Source Credibility Ranking. Implements a JSON-RPC 2.0 API over FastAPI to provide web search, multi-source reading, and text summarization capabilities. Built with Python to deliver ranked, credible research using advanced LLM integration.",
    technologies: "Python, FastAPI, MCP, JSON-RPC, Uvicorn",
    link: "https://github.com/KesavaSravan/deepsearch-mcp"
  }
];
