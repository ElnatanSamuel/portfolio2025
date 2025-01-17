function Skills() {
  const skills = {
    "FRONTEND": ["React","React Native","Svelte", "JavaScript", "Typescript", "Tailwind", "Redux"],
    "BACKEND": ["Node.js", "Express", "Python", "MongoDB"],
    "TOOLS": ["Git", "Docker", "Figma"]
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
      
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="relative inline-block">
            <span className="relative z-10 font-mono text-red-500 animate-glitchText">INVENTORY</span>
            <div className="absolute inset-0 bg-purple-500/20 -skew-y-3" />
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} 
              className="group bg-dark/80 border border-red-500/20 hover:border-red-500/50 
                transition-all duration-500 p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-purple-500/10 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-xl font-mono font-bold mb-6 text-red-500 relative z-10">{category}</h3>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {skillList.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-purple-500/10 text-purple-300 font-mono text-sm 
                      border border-purple-500/20 hover:border-purple-500/50 transition-all
                      hover:translate-x-1 hover:-translate-y-1 duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
