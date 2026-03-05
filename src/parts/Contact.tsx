import { SiGmail, SiGithub } from "react-icons/si";
import { FaLinkedin, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section
      className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-8 py-16 relative overflow-hidden"
      id="contact"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute bg-red-500 opacity-10 w-16 h-full -skew-x-12 -left-10" />
        <div className="absolute bg-red-500 opacity-10 w-8 h-full -skew-x-12 left-12" />
        <div className="absolute bg-red-500 opacity-10 w-4 h-full -skew-x-12 left-14" />
      </div>

      <h2 className="text-4xl font-bold mb-12 z-10">
        Get In <span className="text-red-500">Touch</span>
      </h2>
      <p className="text-gray-400 mb-12 text-center max-w-md z-10">
        Feel free to reach out for collaborations, opportunities, or just a chat!{" "}
      </p>
      <div className="flex flex-col gap-6 max-w-md w-full z-10">
        <a
          className="flex items-center gap-4 border border-red-500 px-6 py-4 hover:bg-red-500 group hover:translate-x-2 transition-all duration-300"
          href="mailto:falconsteven25@gmail.com"
          target="_blank"
        >
          <SiGmail className="text-red-500 group-hover:text-white transition-colors" size={24} />
          <span className="text-gray-400 group-hover:text-white transition-colors">falconsteven25@gmail.com</span>
        </a>
        <a
          className="flex items-center gap-4 border border-red-500 px-6 py-4 hover:bg-red-500 group hover:translate-x-2 transition-all duration-300"
          href="https://github.com/RenAmamiya0411"
          target="_blank"
        >
          <SiGithub className="text-red-500 group-hover:text-white transition-colors" size={24} />
          <span className="text-gray-400 group-hover:text-white transition-colors">
            https://github.com/RenAmamiya0411
          </span>
        </a>
        <a
          className="flex items-center gap-4 border border-red-500 px-6 py-4 hover:bg-red-500 group hover:translate-x-2 transition-all duration-300"
          href="https://www.linkedin.com/in/steven-ray-harvey-falcon-62479b35b/"
          target="_blank"
        >
          <FaLinkedin className="text-red-500 group-hover:text-white transition-colors" size={24} />
          <span className="text-gray-400 group-hover:text-white transition-colors">
            https://www.linkedin.com/in/steven-ray-harvey-falcon-62479b35b/
          </span>
        </a>
        <a
          className="flex items-center gap-4 border border-red-500 px-6 py-4 hover:bg-red-500  group hover:translate-x-2 transition-all duration-300"
          href="tel:+639295410786"
          target="_blank"
        >
          <FaPhone className="text-red-500 group-hover:text-white transition-colors" size={24} />
          <span className="text-gray-400 group-hover:text-white transition-colors">+639295410786</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
