function Skills() {
  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vite", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "RESTful API", "JWT Auth"] },
    { category: "Database", items: ["MongoDB", "MongoDB Atlas", "Mongoose"] },
    { category: "Tools", items: ["Axios", "Git/GitHub", "Vercel", "Render", "Postman"] },
    { category: "Other", items: ["Object Detection (Bounding Box)"] }
  ];
  return (
    <section id="skills">
      <h2>
        My <span>Skills</span>
      </h2>
      <div>
        {skills.map(group => (
          <div key={group.category}>
            <h3>{group.category}</h3>
            <div>
              {group.items.map(skill => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
