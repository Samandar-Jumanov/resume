import React from 'react';

const SkillsComponent = () => {
  const skillCategories = [
    { category: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'Assembly', 'Go (basics)'] },
    { category: 'Frontend Technologies', skills: ['React.js', 'Next.js'] },
    { category: 'Backend Technologies', skills: ['Node.js', 'Express.js'] },
    { category: 'DevOps and Containerization', skills: ['AWS', 'Kubernetes', 'Docker'] },
    { category: 'Databases', skills: ['Redis', 'PostgreSQL', 'MongoDB'] },
    { category: 'ORM and Database Tools', skills: ['Prisma', 'Sequelize'] },
  ];

  return (
    <div className="p-8 bg-gray-900 rounded-lg shadow-xl mx-auto my-12 max-w-4xl">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Skills & Technologies</h2>
      {skillCategories.map(({ category, skills }, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span key={skill} className="text-sm text-gray-300 bg-gray-700 px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
          {index < skillCategories.length - 1 && <hr className="my-4 border-gray-700" />}
        </div>
      ))}
    </div>
  );
};

export default SkillsComponent;
