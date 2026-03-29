import WareFeedImg from "../assets/projectScreenshots/Warefeed.jpg";
import BasicWebPortImg from "../assets/projectScreenshots/Basic-Web-Port.png";
import SkyCastImg from "../assets/projectScreenshots/SkyCast.png";
import CataLogImg from "../assets/projectScreenshots/Cata-Log.png";
import WhatToDoImg from "../assets/projectScreenshots/What-To-Do.png";
import Lightbox from "../utilities/Lightbox";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    title: "CataLog",
    description:
      "A full-stack inventory management system built with the MERN stack. Features JWT authentication with role-based access control, a live dashboard with low stock alerts, search/filter/pagination, skeleton loading states, toast notifications, and a responsive dark UI with a mobile bottom navbar.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Git"],
    demo: "https://cata-log-app-srhfalcon.vercel.app/",
    repo: "https://github.com/RenAmamiya0411/Cata-Log-Inventory-Management-System-Web-App",
    thumbnail: CataLogImg
  },
  {
    title: "What-To-Do",
    description:
      "A MERN stack app with TypeScript and JWT auth. Users manage private to-do lists with priority levels, due dates, overdue highlighting, and filtering.",
    tech: ["JWT Auth", "TypeScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Git"],
    demo: "https://srhfalcon-what-to-do-app.vercel.app/",
    repo: "https://github.com/RenAmamiya0411/What-To-Do-App",
    thumbnail: WhatToDoImg
  },
  {
    title: "SkyCast",
    description:
      "A React weather app using the OpenWeatherMap API. Search any city for real-time weather, toggle between Celsius and Fahrenheit, and view recent searches.",
    tech: ["Git", "React", "RESTful API"],
    demo: "https://skycast-weather-app-srhfalcon.vercel.app/",
    repo: "https://github.com/RenAmamiya0411/Weather-App",
    thumbnail: SkyCastImg
  },
  {
    title: "Basic Website Portfolio",
    description: "A personal portfolio website built with React, showcasing projects and skills as a web developer.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Vercel", "Git"],
    demo: "https://srhfalcon-basic-website-portfolio.vercel.app/",
    repo: "https://github.com/RenAmamiya0411/Website-Portfolio",
    thumbnail: BasicWebPortImg
  },
  {
    title: "WareFeed",
    description:
      "An AI-based management system built for a local rice mill. Detects rice sacks to automatically update inventory, and sends automated notifications and alerts via email.",
    tech: ["Python", "Object Detection (Bounding Box)", "Raspberry Pi 5"],
    demo: "https://www.youtube.com/watch?v=pA8ZL1sHOxg",
    repo: "https://github.com/RenAmamiya0411/WareFeed",
    thumbnail: WareFeedImg
  }
];

function Projects() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section
      className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-8 py-16 relative overflow-hidden"
      id="projects"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute bg-red-500 opacity-10 w-32 h-full -skew-x-12 -left-10" />
        <div className="absolute bg-red-500 opacity-10 w-16 h-full -skew-x-12 left-24" />
        <div className="absolute bg-red-500 opacity-10 w-32 h-full -skew-x-12 -right-10" />
        <div className="absolute bg-red-500 opacity-10 w-16 h-full -skew-x-12 right-24" />
      </div>

      <h2 className="text-4xl font-bold mb-12 z-10">
        My <span className="text-red-500">Projects</span>
      </h2>
      <div className="flex flex-col gap-8 max-w-3xl w-full z-10">
        {projects.map(project => (
          <div
            className="border border-red-500 p-6 flex flex-col md:flex-row gap-6 hover:bg-red-500 hover:bg-opacity-10 relative hover:-translate-y-1 transition-all duration-300 group"
            key={project.title}
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-red-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
            <img
              className="w-full md:w-48 h-32 object-cover cursor-pointer"
              src={project.thumbnail}
              alt={project.title}
              onClick={() => setLightbox({ src: project.thumbnail, alt: project.title })}
            />
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
                <a
                  className="flex items-center gap-2 text-red-500 hover:text-white transition-colors font-bold"
                  href={project.demo}
                  target="_blank"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  className="flex items-center gap-2 text-red-500 hover:text-white transition-colors font-bold"
                  href={project.repo}
                  target="_blank"
                >
                  <SiGithub size={16} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
    </section>
  );
}

export default Projects;
