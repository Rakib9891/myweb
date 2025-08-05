import React from "react";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

function Currently() {
  const topics = [
    {
      title: "MongoDB",
      icon: <SiMongodb className="text-green-600 text-4xl mb-3" />,
      description: "Learning how to model databases, perform CRUD operations, and connect with backend APIs.",
    },
    {
      title: "Express.js",
      icon: <SiExpress className="text-gray-700 text-4xl mb-3" />,
      description: "Building backend REST APIs and handling routes and middleware in a Node environment.",
    },
    {
      title: "React",
      icon: <SiReact className="text-sky-500 text-4xl mb-3" />,
      description: "Creating reusable components, routing with React Router, and working with hooks and state.",
    },
    {
      title: "Node.js",
      icon: <SiNodedotjs className="text-lime-700 text-4xl mb-3" />,
      description: "Running server-side logic, integrating with databases, and managing backend logic.",
    },
  ];

  return (
    <div className="mt-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">Currently Learning: MERN Stack</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {topics.map((tech) => (
          <div
            key={tech.title}
            className="bg-[#111827] text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition"
          >
            {tech.icon}
            <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
            <p className="text-sm text-gray-300">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Currently;
