function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vite", "Tailwind CSS"]
    },
    { category: "Backend", items: ["Node.js", "Express", "RESTful API", "JWT Auth"] },
    { category: "Database", items: ["MongoDB", "MongoDB Atlas", "Mongoose"] },
    { category: "Tools", items: ["Axios", "Git/GitHub", "Vercel", "Render", "Postman"] },
    { category: "Other", items: ["Object Detection (Bounding Box)"] }
  ];
  return (
    <section
      className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-8 py-16 relative overflow-hidden"
      id="skills"
    >
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute bg-red-500 opacity-10 w-32 h-full -skew-x-12 -right-10" />
        <div className="absolute bg-red-500 opacity-10 w-16 h-full -skew-x-12 right-24" />
      </div>

      <h2 className="text-4xl font-bold mb-12 z-10">
        My <span className="text-red-500">Skills</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full z-10">
        {skills.map(group => (
          <div
            className="border border-red-500 p-6 hover:bg-red-500 hover:bg-opacity-10 transition-colors group"
            key={group.category}
          >
            <h3 className="text-red-500 font-bold text-xl mb-4 group-hover:tracking-widest transition-all duration-300">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map(skill => (
                <span
                  className="border border-red-500 text-gray-400 py-1 px-3 hover:bg-red-500 hover:text-white transition-colors"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
