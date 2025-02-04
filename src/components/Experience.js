function Experience() {
  const experiences = [
    {
      role: "FRONTEND DEVELOPER",
      company: "ALE INTERIOR",
      period: "06/2023 - 12/2023",
      achievements: [
        "Designed and developed responsive user interfaces using React, managing the full frontend development lifecycle",
        "Integrated Sanity CMS to enhance content management efficiency for clients.",
        "Focused on performance optimization, creating fast, scalable websites with exceptional user experiences.",
      ],
    },
    {
      role: "AI RESEARCH INTERN",
      company: "iCog Labs",
      period: "08/2024 - 11/2024",
      achievements: [
        "Trained and implemented AI models using diverse datasets.",
        "Conducted research on AGI concepts to improve LLM intelligence",
        "Explored Deep Learning and Reinforcement Learning principles to model human-like intelligence.",
        "Developed a knowledge graph and cleaned datasets to populate the company’s database.",
      ],
    },
    {
      role: "MOBILE APP DEVELOPER",
      company: "BIMACON CONSTRUCTION",
      period: "09/2024 - 12/2024",
      achievements: [
        "Developed a cross-platform construction management app using React Native.",
        "Integrated a GraphQL API to streamline backend data retrieval.",
        "Contributed to design improvements and conducted user experience testing.",
      ],
    },
    {
      role: "WEB DEVELOPMENT TRAINER",
      company: "ABOL ACADEMY",
      period: "12/2024",
      achievements: [
        "Created structured learning modules and documentation to guide students in web development.",
        "Provided hands-on training and online support, ensuring student success in frontend and backend technologies.",
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
