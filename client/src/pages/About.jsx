export default function About() {
  return (
    <div className="pt-16 h-[72vh] flex flex-col justify-center">
      <section className="bg-base-200 py-16 flex-1">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-base-content/70 max-w-3xl">
            I’m a MERN Stack Developer with a passion for creating clean, modern,
            and efficient web applications. I love solving complex problems and
            building user-friendly solutions that have a real impact.
          </p>

          <h2 className="text-2xl font-semibold mt-10">Skills & Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
            {[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Tailwind CSS",
              "JavaScript",
              "WebSockets",
              "Git & GitHub"
            ].map((skill) => (
              <div
                key={skill}
                className="bg-base-100 p-4 rounded-lg shadow text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 