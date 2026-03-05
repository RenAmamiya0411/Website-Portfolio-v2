import { useEffect, useState } from "react";
import GradPic from "../assets/portraits/gradPic.png";

const titles = ["Full Stack Developer", "Frontend Developer", "Backend Developer"];

function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 100);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 50);
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex(prev => (prev + 1) % titles.length);
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

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
          <h1 className="text-6xl font-bold">Joker</h1>
          <h2 className="text-2xl text-gray-400">
            {displayed}
            <span className="text-red-500 animate-pulse">|</span>
          </h2>
          <p className="text-gray-400 max-w-md mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum sapiente esse quidem soluta optio quos
            inventore nisi, debitis ab ad rerum aspernatur consequatur, nihil repellendus? A sequi hic itaque
            praesentium.
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
              href="/testCV.pdf"
              download
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="border-2 border-red-500 p-1 flex-shrink-0">
          <img className="w-64 h-64 object-cover" src={GradPic} alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
