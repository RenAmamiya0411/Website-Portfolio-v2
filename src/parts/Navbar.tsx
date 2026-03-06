import { Briefcase, ChevronUp, Code, Mail, User } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../assets/logos/Logo-Light-Version.png";

function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const links = [
    { href: "#about", icon: <User size={24} />, id: "about" },
    { href: "#skills", icon: <Code size={24} />, id: "skills" },
    { href: "#projects", icon: <Briefcase size={24} />, id: "projects" },
    { href: "#contact", icon: <Mail size={24} />, id: "contact" }
  ];

  return (
    <>
      <nav className="hidden md:flex fixed left-0 top-0 h-full w-16 bg-black flex-col items-center justify-center gap-8 z-50">
        <img className="absolute top-4 w-15 h-15 object-contain" src={Logo} alt="Logo" />
        {links.map(link => (
          <a
            className={`transition-colors ${active === link.id ? "text-red-500" : "text-white hover:text-red-500"}`}
            href={link.href}
            key={link.id}
          >
            {link.icon}
          </a>
        ))}

        <a className="absolute bottom-4 text-white hover:text-red-500 transition-colors" href="#hero">
          <ChevronUp size={24} />
        </a>
      </nav>

      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-black flex justify-around items-center py-4 z-50">
        <img className="w-8 h-8 object-contain" src={Logo} alt="Logo" />
        {links.map(link => (
          <a
            className={`transition-colors ${active === link.id ? "text-red-500" : "text-white hover:text-red-500"}`}
            href={link.href}
            key={link.id}
          >
            {link.icon}
          </a>
        ))}
        <a className="text-white hover:text-red-500 transition-colors" href="#hero">
          <ChevronUp size={24} />
        </a>
      </nav>
    </>
  );
}

export default Navbar;
