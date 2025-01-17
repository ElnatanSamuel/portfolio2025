function Hero() {
  return (
    <section className="min-h-screen relative flex flex-col justify-center py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 bg-[repeating-radial-gradient(#000_2px,transparent_4px)] opacity-10 animate-noise" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/5 to-purple-900/5" />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,0,0,0.1)_50%,transparent_100%)] bg-[length:100%_4px] animate-scan" />
        <div className="absolute inset-0 animate-trackingLines">
          <div className="h-px w-full bg-white/20 transform translate-y-[50vh]" />
          <div className="h-px w-full bg-white/20 transform translate-y-[25vh]" />
        </div>
      </div>

      <div className="absolute top-4 right-4 font-mono text-red-500/80 text-sm animate-blink">
        REC 10:31:23 PM
      </div>

      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-red-500 animate-glowPulse" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-purple-500 animate-glowPulse delay-500" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto vhs-glitch">
          <div className="text-center mb-6 animate-fadeIn">
            <h1 className="text-5xl md:text-8xl font-bold glitch-text mb-4">
              <span className="block text-red-500 animate-glitchText">
                ELNATAN SAMUEL
              </span>
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-red-500 to-purple-500 animate-expand" />
          </div>

          <div className="text-center mb-12 space-y-4 animate-fadeIn animation-delay-200">
            <h2 className="text-2xl md:text-4xl font-mono text-purple-300 typewriter">
              FULL STACK DEVELOPER
            </h2>
            <p className="text-gray-400 font-mono">
              I'm a Full Stack Developer specializing in the MERN stack and a
              gaming enthusiast ready to code your next epic quest.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeIn animation-delay-300">
            <a href="#projects">
              <button className="group relative w-full sm:w-auto">
                <div className="absolute inset-0 bg-red-500 blur group-hover:blur-md transition-all" />
                <div className="relative px-8 py-4 bg-dark border border-red-500 text-red-500 font-mono hover:scale-105 transition-transform">
                  START MISSION
                  <span className="absolute top-0 left-0 w-full h-full bg-red-500/10 animate-scanline" />
                </div>
              </button>
            </a>

            <a href="#contact">
              {" "}
              <button className="group relative w-full sm:w-auto">
                <div className="absolute inset-0 bg-purple-500 blur group-hover:blur-md transition-all" />
                <div className="relative px-8 py-4 bg-dark border border-purple-500 text-purple-500 font-mono hover:scale-105 transition-transform">
                  CONTACT_ME.EXE
                  <span className="absolute top-0 left-0 w-full h-full bg-purple-500/10 animate-scanline" />
                </div>
              </button>
            </a>
          </div>

          <div className="mt-16 flex justify-center gap-8 animate-fadeIn animation-delay-500">
            {["GITHUB", "LINKEDIN", "MAIL"].map((platform) => (
              <a
                key={platform}
                href={
                  platform === "GITHUB"
                    ? "https://github.com/ElnatanSamuel"
                    : platform === "LINKEDIN"
                    ? "https://www.linkedin.com/in/elnatansamuel999/"
                    : "mailto:elnatan23samuel@gmail.com"
                }
                className="relative font-mono text-sm tracking-wider text-gray-500 hover:text-red-500 transition-colors group"
              >
                <span className="group-hover:animate-glitchText">
                  {platform}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-dark via-dark/90 to-transparent">
        <div className="absolute inset-0 opacity-5" />
      </div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce z-10 hidden lg:block">
        <div className="w-6 h-10 rounded-full border-2 border-red-500 flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-red-500 rounded-full animate-scrollMouse" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
