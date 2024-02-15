import React from 'react'

const Hightlights = () => {
  return (
    <div>
        <div className="mb-8 p-4 bg-blue-500 rounded-lg shadow-md text-black">
          <h2 className="text-2xl font-bold mb-2">Highlights</h2>
          <ul>
            <li className="flex items-center space-x-2 mb-2">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              <span className="text-lg font-bold">Proficient in backend development with Node.js, TypeScript, Python, and Go, ensuring high performance and reliability.</span>
            </li>
            <li className="flex items-center space-x-2 mb-2">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              <span className="text-lg font-bold">Experienced in building frontend interfaces with React.js and Next.js, ensuring a seamless user experience.</span>
            </li>
            <li className="flex items-center space-x-2 mb-2">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              <span className="text-lg font-bold">Skilled in containerization and orchestration with Docker and Kubernetes, optimizing deployment processes.</span>
            </li>
            <li className="flex items-center space-x-2 mb-2">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              <span className="text-lg font-bold">Familiar with messaging systems like RabbitMQ for building scalable and resilient microservices architectures.</span>
            </li>
            <li className="flex items-center space-x-2 mb-2">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              <span className="text-lg font-bold">Actively participate in problem-solving on platforms like LeetCode (https://leetcode.com/jumanov/), honing algorithmic and coding skills.</span>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Hightlights