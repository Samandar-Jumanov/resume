// pages/projects.js
import Head from 'next/head';
import Image from 'next/image';
import bar from "../public/bar.png";
import blackBox from '../public/blac-box.png';
import api from '../public/api.png';

const Projects = () => {
  const projects = [
    {
      name: "Black Box Dashboard",
      description: "A comprehensive dashboard for visualizing data, built with modern web technologies to ensure efficient data handling and visualization. The dashboard integrates seamlessly with various data sources, providing real-time insights and analytics.",
      link: "https://black-box-dashboard.vercel.app/",
      type: "web",
      imageUrl: blackBox
    },
    {
      name: "Coffee Bar",
      description: "A chic, modern website designed for a coffee shop, featuring an interactive menu, online ordering, and a blog for coffee enthusiasts. The site offers a seamless user experience, with a focus on the visual representation of the coffee shop's brand and values.",
      link: "https://caffee-bar.vercel.app/",
      type: "web",
      imageUrl: bar
    },
    {
      name: "Ecommerce API in Node.js and Express.js",
      description: "This robust API supports ecommerce operations, including product listings, cart management, and user authentication. Designed for scalability, it facilitates seamless integration with front-end frameworks, providing a solid backend solution for online stores.",
      link: "https://github.com/Samandar-Jumanov/ecommerce-node",
      type: "api",
      imageUrl: api
    },
    {
      name: "Control Pupil",
      description: "An innovative API for educational institutions, offering functionalities like attendance tracking, grade management, and course scheduling. It's built to improve the efficiency of school administration and enhance the educational experience.",
      link: "https://github.com/Samandar-Jumanov/control_pupil",
      type: "api",
      imageUrl: api
    },
    {
      name: "Tune Tastic Project",
      description: "A music streaming API that allows users to browse, listen to, and manage playlists of their favorite tunes. It supports complex queries for songs, artists, and albums, making it easy to find the perfect music for any moment.",
      link: "https://github.com/Samandar-Jumanov/TuneTastic",
      type: "api",
      imageUrl: api
    },
    {
      name: "Chat App",
      description: "A real-time chat application API that supports direct and group messaging, file sharing, and notifications. It's designed to provide a high-performance messaging solution, enabling users to connect and communicate effectively.",
      link: "https://github.com/Samandar-Jumanov/chat_app",
      type: "api",
      imageUrl: api
    },
  ];

  return (
    <div className="bg-gray-800 min-h-screen p-10 text-gray-200 mt-120">
      <main className="container mx-auto max-w-6xl">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-700 mb-10 md:mb-12 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center text-center md:text-left">
            <div className="md:w-1/2 lg:w-1/2 mb-4 md:mb-0 mx-auto">
              <Image src={project.imageUrl} alt={project.name} width={400} height={400} objectFit="cover" className="rounded-md" />
            </div>
            <div className="flex flex-col justify-center md:w-1/2 lg:w-1/2 md:ml-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">{project.name}</h2>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out self-center md:self-start">Visit Project</a>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Projects;
