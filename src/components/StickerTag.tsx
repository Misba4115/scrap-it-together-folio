
import React from 'react';

interface StickerTagProps {
  text: string;
  color: string;
}

const StickerTag: React.FC<StickerTagProps> = ({ text, color }) => {
  return (
    <div className={`${color} text-portfolio-black px-6 py-3 rounded-full font-kalam font-bold text-sm transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg border border-portfolio-black/20`}>
      {text}
    </div>
  );
};

export default StickerTag;
