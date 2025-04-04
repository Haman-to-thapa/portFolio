import doctor from '../assets/doctor.png';

const projects = [
  {
    title: "E-commerce Website",
    description: "A full-stack MERN e-commerce platform with Stripe payments.",
    image: "https://via.placeholder.com/400x300",
    link: "https://yourprojectlink.com",
  },
  {
    title: "Doctor Booking Site",
    description: "A responsive doctor booking app with appointment management.",
    image: doctor,
    link: "https://yourdoctorapp.com",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase my projects and skills.",
    image: "https://via.placeholder.com/400x300",
    link: "https://yourportfolio.com",
  }, ,
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase my projects and skills.",
    image: "https://via.placeholder.com/400x300",
    link: "https://yourportfolio.com",
  }, ,
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase my projects and skills.",
    image: "https://via.placeholder.com/400x300",
    link: "https://yourportfolio.com",
  }, ,
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase my projects and skills.",
    image: "https://via.placeholder.com/400x300",
    link: "https://yourportfolio.com",
  }, ,
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase my projects and skills.",
    image: "https://via.placeholder.com/400x300",
    link: "https://yourportfolio.com",
  },

];

const ProjectBox = ({ title, description, image, link }) => {
  return (
    <div className="bg-[#1E1E1E] rounded-2xl overflow-hidden shadow-md border border-gray-700 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border-blue-600 sm:mt-6">
      <a href={link} target="_blank" rel="noopener noreferrer" >
        <img className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition" src={image} alt={title} />
      </a>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#F5F5F5] hover:text-blue-400 transition duration-300">
          {title}
        </h3>
        <p className="text-sm  text-[#A0A0A0] mt-2">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-[#eb5951] hover:text-blue-400 transition duration-300 hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 min-h-screen bg-[#0d0d0d]">
      {projects.map((project, index) => (
        <ProjectBox
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
