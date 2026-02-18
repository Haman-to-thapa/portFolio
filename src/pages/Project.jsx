

const projects = [
  {
    title: "Type Race (Mobile Game)",
    description:
      "A fast-paced typing game built with React Native CLI. Available on the Google Play Store.",
    link: "https://play.google.com/store/apps/details?id=com.type_race&hl=en-US&ah=4pNLt3aYUUvg63KdhlyHCWsPMQk",
  },
  {
    title: "Ryze AI",
    description:
      "A deterministic AI-powered UI generator that converts natural language instructions into a structured JSON-based UI plan and renders it using a controlled component library. The system separates AI reasoning from UI execution to ensure safety, reproducibility, and strict schema validation.",
    link: "https://ryze-ai-fawn.vercel.app/",
  },
  {
    title: "Healthcare Platform (DoctorEzy)",
    description:
      "A live healthcare platform with dashboards and appointment modules. Built with React.js, TypeScript, and Tailwind CSS.",
    link: "https://doctorezy.in/",
  },
  {
    title: "Learning Management System (LMS)",
    description:
      "A full-stack LMS platform using the MERN stack (MongoDB, Express.js, React, Node.js) to manage courses, authentication, and progress tracking.",
    link: "https://new-lms-project-can-1.onrender.com/",
  },
  {
    title: "E-Commerce Website",
    description:
      "A full-stack e-commerce platform featuring authentication, product management, cart system, filtering, and an admin dashboard. Built using React, Node.js, Express, and MongoDB.",
    link: "https://e-commerce-website-frontend-iecn.onrender.com",
  },
  {
    title: "MotoUI (Next.js Project)",
    description:
      "A modern UI project built with Next.js, featuring a beautiful responsive interface and pixel-perfect Figma-to-Next.js conversion.",
    link: "https://motoui.onrender.com",
  },
];




const ProjectGrid = () => {
  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-500" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-20 text-black dark:text-white tracking-tight">
          SELECTED WORK
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors duration-500 hover:-translate-y-1"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-sm font-bold text-gray-400 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white transition-colors duration-500">0{index + 1}</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-50 dark:bg-gray-900 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-500"
                    >
                      <svg className="w-5 h-5 transform group-hover:-rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>

                  <h3 className="text-2xl font-bold text-black dark:text-white mb-4 leading-tight group-hover:tracking-wide transition-all duration-500">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-gray-900">
                  <span className="text-sm font-bold text-black dark:text-white border-b-2 border-transparent group-hover:border-black dark:group-hover:border-white transition-all duration-500 pb-1">
                    View Case Study
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
