import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Global Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 -z-10" />
      
      {/* Animated gradient orbs */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse -z-10" />
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-700 -z-10" />
      <div className="fixed top-1/2 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-500 -z-10" />
      <div className="fixed bottom-1/3 left-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse delay-300 -z-10" />
      
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="relative bg-black/20 backdrop-blur-sm text-white/70 py-8 text-center border-t border-white/10">
        <p>© 2025 Sloane Wright. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
