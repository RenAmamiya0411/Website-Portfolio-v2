import OnBoardImg from "../assets/projectScreenshots/OnBoard.png";
import JobTrackerImg from "../assets/projectScreenshots/JobTracker.png";
import CataLogImg from "../assets/projectScreenshots/Cata-Log.png";
import WhatToDoImg from "../assets/projectScreenshots/What-To-Do.png";
import SkyCastImg from "../assets/projectScreenshots/SkyCast.png";
import BasicWebPortImg from "../assets/projectScreenshots/Basic-Web-Port.png";
import WareFeedImg from "../assets/projectScreenshots/Warefeed.jpg";
import TaskManagerImg from "../assets/projectScreenshots/TaskManager.png";
import Lightbox from "../utilities/Lightbox";
import FlagshipCard, { type FlagshipProject } from "./FlagshipCard";
import CompactCard, { type OtherProject } from "./CompactCard";
import { useState } from "react";

const flagshipProjects: FlagshipProject[] = [
  {
    title: "OnBoard",
    problem:
      "Most to-do apps don't reflect how teams actually coordinate — task order and status need to update live across users, not on refresh.",
    keyDecision:
      "Used Socket.io alongside @dnd-kit so drag-and-drop reordering persists and syncs in real time across connected clients, rather than relying on polling or manual refresh.",
    result:
      "Deployed with production monitoring (UptimeRobot + a /health endpoint) and a seeded demo account so reviewers can try it without creating credentials.",
    tech: ["MERN", "Socket.io", "TypeScript", "@dnd-kit", "Tailwind CSS"],
    demo: "https://on-board-app-srhfalcon.vercel.app/",
    repo: "https://github.com/RenAmamiya0411/OnBoard-App",
    thumbnail: OnBoardImg
  },
  {
    title: "CataLog",
    problem:
      "Small inventories are often tracked manually or in spreadsheets, with no real-time visibility into stock levels or who changed what.",
    keyDecision:
      "Implemented JWT auth with role-based access — regular workers can view inventory, only admins can make changes — to keep stock edits accountable.",
    result:
      "Rebuilt from a v1 with no auth at all into a v2 with full authentication, a live dashboard that auto-flags items below 5 units in stock, and search/filter/pagination for scaling past a handful of products.",
    tech: ["MERN", "Tailwind CSS", "JWT"],
    demo: "https://cata-log-app-srhfalcon.vercel.app/",
    repo: "https://github.com/RenAmamiya0411/Cata-Log-Inventory-Management-System-Web-App",
    thumbnail: CataLogImg
  },
  {
    title: "Job Tracker",
    problem:
      "Job applicants tracking many applications at once typically fall back on manual methods or spreadsheets, with no dedicated app for the job.",
    keyDecision:
      "Chose Groq for the AI features (interview prep, cover letters, resume bullet improvements) since it was free/cheap and the most accessible option at the time for a personal project with no revenue.",
    result:
      "Achieved a 100/100/100 Lighthouse score across all pages after a dedicated accessibility pass, with CI/CD via GitHub Actions currently in progress.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth", "Groq"],
    demo: "https://job-tracker-srhfalcon.vercel.app/",
    repo: "https://github.com/RenAmamiya0411/Job-Tracker",
    thumbnail: JobTrackerImg
  },
  {
    title: "Task Manager",
    problem:
      "Given a fixed-deadline technical assessment for Mayan Solutions: build a full-stack task management app supporting task creation, management, and search.",
    keyDecision:
      "Prisma 7 defaulted to TypeScript syntax, incompatible with the project's JavaScript setup — downgraded to Prisma 6 to keep the stack consistent rather than losing time reworking the whole project to TypeScript under a deadline.",
    result: "Submitted a day ahead of the deadline and advanced to the next round of the hiring process.",
    tech: ["Vite", "React", "Express", "Node.js", "PostgreSQL", "Prisma"],
    demo: "https://task-manager-nu-smoky.vercel.app/",
    repo: "https://github.com/RenAmamiya0411/Task-Manager",
    thumbnail: TaskManagerImg
  }
];

const otherProjects: OtherProject[] = [
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

  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt });

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
        {flagshipProjects.map(project => (
          <FlagshipCard key={project.title} project={project} onImageClick={openLightbox} />
        ))}
      </div>

      <h3 className="text-2xl font-bold mt-16 mb-8 z-10 text-gray-400">
        Other <span className="text-red-500">Projects</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl w-full z-10">
        {otherProjects.map(project => (
          <CompactCard key={project.title} project={project} onImageClick={openLightbox} />
        ))}
      </div>

      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
    </section>
  );
}

export default Projects;
