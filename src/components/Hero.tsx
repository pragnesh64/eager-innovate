
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 overflow-hidden">
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
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-all shadow-glow flex items-center justify-center group"
            >
              Get Your Free Consultation
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#services" 
              className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm text-white font-medium rounded-full transition-all flex items-center justify-center"
            >
              Explore Our Services
            </a>
          </div>
          
          {/* Animated tech grid (stylized abstract representation) */}
          <div className="animate-on-scroll opacity-0 relative h-24 md:h-32 max-w-2xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-5 gap-3 w-full">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div 
                    key={i}
                    className="aspect-square rounded bg-white/5 border border-white/10 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="shimmer absolute inset-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
