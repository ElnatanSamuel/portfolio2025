function Experience() {
  const experiences = [
    {
      role: "FRONTEND DEVELOPER",
      company: "ALE INTERIOR",
      period: "08/2023 - 02/2024",
      description:
        "Built a website for a local interior design store using React, TailwindCSS and Sanity CMS for content management.",
      achievements: [
        "Designed and built responsive user interfaces with React, handling the entire front-end process from start to finish.",
        "Integrated Sanity CMS for efficient content management and real-time updates.",
        "Optimized performance and implemented SEO best practices for better search engine rankings",
      ],
    },
    {
      role: "AI ENGINEER",
      company: "iCog Labs",
      period: "08/2024 - 12/2024",
      description:
        "Worked on training AI models and researching AGI concepts for different projects.",
      achievements: [
        "Trained and executed AI models with various datasets.",
        "Researched AGI concepts to help with increasing intelligence of LLMs.",
        "Researched Deep Learning and Reinforcement Learning concepts and they can closely resemble the human brain.",
        "Worked on creating a knowledge graph and data filtration/cleaning to populate the companies database.",
      ],
    },
    {
      role: "MOBILE APP DEVELOPER",
      company: "BIMACON",
      description:
        "Built a mobile app for a client in the construction industry to help with managing their projects.",
      achievements: [
        "Used react native to build a cross platform mobile app for construction management.",
        "Inegrated a graphql api to fetch data from the backend.",
        "Helped with design changes and user experience testing",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="relative inline-block">
            <span className="relative z-10 font-mono text-red-500 animate-glitchText">
              ACTIVITY LOG
            </span>
            <div className="absolute inset-0 bg-purple-500/20 -skew-y-3" />
          </span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Vertical line with glowing effect */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-red-500 via-purple-500 to-red-500 animate-glowPulse" />

              <div
                className="ml-8 bg-dark/80 border border-red-500/20 hover:border-red-500/50 
                transition-all duration-500 p-6 relative overflow-hidden group"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-purple-500/10 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative z-10">
                  <h3 className="text-2xl font-mono text-red-500 mb-1 group-hover:animate-glitchText">
                    {exp.role}
                  </h3>
                  <p className="text-purple-400 font-mono mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 font-mono mb-4">{exp.period}</p>
                  <p className="text-gray-400 font-mono mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-gray-400 font-mono flex items-center gap-2"
                      >
                        <span className="text-red-500">►</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
