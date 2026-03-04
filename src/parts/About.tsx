function About() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-8" id="about">
      <h2 className="text-4xl font-bold mb-8">
        About <span className="text-red-500">Me</span>
      </h2>
      <div className="max-w-2xl text-center">
        <p className="text-gray-400 text-lg leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus similique maiores sit sint et asperiores
          nisi est placeat neque officiis repudiandae, totam officia maxime consequatur odit amet quibusdam fugiat non!
        </p>
      </div>
    </section>
  );
}

export default About;
