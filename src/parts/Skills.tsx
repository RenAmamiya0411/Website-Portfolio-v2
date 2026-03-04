function Skills() {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vite", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "RESTful API", "JWT Auth"] },
    { category: "Database", items: ["MongoDB", "MongoDB Atlas", "Mongoose"] },
    { category: "Tools", items: ["Axios", "Git/GitHub", "Vercel", "Render", "Postman"] },
    { category: "Other", items: ["Object Detection (Bounding Box)"] }
  ];
  return (
    <section
      className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-8 py-16"
      id="skills"
    >
      <h2 className="text-4xl font-bold mb-12">
        My <span className="text-red-500">Skills</span>
      </h2>
      <div className="grid grid-cols-1 md:grip-cols-2 gap-8 max-w-3xl w-full">
        {skills.map(group => (
          <div key={group.category}>
            <h3 className="text-red-500 font-bold text-xl mb-4">{group.category}</h3>
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
