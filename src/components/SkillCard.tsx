
import React from 'react';

interface SkillCardProps {
  skill: string;
  icon: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, icon }) => {
  const colors = [
    'bg-portfolio-pink',
    'bg-portfolio-yellow', 
    'bg-portfolio-purple'
  ];
  
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className={`${randomColor} text-portfolio-black p-6 rounded-2xl text-center transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg border border-portfolio-black/20`}>
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-kalam font-bold text-lg">{skill}</h3>
    </div>
  );
};

export default SkillCard;
