
import React from 'react';

interface SkillCardProps {
  skill: string;
  icon: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, icon }) => {
  const colors = [
    'bg-portfolio-yellow',
    'bg-portfolio-pink', 
    'bg-portfolio-purple'
  ];
  
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomRotation = Math.random() > 0.5 ? 'rotate-2' : '-rotate-2';

  return (
    <div className={`${randomColor} ${randomRotation} text-portfolio-black p-6 rounded-2xl text-center transform hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg border-2 border-portfolio-black`}>
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="font-kalam font-bold text-xl">{skill}</h3>
    </div>
  );
};

export default SkillCard;
