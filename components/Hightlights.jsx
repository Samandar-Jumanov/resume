import React from 'react';



const HighlightItem = ({ children }) => {
    return (
        <li className="flex items-center space-x-2 mb-4 animate-fadeIn">
            <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
            <span className="text-lg font-bold">{children}</span>
        </li>
    );
};

const Highlights= () => {
    return (
        <div className="flex justify-center">
            <div className="mb-8 p-4 bg-blue-500 rounded-lg shadow-md text-white max-w-xl animate-fadeIn">
                <h2 className="text-2xl font-bold mb-2 text-center">Highlights</h2>
                <ul>
                    <HighlightItem>Proficient in backend development with Node.js, TypeScript, Python, and Go, ensuring high performance and reliability.</HighlightItem>
                    <HighlightItem>Experienced in building frontend interfaces with React.js and Next.js, ensuring a seamless user experience.</HighlightItem>
                    <HighlightItem>Skilled in containerization and orchestration with Docker and Kubernetes, optimizing deployment processes.</HighlightItem>
                    <HighlightItem>Familiar with messaging systems like RabbitMQ for building scalable and resilient microservices architectures.</HighlightItem>
                    <HighlightItem>Actively participate in problem-solving on platforms like LeetCode, honing algorithmic and coding skills.</HighlightItem>
                </ul>
            </div>
        </div>
    );
}

export default Highlights;
