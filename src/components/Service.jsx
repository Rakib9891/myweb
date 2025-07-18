import React from 'react'

function Service() {
  return (
    <div className="mt-16 px-4">
  <h2 className="text-3xl font-bold text-center mb-8 service-text">Services I Offer</h2>

  <div className="flex flex-wrap justify-center items-center gap-6">
    <div className="service-card bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2 text-green-600">Frontend Development</h3>
      <p className="text-[#332E2E] text-sm">Responsive, fast, and modern web interfaces built using HTML, CSS, JavaScript, and React.</p>
    </div>

    <div className="service-card bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2 text-sky-600">React UI Components</h3>
      <p className="text-[#332E2E] text-sm">I create clean, reusable components like forms, modals, and navbars using React and Tailwind CSS.</p>
    </div>

    <div className="service-card bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2 text-lime-700">Website Optimization</h3>
      <p className="text-[#332E2E] text-sm">I help improve website performance, fix layout bugs, and make websites mobile-friendly.</p>
    </div>
  </div>
</div>

  )
}

export default Service