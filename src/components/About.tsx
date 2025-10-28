import { Code2, Sparkles, Rocket } from "lucide-react";
import mePhoto from "./figma/me.jpg";
import { ImageWithFallback } from "./figma/ImageWithFallback";


export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "I believe in writing maintainable, scalable, and well-documented code."
    },
    {
      icon: Sparkles,
      title: "Creative Solutions",
      description: "Combining technical skills with creative thinking to solve real-world problems."
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Always excited to learn new technologies and stay current with industry trends."
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 relative">
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
          <h2 className="text-5xl text-center mb-12 text-white">
            About Me
          </h2>
          
          {/* Profile Photo */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm bg-white/20">
                <img
                   src={mePhoto}
                   alt="My Profile Photo"
                   className="w-full h-full object-cover"/>
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg mb-2 text-white">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="space-y-4 text-white/90">
            <p className="text-lg leading-relaxed">
              I'm a Computer Science student with a passion for building innovative applications, analyzing vulnerable 
              security issues, and exploring new technologies. My journey in tech started when I was a child and has
              now evolved to a deep fascination with developing software, creating fun and interactive apps, and a love
              for all things cybersecurity.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me playing video games, watercolor painting, tinkering with computer 
              hardware, or spending time with my cat, Tulip.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
