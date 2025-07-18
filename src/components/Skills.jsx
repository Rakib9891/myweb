import React from 'react'

function Skills() {
  return (
    <div className='skill-div'>
  <h2 className="text-3xl skill-text font-bold text-center mb-8">My Tech Stack</h2>

  <div className="skills flex flex-wrap justify-center items-center gap-6 w-full">
    {[
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
    ].map(skill => (
      <div key={skill.name} className="flex skill flex-col items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition ">
        <img src={skill.icon} alt={skill.name} className="h-12 mb-2" />
        <p className="text-sm font-medium">{skill.name}</p>
      </div>
    ))}
  </div>



    </div>
  )
}

export default Skills