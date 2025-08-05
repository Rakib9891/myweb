import React from 'react';

const skills = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
];

function Skills() {
  return (
    <section className="py-16 px-6 bg-[#0f172a] text-white" id="skills">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tech Stack</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="group flex flex-col items-center justify-center gap-3 p-4 rounded-lg bg-[#1e293b] hover:bg-[#334155] transition-all"
          >
            <img src={skill.icon} alt={skill.name} className="h-10 w-10" />
            <p className="text-sm font-medium group-hover:text-cyan-400 transition">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
