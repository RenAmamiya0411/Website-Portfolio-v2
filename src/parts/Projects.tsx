import WareFeed from "../assets/projectScreenshots/Warefeed.jpg";
import BasicWebPort from "../assets/projectScreenshots/Basic-Web-Port.png";
import SkyCast from "../assets/projectScreenshots/SkyCast.png";
import CataLog from "../assets/projectScreenshots/Cata-Log.png";
import WhatToDo from "../assets/projectScreenshots/What-To-Do.png";

const projects = [
  {
    title: "WareFeed",
    description:
      "An Artificial Intelligence-Base Management System for Bless Rice Mill. In Partial Fulfillment of the Requirements for the Degree of Bachelor of Science in Instrumentation and Control Engineering",
    tech: ["Python", "Object Detection (Bounding Box)", "Raspberry Pi 5"],
    demo: "https://www.youtube.com/watch?v=pA8ZL1sHOxg",
    repo: "https://github.com/RenAmamiya0411/WareFeed",
    thumbnail: WareFeed
  },
  {
    title: "Basic Website Portfolio",
    description:
      "Creating a basic website portfolio for the purpose of testing out what I've learned so far in React & Git",
    tech: ["HTML", "CSS", "JavaScript", "React", "Vercel", "Git"],
    demo: "https://srhfalcon-basic-website-portfolio.vercel.app/",
    repo: "https://github.com/RenAmamiya0411/Website-Portfolio",
    thumbnail: BasicWebPort
  },
  {
    title: "SkyCast",
    description: "A Weather App made to practice working with APIs and to further improve my React and Git skills.",
    tech: ["Git", "React", "RESTful API"],
    demo: "https://skycast-weather-app-srhfalcon.vercel.app/",
    repo: "https://github.com/RenAmamiya0411/Weather-App",
    thumbnail: SkyCast
  },
  {
    title: "CataLog",
    description:
      "An Inventory Management System Web App made to practice my skills and knowledge on MERN tech stack and TailwindCSS.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Git"],
    demo: "https://srhfalcon-basic-website-portfolio.vercel.app/",
    repo: "https://github.com/RenAmamiya0411/Cata-Log-Inventory-Management-System-Web-App",
    thumbnail: CataLog
  },
  {
    title: "What-To-Do",
    description:
      "Creating a basic website portfolio for the purpose of testing out what I've learned so far in React & Git",
    tech: ["JWT Auth", "TypeScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Git"],
    demo: "https://srhfalcon-what-to-do-app.vercel.app/",
    repo: "https://github.com/RenAmamiya0411/What-To-Do-App",
    thumbnail: WhatToDo
  }
];

function Projects() {
  return (
    <section
      className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-8 py-16"
      id="projects"
    >
      <h2 className="text-4xl font-bold mb-12">
        My <span className="text-red-500">Projects</span>
      </h2>
      <div className="flex flex-col gap-8 max-w-3xl w-full">
        {projects.map(project => (
          <div
            className="border border-red-500 p-6 flex flex-col md:flex-row gap-6 hover:bg-red-500 hover:bg-opacity-10 transition-colors"
            key={project.title}
          >
            <img className="w-full md:w-48 h-32 object-cover" src={project.thumbnail} alt={project.title} />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-red-500">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map(t => (
                    <span className="border border-red-500 text-gray-400 py-1 px-2 text-sm" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <a className="text-red-500 hover:text-white transition-colors font-bold" href={project.demo}>
                  Live Demo
                </a>
                <a className="text-red-500 hover:text-white transition-colors font-bold" href={project.repo}>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
