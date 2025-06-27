
import React, { useState } from 'react';
import { Github, Globe, Moon, Linkedin, Instagram, Mail } from 'lucide-react';
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
        <div className="text-center p-8 bg-portfolio-yellow rounded-3xl border-4 border-portfolio-pink transform rotate-2 animate-wiggle max-w-md">
          <h1 className="text-4xl font-fredoka text-portfolio-black mb-4">hehe, got ya! 🤭</h1>
          <p className="text-lg font-kalam text-portfolio-black mb-6">You found my secret page!</p>
          <Button 
            onClick={() => setShowEasterEgg(false)}
            className="bg-portfolio-pink hover:bg-portfolio-purple text-white font-kalam text-base px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
          >
            Take me back! 🏃‍♀️
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-portfolio-black text-portfolio-white font-kalam">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-portfolio-black/80 backdrop-blur-md rounded-full px-8 py-4 z-50 border border-portfolio-white/20">
        <div className="flex space-x-8">
          {[
            { name: 'Portfolio', id: 'home' },
            { name: 'About Me', id: 'about' },
            { name: 'Skills', id: 'skills' },
            { name: 'Projects', id: 'projects' },
            { name: 'Connect', id: 'connect' }
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-portfolio-white hover:text-portfolio-yellow transition-colors duration-300 font-medium text-sm"
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>

      {/* Home/Landing Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
        <div className="max-w-4xl w-full">
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-fredoka mb-4">
              <span className="text-portfolio-white">Hello !</span><br />
              <span className="text-portfolio-white">It's </span>
              <span className="text-portfolio-purple">MISBA</span>
              <span className="text-portfolio-white"> this side</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-portfolio-white mb-8 font-medium">
              Just another <span className="text-portfolio-pink">C</span>
              <span className="text-portfolio-yellow">S</span>
              <span className="text-portfolio-purple">E</span> Student
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button
                onClick={() => scrollToSection('about')}
                className="bg-portfolio-yellow hover:bg-portfolio-yellow/90 text-portfolio-black font-kalam text-lg px-8 py-3 rounded-full font-bold"
              >
                Click Here !
              </Button>
              
              <div className="text-portfolio-pink text-sm font-medium">
                <p>For professional reasons, check out my profile ↓</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-fredoka text-portfolio-white mb-12">About Me</h2>
          
          <div className="bg-portfolio-purple/20 backdrop-blur-md rounded-3xl p-8 border border-portfolio-purple/30">
            <p className="text-lg leading-relaxed mb-8 text-portfolio-white">
              I'm a third-year Computer Science and Technology student at SNDT's Usha Mittal Institute of Technology 
              with a focus on Management Essentials. Currently serving as the 
              <span className="text-portfolio-yellow font-bold"> SECRETARY </span> 
              at the <span className="text-portfolio-pink font-bold">SNDT ACM-W Student Chapter.</span>
            </p>
            
            <div className="flex flex-wrap gap-4">
              <StickerTag text="Avid Learner" color="bg-portfolio-yellow" />
              <StickerTag text="Leadership Oriented" color="bg-portfolio-pink" />
              <StickerTag text="Innovative" color="bg-portfolio-purple" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-fredoka text-portfolio-white mb-12">Skills</h2>
          
          <div className="bg-portfolio-white/10 rounded-3xl p-8 border border-portfolio-white/20">
            <div className="grid grid-cols-3 gap-6">
              <SkillCard skill="C" icon="💻" />
              <SkillCard skill="Python" icon="🐍" />
              <SkillCard skill="Java" icon="☕" />
              <SkillCard skill="MySQL" icon="🗄️" />
              <SkillCard skill="JavaScript" icon="⚡" />
              <SkillCard skill="C++" icon="🔧" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-fredoka text-portfolio-white mb-12">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard 
              title="PROJECT1" 
              description="0000"
              icon={<Globe className="w-6 h-6" />}
            />
            <ProjectCard 
              title="PROJECT2" 
              description="0000"
              icon={<Moon className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-fredoka text-portfolio-yellow mb-8">Let's Connect !</h2>
          
          <div className="bg-portfolio-pink rounded-full px-8 py-6 inline-flex items-center gap-6">
            <button
              onClick={() => window.open('https://linkedin.com', '_blank')}
              className="text-portfolio-black hover:scale-110 transition-transform duration-300"
            >
              <Linkedin className="w-8 h-8" />
            </button>
            <button
              onClick={() => window.open('mailto:misba@example.com', '_blank')}
              className="text-portfolio-black hover:scale-110 transition-transform duration-300"
            >
              <Mail className="w-8 h-8" />
            </button>
            <button
              onClick={() => window.open('https://github.com', '_blank')}
              className="text-portfolio-black hover:scale-110 transition-transform duration-300"
            >
              <Github className="w-8 h-8" />
            </button>
            <button
              onClick={handleInstagramClick}
              className="text-portfolio-black hover:scale-110 transition-transform duration-300"
            >
              <Instagram className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
