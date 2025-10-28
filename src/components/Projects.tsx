import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";

export function Projects() {
  const projects = [
    {
      title: "YouTube Recommender System",
      description: "A Youtube video recommendation system built utilizing Euclidean distance.",
      tags: ["Python", "Machine Learning"],
      github: "https://github.com/sloaneeliza/Youtube-Video-Recommendation-Sys"
    },
    {
      title: "Lyuna",
      description: "Mindfulness app created to help improve mental health by journaling, mood logging, breathing exercises, and more. *Demo coming soon.*",
      tags: ["Swift", "iOS Development"],
      github: "https://github.com/sloaneeliza/Lyuna"
    },
    {
      title: "MP3Player",
      description: "A simple MP3 player built using Java and external libraries.",
      tags: ["Java", "GUI", "mp3agic"],
      github: "https://github.com/sloaneeliza/MP3Player"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 relative">
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
          <h2 className="text-5xl text-center mb-12 text-white">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20 hover:bg-white/15 transition-all p-6"
              >
                <h3 className="text-lg mb-2 text-white">{project.title}</h3>
                <p className="text-white/80 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      className="bg-white/20 text-white border-0 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
