import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      title: "Nest & Noir - Modern Furniture E-commerce Platform",
      description:
        "A luxury furniture e-commerce platform built with React.js, featuring a responsive design with dark mode support, product filtering, and Redux-powered shopping cart. Includes an admin dashboard with real-time sales analytics and inventory management. Built using React, Redux Toolkit, Tailwind CSS, and Chart.js",
      tech: ["React", "Chart.js", "Redux Toolkit", "TailwindCSS"],
      image: "/nestnoir.png",
      github: "https://github.com/ElnatanSamuel/ecom-app",
      live: "https://ecom-app-drab.vercel.app/",
      hasDetails: false,
    },
    {
      title: "Nest & Noir - Admin Dashboard",
      description:
        "A React-based admin dashboard featuring real-time analytics and comprehensive product management. Built with Chart.js for data visualization, the dashboard displays key metrics including sales trends, inventory levels, and category distribution. Features include dark/light mode toggle, collapsible sidebar navigation, and a responsive design using Tailwind CSS. The interface allows admins to manage featured products, track top-selling items, and monitor monthly revenue through an intuitive, data-driven interface.",
      tech: [
        "React",
        "ExpressJS",
        "MongoDB",
        "Chart.js",
        "TailwindCSS",
        "JWT",
        "AWS",
      ],
      image: "/nestdash.png",
      github: "https://github.com/ElnatanSamuel/ecom-app",
      live: "https://ecom-app-drab.vercel.app/admin/login",
      hasDetails: false,
    },
    {
      title: "Conify Mobile App",
      description:
        "Conify is a sophisticated mobile application designed to streamline construction project management. Built with React Native, it provides real-time project tracking, resource management, and team collaboration capabilities.",
      tech: ["React Native", "Typescript", "GraphQL", "Apollo"],
      image: "/conify.png",
      hasDetails: true,
      detailsLink: "/project/conify",
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden bg-dark py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="relative inline-block">
            <span className="relative z-10 font-mono text-red-500 animate-glitchText">
              FEATURED MISSIONS
            </span>
            <div className="absolute inset-0 bg-purple-500/20 -skew-y-3" />
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-dark/80 border border-red-500/20 hover:border-red-500/50 
                transition-all duration-500 overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-purple-500/10 opacity-0 
                group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="p-6 relative z-10">
                <div className="overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 
                      transition-transform duration-500 opacity-75 group-hover:opacity-100"
                  />
                </div>

                <h3 className="text-2xl font-mono text-red-500 mb-2 group-hover:animate-glitchText">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 font-mono">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/10 text-purple-300 font-mono text-sm border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.hasDetails ? (
                    <Link
                      to={project.detailsLink}
                      className="text-red-500 hover:text-purple-500 transition-colors font-mono group"
                    >
                      VIEW_DETAILS →
                    </Link>
                  ) : (
                    <>
                      <a
                        href={project.github}
                        className="text-red-500 hover:text-purple-500 transition-colors font-mono group"
                      >
                        VIEW_SOURCE →
                      </a>
                      <a
                        href={project.live}
                        className="text-red-500 hover:text-purple-500 transition-colors font-mono group"
                      >
                        LIVE_DEMO →
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
