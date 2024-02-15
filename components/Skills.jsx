import React from 'react'
import Hightlights from './Hightlights'
import ProjectCard from '@/components/ProjectCard';

const Skills = ( { projects }) => {
  return (
         <main className="container mx-auto px-4 py-8 text-blue-200">
        <h1 className="text-4xl font-bold mb-8">Hello, I'm Samandar</h1>
        <p className="text-lg mb-8">
          🚀 Skilled Backend Developer | Full Stack Enthusiast | JavaScript | TypeScript | Python | Go basics 
          <br />
          <br />
          Passionate about crafting robust backend solutions and integrating them seamlessly with cutting-edge frontend technologies. With a diverse skill set and 1.5 years of project-based experience, I excel in building scalable web applications and microservices architectures.
        </p>

        <Hightlights/>

        <h2 className="text-3xl font-bold mb-8">Personal Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
          <ProjectCard projects={projects} />
        </div>
      </main>
  )
}

export default Skills