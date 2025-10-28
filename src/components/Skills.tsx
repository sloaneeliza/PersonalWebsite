import { Badge } from "./ui/badge";

export function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java","JavaScript", "Python","C++", "SQL"]
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "HTML/CSS"]
    },
    {
      category: "Backend",
      skills: ["Node.js","Docker","AWS"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Linux", "Wireshark", "Blender"]
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 relative">
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
          <h2 className="text-5xl text-center mb-12 text-white">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20"
              >
                <h3 className="text-xl mb-5 text-white">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      className="px-3 py-1 bg-white/20 text-white border-0"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
