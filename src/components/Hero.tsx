import { Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
          <h1 className="text-6xl md:text-7xl mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Hi, I'm Sloane
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Computer Science Student | Full Stack Developer | Security Analyst
          </p>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Passionate about coding and all things cybersecurity. 
            I'm always learning new things in tech everyday.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {/* View My Work */}
            <Button
              onClick={() => window.open("https://github.com/sloaneeliza", "_blank")}
              className="bg-white text-purple-600 hover:bg-white/90 shadow-lg"
              size="lg"
            >
              View My Work
            </Button>

            {/* Contact Me */}
            <Button
              onClick={() => window.location.href = "mailto:sloanewright109@gmail.com"}
              className="bg-white text-purple-600 hover:bg-white/90 shadow-lg"
              size="lg"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links — LinkedIn only */}
          <div className="flex gap-6 justify-center mt-10">
            <a 
              href="https://linkedin.com/in/sloane-wright" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
