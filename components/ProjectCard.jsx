"use client"

import React from 'react'

const ProjectCard = ( projects ) => {
  return (
       <>

      {projects.map((each) =>{
            return (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
                <div className="bg-blue-900 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="mb-4">Description of Project 1</p>
            <a href="#" className="text-cyan-400 hover:underline">View Project</a>
        </div>
                </div>
            )
      })}
       
       </>
  )
}

export default ProjectCard