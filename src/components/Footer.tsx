
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-card border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">EM</span>
              </div>
              <span className="text-white font-display text-xl font-bold tracking-tight">Eagerminds</span>
            </a>
            <p className="text-sm text-foreground/70 mb-4">
              Where intelligence meets innovation. Join us on the journey to a smarter future.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm text-foreground/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#team" className="text-sm text-foreground/70 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-sm text-foreground/70 hover:text-white transition-colors">AI Integration</a></li>
              <li><a href="#services" className="text-sm text-foreground/70 hover:text-white transition-colors">Custom AI Agents</a></li>
              <li><a href="#services" className="text-sm text-foreground/70 hover:text-white transition-colors">AI Strategy</a></li>
              <li><a href="#projects" className="text-sm text-foreground/70 hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-foreground/70 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-foreground/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Eagerminds. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
