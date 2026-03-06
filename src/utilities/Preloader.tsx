import { useEffect, useState } from "react";
import Logo from "../assets/logos/Logo-Light-Version.png";

function Preloader({ onComplete }: { onComplete: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    const complete = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(complete);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-[9999] transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <div className="flex flex-col items-center gap-4">
        <img className="w-48 h-48 object-contain" src={Logo} alt="Logo" />
        <h1 className="text-6xl font-bold text-white">STEVEN FALCON</h1>
        <div className="w-48 h-1 bg-gray-800 overflow-hidden">
          <div className="h-full bg-red-500 animate-[loading_2s_ease-in-out_forwards]" />
        </div>
      </div>
    </div>
  );
}

export default Preloader;
