
import React from 'react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-portfolio-white rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 shadow-lg relative">
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-2xl font-fredoka text-portfolio-black">{title}</h3>
        <div className="bg-portfolio-purple text-portfolio-white p-2 rounded-full">
          {icon}
        </div>
      </div>
      
      <p className="text-portfolio-black mb-6 leading-relaxed">{description}</p>
      
      <Button className="bg-portfolio-yellow hover:bg-portfolio-yellow/90 text-portfolio-black font-kalam px-6 py-2 rounded-full font-bold transform hover:scale-105 transition-all duration-300">
        Check Out
      </Button>
      
      {/* Decorative doodle */}
      <div className="absolute bottom-4 right-4 text-portfolio-purple">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M10 20 Q20 10 30 20 Q20 30 10 20" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>
    </div>
  );
};

export default ProjectCard;
