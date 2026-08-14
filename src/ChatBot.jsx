import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import "./ChatBot.css";

const SYSTEM_PROMPT = `You are a helpful and concise AI assistant for Kesava Sravan's portfolio website. 
Your goal is to provide clear, easy-to-read answers about him based on the provided information.

You have access to tools that let you navigate and interact with the website on behalf of the user. Whenever a user asks to see a section, view projects, change the theme, or download his resume, you MUST call the appropriate tool to execute their request.

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

const BOT_TOOLS = [
  {
    type: "function",
    function: {
      name: "scroll_to_section",
      description: "Scroll the webpage to a specific section on the home page. Use this when the user asks to see, view, or look at a specific section of the profile/home page.",
      parameters: {
        type: "object",
        properties: {
          section: {
            type: "string",
            enum: ["header", "summary", "skills", "projects", "contact"],
            description: "The target section ID to scroll to."
          }
        },
        required: ["section"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "navigate_to_page",
      description: "Navigate to a different page of the website (e.g., Home page '/' or Full Projects page '/projects'). Use this when the user asks to go to the projects page or home page.",
      parameters: {
        type: "object",
        properties: {
          path: {
            type: "string",
            enum: ["/", "/projects"],
            description: "The path to navigate to."
          }
        },
        required: ["path"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "toggle_theme",
      description: "Toggle the website's theme between dark mode and light mode. Use this when the user asks to change the theme, switch to dark/light mode, etc.",
      parameters: {
        type: "object",
        properties: {}
      }
    }
  },
  {
    type: "function",
    function: {
      name: "download_resume",
      description: "Trigger the download of Kesava Sravan's PDF resume. Use this when the user asks to download, fetch, or get his resume.",
      parameters: {
        type: "object",
        properties: {}
      }
    }
  }
];

const QUICK_REPLIES = [
  "Tell me about Sravan",
  "What projects has he built?",
  "What is his backend stack?",
  "Are you open to new roles?",
];

export default function ChatBot({ darkMode, setDarkMode, isOpen: externalIsOpen, setIsOpen: setExternalIsOpen, tourStep = -1 }) {
  const [internalIsOpen, setInternalIsOpen] = useState(true);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = setExternalIsOpen !== undefined ? setExternalIsOpen : setInternalIsOpen;

  const navigate = useNavigate();
  const location = useLocation();

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

  const handleScrollToSection = (section) => {
    const sectionMap = {
      header: "tour-header",
      summary: "tour-summary",
      skills: "skills",
      projects: "tour-projects",
      contact: "contact-section"
    };

    const id = sectionMap[section];
    if (!id) return `Unknown section: ${section}`;

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        let el = document.getElementById(id);
        if (!el && section === "contact") {
          el = document.querySelector(".contact-section");
        }
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 300);
      return `Navigated to home page and scrolling to ${section} section.`;
    } else {
      let el = document.getElementById(id);
      if (!el && section === "contact") {
        el = document.querySelector(".contact-section");
      }
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        return `Successfully scrolled to the ${section} section.`;
      } else {
        return `Could not find section ${section} on page.`;
      }
    }
  };

  const handleNavigateToPage = (path) => {
    if (location.pathname !== path) {
      navigate(path);
      return `Successfully navigated to page ${path}.`;
    }
    return `Already on page ${path}.`;
  };

  const handleToggleTheme = () => {
    if (setDarkMode) {
      setDarkMode(prev => !prev);
      return "Successfully toggled website theme.";
    }
    return "Failed to toggle theme: setDarkMode function not provided.";
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}Kesava Sravan Hariyapuraju Resume.pdf`;
    link.download = "Kesava Sravan Hariyapuraju Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return "Successfully triggered resume PDF download.";
  };

  const sanitizeMessages = (msgs) => {
    return msgs.map(m => {
      const sanitized = { role: m.role };
      if (m.role === "assistant" && m.tool_calls) {
        sanitized.content = m.content || null;
        sanitized.tool_calls = m.tool_calls;
      } else if (m.role === "tool") {
        sanitized.content = m.content || "";
        sanitized.tool_call_id = m.tool_call_id;
        sanitized.name = m.name;
      } else {
        sanitized.content = m.content || "";
      }
      return sanitized;
    });
  };

  const sendMessage = async (customText) => {
    const textToSend = typeof customText === "string" ? customText.trim() : input.trim();
    if (!textToSend || loading) return;

    const userMessage = { role: "user", content: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const conversationHistory = [
        ...messages,
        userMessage
      ];

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
            ...sanitizeMessages(conversationHistory),
          ],
          tools: BOT_TOOLS,
          tool_choice: "auto"
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.error?.message || `HTTP ${response.status} Error`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const assistantMessage = data.choices?.[0]?.message;
      if (!assistantMessage) {
        throw new Error("Invalid response from API");
      }

      const toolCalls = assistantMessage.tool_calls;

      if (toolCalls && toolCalls.length > 0) {
        const assistantToolMsg = {
          role: "assistant",
          content: assistantMessage.content || "",
          tool_calls: toolCalls
        };
        
        const toolResponses = [];
        for (const toolCall of toolCalls) {
          const name = toolCall.function.name;
          const argsString = toolCall.function.arguments;
          let args = {};
          try {
            args = JSON.parse(argsString);
          } catch (e) {
            console.error("Failed to parse tool call arguments", e);
          }
          
          let resultText = "";
          try {
            if (name === "scroll_to_section") {
              resultText = handleScrollToSection(args.section);
            } else if (name === "navigate_to_page") {
              resultText = handleNavigateToPage(args.path);
            } else if (name === "toggle_theme") {
              resultText = handleToggleTheme();
            } else if (name === "download_resume") {
              resultText = handleDownloadResume();
            } else {
              resultText = `Unknown function: ${name}`;
            }
          } catch (err) {
            resultText = `Error executing tool ${name}: ${err.message}`;
          }

          toolResponses.push({
            role: "tool",
            tool_call_id: toolCall.id,
            name: name,
            content: resultText
          });
        }

        setMessages((prev) => [...prev, assistantToolMsg, ...toolResponses]);

        const secondResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
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
              ...sanitizeMessages(conversationHistory),
              {
                role: "assistant",
                content: assistantMessage.content || null,
                tool_calls: toolCalls
              },
              ...toolResponses.map(tr => ({
                role: "tool",
                tool_call_id: tr.tool_call_id,
                name: tr.name,
                content: tr.content
              }))
            ],
            tools: BOT_TOOLS
          })
        });

        if (!secondResponse.ok) {
          const errorData = await secondResponse.json().catch(() => ({}));
          const errorMessage = errorData.error?.message || `HTTP ${secondResponse.status} Error`;
          throw new Error(errorMessage);
        }

        const secondData = await secondResponse.json();
        const finalReply = secondData.choices?.[0]?.message?.content || "Action completed.";
        setMessages((prev) => [...prev, { role: "assistant", content: finalReply }]);
      } else {
        const reply = assistantMessage.content || "Sorry, I couldn't generate a response.";
        setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      }
    } catch (err) {
      console.error("ChatBot error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `Something went wrong: ${err.message}` },
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

  const activeChips = QUICK_REPLIES;

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
            {messages.filter(msg => msg.content && (msg.role === "user" || msg.role === "assistant")).map((msg, i) => (
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
                onClick={() => sendMessage(reply)}
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
