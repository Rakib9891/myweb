import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-200 pt-16">
      {/* Call to Action Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between items-center bg-[#1e293b] rounded-3xl shadow-lg">
        {/* Left */}
        <div className="mb-10 lg:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 leading-tight">
            Shall We?
          </h2>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6 max-w-xl">
          <p className="text-slate-300 leading-relaxed">
            Workshops, talks, or mentoring — I’m on a mission to make
            accessibility standard practice in digital. Want to talk about it?
          </p>
          <a
            href="mailto:rakibulhasantanvir0@gmail.com"
            className="inline-block w-fit bg-cyan-400 hover:bg-cyan-300 text-[#0f172a] font-semibold px-6 py-2 rounded-full transition"
          >
            Email Me
          </a>

          {/* Social links */}
          <div className="flex gap-6 text-sm text-cyan-400">
            <a href="#" className="hover:underline hover:text-white">Newsletter</a>
            <a href="#" className="hover:underline hover:text-white">LinkedIn</a>
            <a href="#" className="hover:underline hover:text-white">Medium</a>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-slate-700 mt-12 py-6 text-center text-sm text-slate-400">
        <ul className="flex justify-center gap-8">
          <li>
            <a href="/about" className="hover:text-cyan-400 transition">About Me</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-cyan-400 transition">Contact</a>
          </li>
          <li>
            <a href="/projects" className="hover:text-cyan-400 transition">Projects</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
