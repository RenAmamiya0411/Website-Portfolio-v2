import { Briefcase, Code, Mail, User } from "lucide-react";

function Navbar() {
  return (
    <nav className="hidden md:flex left-0 top-0 h-full w-16 bg-black flex-col items-center justify-center gap-8 z-50">
      <a className="navbar-icons" href="#about">
        <User size={24} />
      </a>
      <a className="navbar-icons" href="#skills">
        <Code size={24} />
      </a>
      <a className="navbar-icons" href="#projects">
        <Briefcase size={24} />
      </a>
      <a className="navbar-icons" href="#contact">
        <Mail size={24} />
      </a>
    </nav>
  );
}

export default Navbar;
