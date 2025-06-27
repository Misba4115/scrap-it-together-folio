
import React from 'react';

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  onClick: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, label, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${color} text-portfolio-black px-6 py-4 rounded-full font-kalam font-bold text-lg flex items-center gap-3 transform hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg border-2 border-portfolio-black hover:border-portfolio-white`}
    >
      {icon}
      {label}
    </button>
  );
};

export default SocialButton;
