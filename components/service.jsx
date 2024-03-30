import React from 'react';
import { FaCode, FaServer, FaLaptopCode } from 'react-icons/fa'; // Make sure to install react-icons

const services = [
  {
    title: 'Frontend Web Development',
    icon: <FaLaptopCode className="text-4xl mb-4" />,
    description: 'Building sleek, responsive, and accessible user interfaces with modern JavaScript frameworks and CSS.',
  },
  {
    title: 'Full Stack Development',
    icon: <FaCode className="text-4xl mb-4" />,
    description: 'Developing robust web applications from front to back, integrating efficient, scalable backends with dynamic frontends.',
  },
  {
    title: 'Backend Web Development',
    icon: <FaServer className="text-4xl mb-4" />,
    description: 'Crafting the backbone of web applications with secure, scalable, and efficient server-side technologies.',
  },
];

const ServicesComponent = () => (
  <div className="py-12 bg-gray-900 text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-6">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            {service.icon}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ServicesComponent;
