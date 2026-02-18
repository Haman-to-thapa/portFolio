import React from 'react';
import { Link } from "react-router-dom";


const About = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-200 px-6 py-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 border-b-2 border-gray-200 dark:border-gray-800 pb-4 inline-block">
          About Me
        </h2>

        {/* Intro */}
        <p className="text-xl leading-relaxed mb-12 text-gray-700 dark:text-gray-300 font-light">
          Hi, I'm <span className="font-semibold text-black dark:text-white">Hemant Thapa</span> — a Junior Frontend Developer with hands-on experience building responsive, production-ready web applications using React.js, Tailwind CSS, and REST APIs. I have worked on live projects including a healthcare platform with dashboards and appointment modules. Comfortable collaborating with backend teams, integrating databases, and improving UI performance. Actively seeking an entry-level Frontend or MERN role focused on real-world development.
        </p>

        {/* Tech Stack */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "HTML", "CSS", "TypeScript", "React.js", "Node.js", "Express.js",
              "JavaScript", "Next.js", "Tailwind CSS", "Bootstrap", "ShadCN/UI",
              "Framer Motion", "MongoDB", "Prisma ORM", "SQL (MySQL/PostgreSQL)",
              "Git/GitHub", "Docker", "React Native", "GSAP"
            ].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* AI Tools & Workflow */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            AI Tools & Workflow
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "ChatGPT",
              "DeepSeek AI",
              "Cursor IDE",
              "GitHub Copilot",
              "Claude AI",
              "Google Gemini",
              "Perplexity AI",
              "Gravity AI",
              "Midjourney",
              "Vercel AI SDK"
            ].map((tool, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>

          <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            I actively use AI-powered development tools for rapid prototyping, debugging,
            UI generation, structured planning, and workflow automation while maintaining
            deterministic and production-safe outputs.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Experience</h3>
          <div className="space-y-8 border-l-2 border-gray-200 dark:border-gray-800 pl-6 ml-2">

            <div className="relative">
              <span className="absolute -left-[31px] top-2 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-gray-900 dark:border-white"></span>
              <h4 className="text-xl font-bold text-black dark:text-white">Junior Frontend Developer</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Coremacasia Technologies (Startup) | 2025 - June 2025
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Built responsive healthcare dashboards using React.js, TypeScript, and Tailwind CSS.</li>
                <li>Integrated REST APIs for appointment booking and dynamic data modules.</li>
                <li>Improved UI performance and accessibility across devices.</li>
                <li>Contributed to a live MERN stack Learning Management System project.</li>
                <li>Assisted with MongoDB and SQL database integration.</li>
              </ul>
            </div>

            <div className="relative">
              <span className="absolute -left-[31px] top-2 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-gray-900 dark:border-white"></span>
              <h4 className="text-xl font-bold text-black dark:text-white">Web Development Intern</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                ICSS | 2025
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Developed responsive web applications and collaborated on frontend/backend features.</li>
                <li>Worked with modern JavaScript frameworks and database integrations.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800">
            <h4 className="text-xl font-bold text-black dark:text-white">Bachelor of Arts (B.A.)</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Jawaharlal Nehru College, Pasighat | Completed: 2024
            </p>
          </div>
        </div>

        {/* Current Learning */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Currently Learning</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Deepening backend expertise with Mongoose, mastering Figma-to-code workflows,
            and building AI-integrated applications using JavaScript and modern AI SDKs.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-xl text-gray-800 dark:text-gray-200">
            Wanna build something cool together? <br />
            <Link
              href="/contact"
              className="inline-block mt-4 text-black dark:text-white font-bold border-b-2 border-black dark:border-white hover:opacity-70 transition-opacity"
            >
              Let's Talk →
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
