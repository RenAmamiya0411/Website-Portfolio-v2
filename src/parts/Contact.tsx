import { SiGmail, SiGithub } from "react-icons/si";
import { FaLinkedin, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section
      className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-8 py-16"
      id="contact"
    >
      <h2 className="text-4xl font-bold mb-12">
        Get In <span className="text-red-500">Touch</span>
      </h2>
      <div className="flex flex-col gap-6 max-w-md w-full">
        <a
          className="flex items-center gap-4 border border-red-500 px-6 py-4 hover:bg-red-500 transition-colors group"
          href="mailto:falconsteven25@gmail.com"
          target="_blank"
        >
          <SiGmail className="text-red-500 group-hover:text-white transition-colors" size={24} />
          <span className="text-gray-400 group-hover:text-white transition-colors">falconsteven25@gmail.com</span>
        </a>
        <a
          className="flex items-center gap-4 border border-red-500 px-6 py-4 hover:bg-red-500 transition-colors group"
          href="https://github.com/RenAmamiya0411"
          target="_blank"
        >
          <SiGithub className="text-red-500 group-hover:text-white transition-colors" size={24} />
          <span className="text-gray-400 group-hover:text-white transition-colors">
            https://github.com/RenAmamiya0411
          </span>
        </a>
        <a
          className="flex items-center gap-4 border border-red-500 px-6 py-4 hover:bg-red-500 transition-colors group"
          href="https://www.linkedin.com/in/steven-ray-harvey-falcon-62479b35b/"
          target="_blank"
        >
          <FaLinkedin className="text-red-500 group-hover:text-white transition-colors" size={24} />
          <span className="text-gray-400 group-hover:text-white transition-colors">
            https://www.linkedin.com/in/steven-ray-harvey-falcon-62479b35b/
          </span>
        </a>
        <a
          className="flex items-center gap-4 border border-red-500 px-6 py-4 hover:bg-red-500 transition-colors group"
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
