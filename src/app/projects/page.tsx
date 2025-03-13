const projects = [
    { title: "AI Chatbot", description: "An AI-powered chatbot using OpenAI.", link: "#" },
    { title: "E-Commerce Store", description: "A full-stack store with Stripe payments.", link: "#" }
  ];
  
  export default function Projects() {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold">Projects</h1>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-secondary text-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              <a href={project.link} className="text-primary mt-2 inline-block">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  