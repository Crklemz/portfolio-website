export default function About() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="mt-4 text-lg">
                I'm a full-stack software engineer with a passion for building scalable web applications.
                I specialize in **React, Next.js, Django, and cloud technologies**.
                Currently, I’m working on projects involving **AI integration, automation, and full-stack development**,
                while continuously learning and improving my skills.

                When I'm not coding, I enjoy exploring new tech, building side projects, and improving my craft.
            </p>
            <h2 className="text-2xl font-bold mt-6">Tech Stack</h2>
            <div className="flex space-x-4 mt-2">
                <span className="bg-accent text-white px-4 py-2 rounded">React</span>
                <span className="bg-accent text-white px-4 py-2 rounded">Next.js</span>
                <span className="bg-accent text-white px-4 py-2 rounded">Django</span>
            </div>
        </div>
    );
}

