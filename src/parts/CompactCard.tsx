import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

export interface OtherProject {
  title: string;
  description: string;
  tech: string[];
  demo: string;
  repo: string;
  thumbnail: string;
}

interface CompactCardProps {
  project: OtherProject;
  onImageClick: (src: string, alt: string) => void;
}

function CompactCard({ project, onImageClick }: CompactCardProps) {
  return (
    <div className="border border-red-500 p-4 flex flex-col gap-3 hover:bg-red-500 hover:bg-opacity-10 hover:-translate-y-1 transition-all duration-300 group">
      <img
        className="w-full h-32 object-cover cursor-pointer"
        src={project.thumbnail}
        alt={project.title}
        onClick={() => onImageClick(project.thumbnail, project.title)}
      />

      <div className="flex flex-col gap-2">
        <h4 className="text-lg font-bold text-red-500">{project.title}</h4>
        <p className="text-gray-400 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span className="border border-red-500 text-gray-400 py-0.5 px-2 text-xs" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-1">
          <a
            className="flex items-center gap-1 text-red-500 hover:text-white transition-colors font-bold text-sm"
            href={project.demo}
            target="_blank"
          >
            <ExternalLink size={14} />
            Demo
          </a>
          <a
            className="flex items-center gap-1 text-red-500 hover:text-white transition-colors font-bold text-sm"
            href={project.repo}
            target="_blank"
          >
            <SiGithub size={14} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default CompactCard;
