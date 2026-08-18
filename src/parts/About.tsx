import Portrait from "../assets/portraits/portrait.png";

function About() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-8" id="about">
      <h2 className="text-4xl font-bold mb-8">
        About <span className="text-red-500">Me</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl w-full">
        <div className="border-2 border-red-500 p-1 flex-shrink-0">
          <img className="w-64 h-64 object-cover" src={Portrait} alt="Steven Falcon" />
        </div>
        <div className="flex flex-col gap-4 text-gray-400 text-lg leading-relaxed">
          <p>
            An Instrumentation and Control Engineering graduate with a focus on full-stack web development. Experienced
            in building full-stack web applications using the MERN stack: MongoDB, Express, React, and Node.js, with
            hands-on projects ranging from inventory management systems to AI-based object detection.
          </p>
          <p>
            Skilled in TypeScript, Tailwind CSS, and deploying applications on Vercel and Render. My engineering
            background strengthens my logical thinking and problem-solving approach to development, and I continue
            building and shipping projects to sharpen that edge further.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
