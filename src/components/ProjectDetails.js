import { useParams, Link } from "react-router-dom";
import screen1 from "../assets/screen1.jpg";
import screen2 from "../assets/screen2.jpg";
import screen3 from "../assets/screen3.jpg";
import screen4 from "../assets/screen4.jpg";
import screen5 from "../assets/screen5.jpg";
import screen6 from "../assets/screen6.jpg";
import demoVideo from "../assets/vid1.mp4";

function ProjectDetails() {
  const { id } = useParams();

  const projectData = {
    conify: {
      title: "CONIFY MOBILE APP",
      description:
        "A sophisticated mobile application designed to streamline construction project management...",
      tech: ["React Native", "Typescript", "GraphQL", "Apollo"],
      images: [screen5, screen2, screen3, screen1, screen6],
      videoUrl: demoVideo,
      features: [
        "Real-time project tracking",
        "Resource management",
        "Team collaboration",
        "Document management",
        "Real-time chat",
        "Task management",
        "Reporting and analytics",
        "User authentication",
        "Notifications",
      ],
    },
  };

  // Get the project data based on the ID parameter
  const project = projectData[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <Link
        to="/"
        className="absolute top-8 left-8 text-red-500 hover:text-purple-500 transition-colors font-mono group z-20"
      >
        ← BACK_TO_HOME
      </Link>

      <div className="absolute inset-0 bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="relative inline-block">
            <span className="relative z-10 font-mono text-red-500 animate-glitchText">
              {project.title}
            </span>
            <div className="absolute inset-0 bg-purple-500/20 -skew-y-3" />
          </span>
        </h2>

        {/* Project content */}
        <div className="space-y-12">
          {/* Video section */}
          <div className="aspect-video bg-dark/80 border border-red-500/20 overflow-hidden">
            <video
              autoPlay
              muted
              loop
              controls
              className="w-full h-full object-contain"
              controlsList="nodownload"
              playsInline
              preload="auto"
            >
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Screenshots grid */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {projectData.conify.images.map((img, index) => (
              <div
                key={index}
                className="border border-red-500/20 overflow-hidden  bg-dark/50"
              >
                <img
                  src={img}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load image: ${img}`);
                    e.target.src = "/fallback-image.png"; // Optional fallback image
                  }}
                />
              </div>
            ))}
          </div>

          {/* Features list */}
          <div className="bg-dark/80 border border-red-500/20 p-6">
            <h3 className="text-2xl font-mono text-red-500 mb-4">FEATURES</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-gray-400 font-mono flex items-center gap-2"
                >
                  <span className="text-red-500">►</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
