
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Instagram, ExternalLink, Code2, Database, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInstagramClick = () => {
    setShowEasterEgg(true);
  };

  if (showEasterEgg) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="max-w-md text-center">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-2xl shadow-2xl">
            <h1 className="text-3xl font-bold text-white mb-4">hehe, got ya! 🤭</h1>
            <p className="text-purple-100 mb-6">You found my secret page!</p>
            <Button 
              onClick={() => setShowEasterEgg(false)}
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-6 py-2"
            >
              Take me back! 🏃‍♀️
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MISBA
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'text-purple-400' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Hello
              </span>
              <br />
              <span className="text-white">I'm </span>
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                MISBA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Computer Science Student & Aspiring Developer
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold"
            >
              Discover More
            </Button>
            <p className="text-sm text-gray-500">
              For professional inquiries, check out my profile below ↓
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I'm a third-year Computer Science and Technology student at SNDT's Usha Mittal Institute of Technology 
              with a focus on Management Essentials. Currently serving as the 
              <span className="text-purple-400 font-semibold"> SECRETARY </span> 
              at the <span className="text-pink-400 font-semibold">SNDT ACM-W Student Chapter.</span>
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['Avid Learner', 'Leadership Oriented', 'Innovative'].map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'C', icon: '💻', category: 'Programming' },
              { name: 'Python', icon: '🐍', category: 'Programming' },
              { name: 'Java', icon: '☕', category: 'Programming' },
              { name: 'JavaScript', icon: '⚡', category: 'Web Dev' },
              { name: 'C++', icon: '🔧', category: 'Programming' },
              { name: 'MySQL', icon: '🗄️', category: 'Database' }
            ].map((skill) => (
              <div 
                key={skill.name}
                className="group bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-1">{skill.name}</h3>
                <p className="text-sm text-gray-400">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                title: 'Project One', 
                description: 'A comprehensive web application built with modern technologies and best practices.',
                icon: <Code2 className="w-6 h-6" />,
                tech: ['React', 'TypeScript', 'Tailwind']
              },
              { 
                title: 'Project Two', 
                description: 'Database-driven application focusing on data management and user experience.',
                icon: <Database className="w-6 h-6" />,
                tech: ['Python', 'MySQL', 'Flask']
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg text-white">
                    {project.icon}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Ready to collaborate on exciting projects or discuss opportunities
          </p>
          
          <div className="flex justify-center gap-6">
            {[
              { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', href: 'https://linkedin.com' },
              { icon: <Mail className="w-6 h-6" />, label: 'Email', href: 'mailto:misba@example.com' },
              { icon: <Github className="w-6 h-6" />, label: 'GitHub', href: 'https://github.com' },
              { icon: <Instagram className="w-6 h-6" />, label: 'Instagram', onClick: handleInstagramClick }
            ].map((social, index) => (
              <button
                key={index}
                onClick={social.onClick || (() => window.open(social.href, '_blank'))}
                className="group bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-110"
              >
                <div className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
                  {social.icon}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 MISBA. Crafted with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
