
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-xl shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo with scroll to top functionality */}
          <button 
            onClick={scrollToTop} 
            className="flex items-center group transition-all duration-300 focus:outline-none"
            aria-label="Scroll to top"
          >
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mr-3 shadow-glow group-hover:shadow-[0_0_20px_5px_rgba(124,58,237,0.4)] transition-all duration-300">
              <span className="text-white font-bold text-lg">EM</span>
            </div>
            <span className="text-white font-display text-xl font-bold tracking-tight">Eagerminds</span>
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm text-foreground/90 hover:text-white transition-colors">About</a>
            <a href="#services" className="text-sm text-foreground/90 hover:text-white transition-colors">Services</a>
            <a href="#projects" className="text-sm text-foreground/90 hover:text-white transition-colors">Projects</a>
            <a href="#process" className="text-sm text-foreground/90 hover:text-white transition-colors">Process</a>
            <a href="#team" className="text-sm text-foreground/90 hover:text-white transition-colors">Team</a>
            <a href="#contact" className="px-5 py-2 bg-primary hover:bg-primary/80 text-white text-sm font-medium rounded-full transition-all shadow-glow hover:shadow-[0_0_15px_2px_rgba(124,58,237,0.5)] transform hover:-translate-y-0.5">
              Get Started
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden rounded-full p-2 text-foreground hover:bg-white/10 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-card shadow-lg transition-all duration-300 overflow-hidden",
          isMenuOpen ? "max-h-screen border-t border-white/5" : "max-h-0"
        )}
      >
        <div className="px-6 py-4 flex flex-col space-y-4">
          <a href="#about" className="text-sm py-2" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#services" className="text-sm py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#projects" className="text-sm py-2" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#process" className="text-sm py-2" onClick={() => setIsMenuOpen(false)}>Process</a>
          <a href="#team" className="text-sm py-2" onClick={() => setIsMenuOpen(false)}>Team</a>
          <a 
            href="#contact" 
            className="px-4 py-2 bg-primary hover:bg-primary/80 text-white text-sm font-medium rounded-full inline-block text-center w-full transition-all hover:shadow-[0_0_15px_2px_rgba(124,58,237,0.4)]"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
