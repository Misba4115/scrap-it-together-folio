
import React from 'react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-portfolio-white/10 backdrop-blur-md border-2 border-portfolio-pink/30 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-portfolio-yellow text-portfolio-black p-3 rounded-full">
          {icon}
        </div>
        <h3 className="text-2xl font-fredoka text-portfolio-yellow">{title}</h3>
      </div>
      
      <p className="text-portfolio-white mb-6 leading-relaxed">{description}</p>
      
      <Button className="bg-portfolio-pink hover:bg-portfolio-purple text-white font-kalam px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-300">
        Check Out! 🎯
      </Button>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 text-2xl animate-float">🌸</div>
    </div>
  );
};

export default ProjectCard;
