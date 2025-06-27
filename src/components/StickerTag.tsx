
import React from 'react';

interface StickerTagProps {
  text: string;
  color: string;
}

const StickerTag: React.FC<StickerTagProps> = ({ text, color }) => {
  return (
    <div className={`${color} text-portfolio-black px-6 py-3 rounded-full font-kalam font-bold text-lg transform rotate-2 hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg`}>
      {text}
    </div>
  );
};

export default StickerTag;
