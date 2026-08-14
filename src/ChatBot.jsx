import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import "./ChatBot.css";

const SYSTEM_PROMPT = `You are a helpful and concise AI assistant for Kesava Sravan's portfolio website. 
Your goal is to provide clear, easy-to-read answers about him based on the provided information.

CRITICAL FORMATTING RULES:
1. DO NOT use markdown formatting like **bold**, *italics*, or # headers (the chat does not render markdown, so asterisks will look broken).
2. Write in short, easily readable paragraphs separated by blank lines.
3. Use plain bullet points (-) for listing skills or projects.
4. Keep answers friendly, conversational, and avoid giant walls of text.

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
- AI-Powered Role-Based LMS: Microservices LMS with RAG-based AI assistant, agentic workflows, LLM orchestration, vector databases
- Distributed Network Diagnostics Platform: Microservices for ping/traceroute/DNS, Spring Boot + Node.js, JWT, Docker, Prometheus
- RoleReadyResume: Full-stack AI-powered resume tailoring app using React, Node.js, and Groq API
- MCP Temperature Tool Server: MCP server in Python/FastAPI for async OpenWeatherMap operations
- Deep Research MCP Server: Deep Research MCP server with source credibility ranking using Python, FastAPI, and JSON-RPC
- AI Vector Space Visualization Platform: Interactive 3D visual workspace to analyze high-dimensional vector embeddings, clustering, and similarity relationships. Built using React Three Fiber, Three.js, WebGL, FastAPI, FAISS, and PCA/t-SNE/UMAP dimensionality reduction.

EDUCATION:
- B.Tech Electrical and Computer Engineering, Amrita Vishwa Vidyapeetham, 2024, CGPA: 7.5/10

If asked anything unrelated to Kesava Sravan, politely say you can only answer questions about him.`;

const QUICK_REPLIES = [
  "Tell me about Sravan",
  "What projects has he built?",
  "What is his backend stack?",
  "Are you open to new roles?",
];

const TOUR_STEPS_METADATA = [
  {
    id: "tour-header",
    explanation: "Welcome to my portfolio! I've scrolled you to the top header. Here is Hariyapuraju Kesava Sravan, Systems Engineer at Publicis Sapient, located in Bengaluru, India.",
    chips: ["Next: Summary ➡️", "Exit Tour ❌"]
  },
  {
    id: "tour-summary",
    explanation: "We are now at the Professional Summary. Sravan specializes in AI-enabled backend systems, Spring Boot microservices, and agentic workflows.",
    chips: ["Back ⬅️", "Next: Skills ➡️", "Exit Tour ❌"]
  },
  {
    id: "skills",
    explanation: "This is the Technical Skills Bento Grid! It showcases Sravan's expertise grouped by Languages, Backend, Generative AI, Databases, and DevOps tools.",
    chips: ["Back ⬅️", "Next: Projects ➡️", "Exit Tour ❌"]
  },
  {
    id: "tour-projects",
    explanation: "Here are the Featured Projects, including the new AI Vector Space Visualization Platform, RoleReadyResume, and several Model Context Protocol (MCP) servers.",
    chips: ["Back ⬅️", "Next: Chatbot ➡️", "Exit Tour ❌"]
  },
  {
    id: "tour-chatbot",
    explanation: "And finally, we are back at the AI Chatbot! You can chat with me here anytime. Click 'Finish Tour' to wrap up, or ask me any question!",
    chips: ["Back ⬅️", "Finish Tour 🎉"]
  }
];

export default function ChatBot({ darkMode, isOpen: externalIsOpen, setIsOpen: setExternalIsOpen, onStartTour, tourStep, setTourStep }) {
  const [internalIsOpen, setInternalIsOpen] = useState(true);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = setExternalIsOpen !== undefined ? setExternalIsOpen : setInternalIsOpen;

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

  useEffect(() => {
    if (tourStep === 0) {
      setMessages([
        {
          role: "assistant",
          content: TOUR_STEPS_METADATA[0].explanation,
        }
      ]);
    }
  }, [tourStep]);

  const handleTourNavigation = (text) => {
    if (loading) return;

    // Add user message to history
    const userMsg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);

    let nextStep = tourStep;
    let explanationText = "";

    if (text.includes("Next")) {
      nextStep = tourStep + 1;
      explanationText = TOUR_STEPS_METADATA[nextStep].explanation;
    } else if (text.includes("Back")) {
      nextStep = tourStep - 1;
      explanationText = TOUR_STEPS_METADATA[nextStep].explanation;
    } else if (text.includes("Exit") || text.includes("Finish")) {
      nextStep = -1;
      explanationText = "Awesome! I hope you enjoyed the guided tour. Let me know if you have any questions about Sravan or his work! 👇";
    }

    setTourStep(nextStep);

    // Add assistant response to history
    setMessages((prev) => [...prev, { role: "assistant", content: explanationText }]);

    // Scroll to section
    if (nextStep !== -1) {
      setTimeout(() => {
        const el = document.getElementById(TOUR_STEPS_METADATA[nextStep].id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  };

  const sendMessage = async (customText) => {
    const textToSend = typeof customText === "string" ? customText.trim() : input.trim();
    if (!textToSend || loading) return;

    const userMessage = { role: "user", content: textToSend };
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

  const currentTourMetadata = tourStep !== -1 ? TOUR_STEPS_METADATA[tourStep] : null;
  const activeChips = currentTourMetadata ? currentTourMetadata.chips : QUICK_REPLIES;

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
        <div className={`chatbot-window ${darkMode ? "chatbot-dark" : "chatbot-light"} ${tourStep === 4 ? "tour-highlighted" : ""}`} id="tour-chatbot">
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

          {/* Quick Replies */}
          <div className="chatbot-quick-replies">
            {activeChips.map((reply, i) => (
              <button 
                key={i} 
                className="chatbot-chip" 
                onClick={() => {
                  if (tourStep !== -1) {
                    handleTourNavigation(reply);
                  } else {
                    sendMessage(reply);
                  }
                }}
                disabled={loading}
              >
                {reply}
              </button>
            ))}
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
