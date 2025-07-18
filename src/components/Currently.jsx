import React from 'react'

function Currently() {
  return (
    <div className="current">
  <h2 className="text-3xl cur-text font-bold text-center mb-8">Currently Learning: MERN Stack</h2>

  <div className="flex cur-div flex-wrap justify-center
  items-center gap-9">
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-green-600 mb-2">MongoDB</h3>
      <p className="text-sm text-gray-600">Learning how to model databases, perform CRUD operations, and connect with backend APIs.</p>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Express.js</h3>
      <p className="text-sm text-gray-600">Building backend REST APIs and handling routes and middleware in a Node environment.</p>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-sky-600 mb-2">React</h3>
      <p className="text-sm text-gray-600">Creating reusable components, routing with React Router, and working with hooks and state.</p>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-lime-700 mb-2">Node.js</h3>
      <p className="text-sm text-gray-600">Running server-side logic, integrating with databases, and managing backend logic.</p>
    </div>
  </div>
</div>

  )
}

export default Currently