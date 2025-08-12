import ProjectContainer from "../components/ProjectContainer";

export default function Projects() {
  return (
    <div className="pt-16">
      <section className="bg-base-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Projects</h1>
          <p className="text-base-content/70">
            Here are some of my featured projects.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <ProjectContainer />
          </div>
        </div>
      </section>
    </div>
  );
}
