import GradPic from "../assets/portraits/gradPic.png";
import { SiGithub } from "react-icons/si";

function Hero() {
  return (
    <section
      className="h-screen bg-black flex flex-col items-center justify-center text-white px-8 md:px-16 relative overflow-hidden"
      id="hero"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute bg-red-500 opacity-10 w-32 h-full -skew-x-12 -left-10" />
        <div className="absolute bg-red-500 opacity-10 w-16 h-full -skew-x-12 -left-24" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto z-10 gap-12">
        <div className="flex flex-col gap-4">
          <p className="text-red-500 font-bold tracking-widest uppercase text-sm">Hello, my name is</p>
          <h1 className="text-6xl font-bold">Steven Ray Harvey C. Falcon</h1>
          <h2 className="text-2xl text-gray-400">MERN Full-Stack Developer</h2>
          <p className="text-gray-400 max-w-md mt-2">
            Instrumentation and Control Engineering graduate who builds full-stack web applications with the MERN stack.
            My engineering background sharpens how I approach debugging and system design.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              className="px-6 py-3 bg-red-500 text-white font-bold hover:bg-red-600 transition-colors w-fit"
              href="#projects"
            >
              View My Work
            </a>
            <a
              className="px-6 py-3 border border-red-500 text-red-500 font-bold hover:bg-red-500 hover:text-white transition-colors"
              href="/Steven-Falcon-Resume.pdf"
              download
            >
              Download Resume
            </a>
          </div>
          <a
            className="text-red-500 hover:text-white transition-colors"
            href="https://github.com/RenAmamiya0411"
            target="_blank"
            aria-label="GitHub"
          >
            <SiGithub size={28} />
          </a>
        </div>

        <div className="border-2 border-red-500 p-1 flex-shrink-0">
          <img className="w-64 h-64 object-cover" src={GradPic} alt="Steven Falcon Graduation Picture" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
