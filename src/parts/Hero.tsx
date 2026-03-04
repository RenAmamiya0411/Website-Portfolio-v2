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
    <section className="h-screen bg-black flex flex-col items-center justify-center text-white px-8" id="hero">
      <h1 className="text-6xl font-bold text-center">
        Hello, my name is <span className="text-red-500">Joker</span>
        <span className={`text-red-500 ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
      </h1>
      <p className="mt-4 max-w-xl text-center text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, earum. Hic eligendi placeat, non id labore at.
        Eius magni nam velit commodi at quaerat autem, deserunt obcaecati, rerum, explicabo laboriosam?
      </p>
      <a className="mt-8 px-6 py-3 bg-red-500 text-white font-bold hover:bg-red-600 transition-colors" href="#projects">
        View My Work
      </a>
    </section>
  );
}

export default Hero;
