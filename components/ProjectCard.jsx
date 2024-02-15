import React from 'react';

const ProjectCard = ({ projects }) => {
  function directUrl(url) {
    window.open(url, '_blank');
  }

  return (
    <>
      {projects.map((each) => (
        <div className="bg-blue-900 rounded-lg shadow-md p-6 mb-4" key={each.id}>
          <h3 className="text-white text-xl font-semibold mb-2">Project name: {each.name}</h3>
          <p className="text-white mb-4">Language: <span className="text-white">{each.language}</span></p>
          <p>Created at: {each.created_at}</p>
          <button onClick={() => directUrl(`https://github.com/Samandar-Jumanov/${each.name}`)} className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            See project
          </button>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
