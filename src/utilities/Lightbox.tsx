import { useEffect } from "react";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-[9999]"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full px-8" onClick={e => e.stopPropagation()}>
        <button
          className="absolute -top-10 right-8 text-white hover:text-red-500 transition-colors font-bold text-xl"
          onClick={onClose}
        >
          ESC (X)
        </button>
        <img className="w-full object-contain border border-red-500" src={src} alt={alt} />
      </div>
    </div>
  );
}

export default Lightbox;
