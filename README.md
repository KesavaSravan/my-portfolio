# Kesava Sravan - Professional Portfolio

Modern, responsive professional portfolio built with React and Vite. Features a dark/light mode toggle and an integrated AI Assistant powered by Groq and the `llama-3.3-70b-versatile` model.

## Features
- **Responsive Design**: Looks great on desktop and mobile.
- **Theme Toggle**: Switch between Dark and Light mode (defaults to Dark).
- **AI Chatbot**: A slide-up AI assistant trained on Kesava's resume and experience, providing instant, conversational answers to visitors.
- **Dynamic Projects & Experience Sections**: Clear, readable layouts for showcasing professional work.
- **Resume Download**: One-click download of the PDF resume.

## Tech Stack
- Frontend: React 19, Vite
- Styling: Custom CSS (App.css, ChatBot.css), Lucide React (Icons)
- AI Integration: Groq API (`llama-3.3-70b-versatile`)

## Local Setup

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

## Deployment (Vercel)

This project is configured to deploy seamlessly to Vercel.

1. Install the Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Run the Vercel command from your project root:
   ```bash
   vercel
   ```
3. During setup, Vercel will prompt you to set your Environment Variables. Be sure to paste in your `VITE_GROQ_API_KEY`!
4. To deploy to production:
   ```bash
   vercel --prod
   ```
