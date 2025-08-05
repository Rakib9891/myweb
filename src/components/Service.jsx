import React from 'react';
import { FaCode, FaReact, FaRocket } from 'react-icons/fa';

function Service() {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Responsive, fast, and modern web interfaces built using HTML, CSS, JavaScript, and React.',
      icon: <FaCode size={30} className="text-green-400" />,
    },
    {
      title: 'React UI Components',
      description: 'Reusable UI components like forms, modals, and navbars built with React & Tailwind CSS.',
      icon: <FaReact size={30} className="text-sky-400" />,
    },
    {
      title: 'Website Optimization',
      description: 'Boost site performance, fix bugs, and ensure mobile responsiveness across devices.',
      icon: <FaRocket size={30} className="text-lime-400" />,
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#f8f9fa] dark:bg-[#0f172a] text-[#332E2E] dark:text-white" id="services">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What I Can Do For You</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#1e293b] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col items-start gap-4"
          >
            <div>{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
