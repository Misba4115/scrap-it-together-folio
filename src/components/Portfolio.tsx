
import React, { useState } from 'react';
import { Github, Globe, Moon, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StickerTag from './StickerTag';
import SkillCard from './SkillCard';
import ProjectCard from './ProjectCard';
import SocialButton from './SocialButton';

const Portfolio = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInstagramClick = () => {
    setShowEasterEgg(true);
  };

  if (showEasterEgg) {
    return (
      <div className="min-h-screen bg-portfolio-black flex items-center justify-center">
        <div className="text-center p-8 bg-portfolio-yellow rounded-3xl border-4 border-portfolio-pink transform rotate-2 animate-wiggle">
          <h1 className="text-6xl font-fredoka text-portfolio-black mb-4">hehe, got ya! 🤭</h1>
          <p className="text-xl font-kalam text-portfolio-black mb-6">You found my secret page!</p>
          <Button 
            onClick={() => setShowEasterEgg(false)}
            className="bg-portfolio-pink hover:bg-portfolio-purple text-white font-kalam text-lg px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
          >
            Take me back! 🏃‍♀️
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-portfolio-black text-portfolio-white font-kalam overflow-x-hidden">
      {/* Notebook grid background */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-portfolio-white/10 backdrop-blur-md rounded-full px-6 py-3 z-50 border border-portfolio-pink/30">
        <div className="flex space-x-6">
          {['Home', 'About', 'Skills', 'Projects', 'Connect'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-portfolio-white hover:text-portfolio-yellow transition-colors duration-300 font-medium"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Home/Landing Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-fredoka text-portfolio-yellow mb-4 animate-bounce-fun">
              Hello! It's MISBA this side
            </h1>
            {/* Decorative stickers */}
            <div className="absolute -top-8 -right-4 text-4xl animate-float">⭐</div>
            <div className="absolute -bottom-4 -left-8 text-3xl animate-float" style={{animationDelay: '1s'}}>✨</div>
          </div>
          
          <p className="text-2xl md:text-3xl text-portfolio-pink mb-8 font-medium">
            Just another CSE Student
          </p>
          
          <div className="space-y-4">
            <Button
              onClick={() => scrollToSection('about')}
              className="bg-portfolio-pink hover:bg-portfolio-purple text-white font-kalam text-xl px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 animate-pulse"
            >
              Click Here! 🎉
            </Button>
            
            <div className="text-portfolio-yellow text-sm">
              <p>For professional reasons, check out my profile ↓</p>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 text-6xl animate-float">🌟</div>
        <div className="absolute bottom-20 right-10 text-5xl animate-float" style={{animationDelay: '2s'}}>🎨</div>
        <div className="absolute top-1/2 left-5 text-4xl animate-float" style={{animationDelay: '1.5s'}}>💫</div>
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-fredoka text-portfolio-yellow text-center mb-12">About Me 🤓</h2>
          
          <div className="bg-portfolio-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-portfolio-pink/30 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <p className="text-xl leading-relaxed mb-8">
              I'm a third-year Computer Science and Technology student at SNDT's Usha Mittal Institute of Technology. 
              When I'm not buried in code, you'll find me exploring new technologies, leading team projects, or coming up with innovative solutions to everyday problems!
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <StickerTag text="Avid Learner" color="bg-portfolio-yellow" />
              <StickerTag text="Leadership Oriented" color="bg-portfolio-pink" />
              <StickerTag text="Innovative" color="bg-portfolio-purple" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-fredoka text-portfolio-yellow text-center mb-12">My Toolkit 🛠️</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <SkillCard skill="C" icon="💻" />
            <SkillCard skill="Python" icon="🐍" />
            <SkillCard skill="Java" icon="☕" />
            <SkillCard skill="MySQL" icon="🗄️" />
            <SkillCard skill="JavaScript" icon="⚡" />
            <SkillCard skill="C++" icon="🔧" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-fredoka text-portfolio-yellow text-center mb-12">My Projects 🚀</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Project 1" 
              description="An amazing project that showcases my skills and creativity!"
              icon={<Globe className="w-6 h-6" />}
            />
            <ProjectCard 
              title="Project 2" 
              description="Another fantastic project demonstrating my technical expertise!"
              icon={<Moon className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-fredoka text-portfolio-yellow mb-8">Let's Connect! 🌈</h2>
          
          <p className="text-xl mb-12 text-portfolio-white">
            Ready to create something amazing together? Drop me a line!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <SocialButton 
              icon={<Linkedin className="w-6 h-6" />} 
              label="LinkedIn" 
              color="bg-portfolio-purple"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            />
            <SocialButton 
              icon={<span className="text-xl">📧</span>} 
              label="Email" 
              color="bg-portfolio-pink"
              onClick={() => window.open('mailto:misba@example.com', '_blank')}
            />
            <SocialButton 
              icon={<Github className="w-6 h-6" />} 
              label="GitHub" 
              color="bg-portfolio-yellow"
              onClick={() => window.open('https://github.com', '_blank')}
            />
            <SocialButton 
              icon={<Instagram className="w-6 h-6" />} 
              label="Instagram" 
              color="bg-portfolio-pink"
              onClick={handleInstagramClick}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
