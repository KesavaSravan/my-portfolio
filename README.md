# Kesava Sravan - Premium AI-Powered Portfolio

A highly polished, professional portfolio web application built with React, Vite, and Framer Motion. This project features a clean glassmorphism aesthetic, advanced micro-interactions, an OLED-optimized dark theme, and a fully integrated AI chatbot assistant.

## ✨ Key Features
- **Premium UI/UX Design**: Uses modern `backdrop-filter` glassmorphism, floating navigation bars, and a "Bento Box" grid layout to present information beautifully.
- **Fluid Animations**: Scroll-linked fade and stagger animations powered by `framer-motion` ensure elements organically cascade into view.
- **AI Chatbot Assistant**: Embedded conversational AI powered by Groq (`llama-3.3-70b-versatile`) acts as a personal agent, immediately answering recruiter questions about experience and skills.
- **Client-Side Routing**: Implements React Router for seamless navigation between the Home view and detailed Projects lists without reloading.
- **Dynamic Theming**: An intuitive structural toggle between deep OLED Dark mode and translucent Light mode. 

## 🛠 Tech Stack
- **Frontend Core**: React 19, React Router v7, Vite
- **Animations & UX**: Framer Motion
- **Styling**: Vanilla CSS (Global Variables, Glassmorphism utilities, CSS Grid/Flexbox)
- **Icons**: Lucide React
- **AI Integration**: Groq API 

## 🚀 Local Setup

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up Environment Variables**:
   Create a `.env` file in the root directory and add your Groq API key:
   ```env
   VITE_GROQ_API_KEY=your_groq_api_key_here
   ```
   *Note: Get your free API key at [console.groq.com](https://console.groq.com).*
4. **Run the development server**:
   ```bash
   npm run dev
   ```
5. **Build for production**:
   ```bash
   npm run build
   ```

## 🌐 Deployment (Vercel)

This application is configured with a `vercel.json` file for single-page application (SPA) routing, automatically rewriting all requests to `/index.html`.

1. Install the Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Run the deployment command from your project root:
   ```bash
   vercel
   ```
3. During setup, Vercel will prompt you to link your Environment Variables. Be sure to provide your `VITE_GROQ_API_KEY`!
4. **Production Deploy**:
   ```bash
   vercel --prod
   ```

---
*Built by Kesava Sravan.*
