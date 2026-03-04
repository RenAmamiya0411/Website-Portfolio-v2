import { useEffect, useState } from "react";

function Hero() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="h-screen bg-black flex flex-col items-center justify-center text-white px-8 relative overflow-hidden"
      id="hero"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute bg-red-500 opacity-10 w-32 h-full -skew-x-12 -left-10" />
        <div className="absolute bg-red-500 opacity-10 w-16 h-full -skew-x-12 -left-24" />
      </div>

      <h1 className="text-6xl font-bold text-center z-10">
        Hello, my name is <span className="text-red-500">Joker</span>
        <span className={`text-red-500 ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
      </h1>
      <p className="mt-4 max-w-xl text-center text-gray-400 z-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, earum. Hic eligendi placeat, non id labore at.
        Eius magni nam velit commodi at quaerat autem, deserunt obcaecati, rerum, explicabo laboriosam?
      </p>
      <a
        className="mt-8 px-6 py-3 bg-red-500 text-white font-bold hover:bg-red-600 transition-colors z-10"
        href="#projects"
      >
        View My Work
      </a>
    </section>
  );
}

export default Hero;
