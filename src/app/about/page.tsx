import ReactMarkdown from "react-markdown";

const markdownContent = `
# About Me

I'm a full-stack software engineer with a passion for building scalable web applications.  
I specialize in **React, Next.js, Django, and cloud technologies**.  
Currently, I’m working on projects involving **AI integration, automation, and full-stack development**,  
while continuously learning and improving my skills.

When I'm not coding, I enjoy exploring new tech, building side projects, and improving my craft.
`;

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="prose">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
}
