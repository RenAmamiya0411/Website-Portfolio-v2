import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

export interface FlagshipProject {
  title: string;
  problem: string;
  keyDecision: string;
  result: string;
  tech: string[];
  demo: string;
  repo: string;
  thumbnail: string;
}

interface FlagshipCardProps {
  project: FlagshipProject;
  onImageClick: (src: string, alt: string) => void;
}

function FlagshipCard({ project, onImageClick }: FlagshipCardProps) {
  return (
    <div className="border border-red-500 p-6 flex flex-col md:flex-row gap-6 hover:bg-red-500 hover:bg-opacity-10 relative hover:-translate-y-1 transition-all duration-300 group">
      <div className="absolute left-0 top-0 h-full w-1 bg-red-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

      <img
        className="w-full md:w-48 h-32 object-cover cursor-pointer flex-shrink-0"
        src={project.thumbnail}
        alt={project.title}
        onClick={() => onImageClick(project.thumbnail, project.title)}
      />

      <div className="flex flex-col justify-between gap-4 w-full">
        <div>
          <h3 className="text-xl font-bold text-red-500">{project.title}</h3>

          <div className="mt-3 flex flex-col gap-2">
            <p className="text-gray-400">
              <span className="text-red-500 font-bold">Problem: </span>
              {project.problem}
            </p>
            <p className="text-gray-400">
              <span className="text-red-500 font-bold">Key decision: </span>
              {project.keyDecision}
            </p>
            <p className="text-gray-400">
              <span className="text-red-500 font-bold">Result: </span>
              {project.result}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.tech.map(t => (
              <span className="border border-red-500 text-gray-400 py-1 px-2 text-sm" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
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
  );
}

export default FlagshipCard;
