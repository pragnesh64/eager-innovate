
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Brain, ChevronDown, Sparkles, Zap } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const Hero: React.FC = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-700/20 rounded-full filter blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center max-w-3xl mx-auto">
          {/* Tag */}
          <div 
            className="inline-block animate-on-scroll opacity-0 rounded-full px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
            ref={elementRef}
          >
            <span className="text-primary mr-1">•</span> AI-Powered Solutions for the Digital Age
          </div>
          
          {/* Heading */}
          <h1 className="animate-on-scroll opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6 leading-tight">
            Transform Your Business with AI-Driven Innovation
          </h1>
          
          {/* Description */}
          <p className="animate-on-scroll opacity-0 text-foreground/80 text-balance text-lg mb-8 max-w-2xl mx-auto">
            At Eagerminds, we empower organizations to thrive in a digital age by seamlessly integrating advanced AI solutions that drive efficiency, boost profitability, and unlock new opportunities.
          </p>
          
          {/* CTA Buttons */}
          <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-primary hover:bg-primary/80 text-white font-medium rounded-full transition-all shadow-glow hover:shadow-[0_0_20px_5px_rgba(124,58,237,0.4)] flex items-center justify-center group transform hover:-translate-y-1"
            >
              Get Your Free Consultation
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#services" 
              className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm text-white font-medium rounded-full transition-all flex items-center justify-center hover:border-white/30 transform hover:-translate-y-1"
            >
              Explore Our Services
            </a>
          </div>
          
          {/* Featured capabilities cards */}
          <div className="animate-on-scroll opacity-0 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <AnimatedCard className="p-6 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Brain size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">AI Integration</h3>
                <p className="text-sm text-foreground/70">Seamlessly connect AI with your existing systems for immediate business impact.</p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard className="p-6 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <Sparkles size={24} className="text-purple-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Custom AI Agents</h3>
                <p className="text-sm text-foreground/70">Build intelligent agents tailored to your unique business requirements.</p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard className="p-6 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <Zap size={24} className="text-blue-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">Process Automation</h3>
                <p className="text-sm text-foreground/70">Eliminate repetitive tasks and focus your team on high-value activities.</p>
              </div>
            </AnimatedCard>
          </div>
          
          {/* Stats section */}
          <div className="animate-on-scroll opacity-0 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-primary mb-2">35%</span>
              <p className="text-sm text-foreground/70">Average cost reduction</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-purple-500 mb-2">50%</span>
              <p className="text-sm text-foreground/70">Increase in productivity</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-blue-500 mb-2">40%</span>
              <p className="text-sm text-foreground/70">Improved customer satisfaction</p>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="animate-bounce mt-8 flex justify-center">
            <a href="#about" className="text-primary opacity-80 hover:opacity-100 transition-opacity">
              <ChevronDown size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
