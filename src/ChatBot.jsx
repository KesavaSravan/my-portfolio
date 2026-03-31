import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import "./ChatBot.css";

const SYSTEM_PROMPT = `You are an AI assistant for Kesava Sravan Hariyapuraju's portfolio website. 
Only answer questions about him based on the following information:

NAME: Hariyapuraju Kesava Sravan
LOCATION: Bengaluru, Karnataka, India
EMAIL: kesavasravan467@gmail.com
PHONE: +91-93984 95822

CURRENT ROLE: Systems Engineer at Publicis Sapient (Feb 2025 – Present)

EXPERIENCE:
- Designed scalable microservices using Java and Spring Boot for enterprise and AI-enabled workflows
- Built secure REST APIs with JWT authentication and role-based access control
- Developed backend services for AI-driven workflows and system integrations
- Database optimization in PostgreSQL and MySQL
- CI/CD pipelines using Jenkins and Docker
- Monitoring with Prometheus and Grafana
- Unit and integration tests using JUnit and Mockito

SKILLS:
- Languages: Java, Python, C, SQL
- Backend: Spring Boot, Spring Security, Spring Data JPA, REST APIs, Microservices, JWT
- AI/GenAI: LLMs, RAG, LangChain, NLP, Hugging Face Transformers, Agentic AI
- Databases: PostgreSQL, MySQL, FAISS, Vector Databases
- Tools: Git, Docker, Jenkins, Maven, Prometheus, Grafana, Linux
- Platforms: Microsoft Power Automate, Microsoft Copilot Studio

PROJECTS:
1. AI-Powered Role-Based LMS (Agentic AI) - Microservices LMS with RAG-based AI assistant, agentic workflows, LLM orchestration, vector databases
2. Distributed Network Diagnostics Platform - Microservices for ping/traceroute/DNS, Spring Boot + Node.js, JWT, Docker, Prometheus
3. RoleReadyResume - A full-stack AI-powered AI resume tailoring app using React, Vite, Node.js, and the Groq API. (GitHub: https://github.com/KesavaSravan/RoleReadyResume)
4. MCP Temperature Tool Server - Model Context Protocol (MCP) server in Python/FastAPI for async OpenWeatherMap operations. (GitHub: https://github.com/KesavaSravan/mcp-temperature-tool)
5. Deep Research MCP Server - Production-quality Deep Research MCP server with source credibility ranking using Python, FastAPI, and JSON-RPC. (GitHub: https://github.com/KesavaSravan/deepsearch-mcp)

EDUCATION:
- B.Tech Electrical and Computer Engineering, Amrita Vishwa Vidyapeetham, 2024, CGPA: 7.5/10

If asked anything unrelated to Kesava Sravan, politely say you can only answer questions about him.
Keep answers concise and professional.`;

export default function ChatBot({ darkMode }) {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm Sravan's AI assistant. Ask me anything about his skills, experience, or projects! 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMessage = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          max_tokens: 512,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
            userMessage,
          ],
        }),
      });

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't get a response. Please try again.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong. Please check your connection and try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className={`chatbot-fab ${isOpen ? "chatbot-fab--open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AI Chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`chatbot-window ${darkMode ? "chatbot-dark" : "chatbot-light"}`}>
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <Bot size={18} />
              </div>
              <div>
                <p className="chatbot-header-name">Sravan's AI Assistant</p>
                <p className="chatbot-header-status">● Online</p>
              </div>
            </div>
            <button className="chatbot-close-btn" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-message chatbot-message--${msg.role}`}>
                <div className="chatbot-message-icon">
                  {msg.role === "assistant" ? <Bot size={14} /> : <User size={14} />}
                </div>
                <div className="chatbot-bubble">{msg.content}</div>
              </div>
            ))}
            {loading && (
              <div className="chatbot-message chatbot-message--assistant">
                <div className="chatbot-message-icon"><Bot size={14} /></div>
                <div className="chatbot-bubble chatbot-typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chatbot-input-area">
            <textarea
              className="chatbot-input"
              placeholder="Ask about Sravan's skills, projects..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
            />
            <button
              className="chatbot-send-btn"
              onClick={sendMessage}
              disabled={loading || !input.trim()}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
