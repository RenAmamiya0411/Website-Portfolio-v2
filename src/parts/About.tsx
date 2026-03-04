import GradPic from "../assets/portraits/gradPic.png";

function About() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-8" id="about">
      <h2 className="text-4xl font-bold mb-8">
        About <span className="text-red-500">Me</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl w-full">
        <div className="border-2 border-red-500 p-1 flex-shrink-0">
          <img className="w-64 h-64 object-cover" src={GradPic} alt="Profile" />
        </div>
        <div className="flex flex-col gap-4 text-gray-400 text-lg leading-relaxed">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus similique maiores sit sint et asperiores
            nisi est placeat neque officiis repudiandae, totam officia maxime consequatur odit amet quibusdam fugiat
            non!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus similique maiores sit sint et asperiores
            nisi est placeat neque officiis repudiandae, totam officia maxime consequatur odit amet quibusdam fugiat
            non!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
