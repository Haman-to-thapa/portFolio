import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-[#080808] text-gray-200 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-[#eb5951] mb-8 border-b-4 border-[#eb5951] inline-block">
          About Me
        </h2>

        {/* Intro */}
        <p className="text-lg mb-6">
          Hi, I'm <span className="text-[#eb5951] font-semibold">HamaN</span> — a passionate frontend developer who
          loves building clean, responsive, and modern web site using <span className="text-blue-400 font-medium">React</span>, <span className="text-cyan-400 font-medium">Tailwind</span>, <span className="text-yellow-400 font-medium">JavaScript</span>, <span className="text-indigo-400 font-medium">CSS</span>, <span className="text-orange-400 font-medium">Git</span>, <span className="text-gray-400 font-medium">GitHub</span>, <span className="text-green-400 font-medium">C</span>, and the <span className="text-teal-400 font-medium">MERN stack</span>.
        </p>


        {/* Tech Stack */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-white mb-2">Tech Stack 🚀</h3>
          <div className="flex flex-wrap gap-3 text-gray-300 text-sm sm:text-base">
            {[
              "React",
              "Tailwind CSS",
              "JavaScript",
              "CSS",
              "GitHub",
              "MERN Stack"
            ].map((tech, i) => (
              <span
                key={i}
                className="bg-[#1f1f1f] px-3 py-1 rounded-full transition-all duration-300 hover:bg-[#eb5951] hover:text-white hover:scale-105 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>


        {/* Journey */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-white mb-2">My Journey 👣</h3>
          <p className="text-gray-400">
            I started coding in 2024 and have since built multiple real-world projects including an e-commerce website,
            a doctor booking platform, and more. I'm deeply focused on improving my problem-solving and backend skills.
          </p>
        </div>

        {/* Current Learning */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-white mb-2">Currently Learning 📚</h3>
          <p className="text-gray-400">
            Diving deeper into Mongoose for backend, mastering Figma for better UI/UX, and exploring AI using JavaScript.
          </p>
        </div>

        {/* Personal Touch */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-white mb-2">A Bit More 🤙</h3>
          <p className="text-gray-400">
            Outside of code, I love playing with UI design, listening to music, and exploring new tech trends. I believe
            in building clean UI with purpose and great UX.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <p className="text-lg">
            Wanna build something cool together? 👉{' '}
            <a href="/contact" className="text-[#eb5951] hover:underline">
              Contact Me
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
