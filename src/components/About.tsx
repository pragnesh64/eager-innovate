
import React from 'react';
import AnimatedCard from './AnimatedCard';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-sm text-primary font-medium uppercase tracking-wider mb-3">About Eagerminds</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gradient">Who We Are</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side: content */}
          <div className="space-y-6">
            <p className="text-foreground/90 leading-relaxed">
              Eagerminds is a leading AI agency dedicated to bridging the gap between technology and business. 
              We specialize in AI integration, custom AI agent development, and generative AI automation tailored 
              to your unique challenges.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Our mission is to demystify AI, delivering tangible results that empower businesses to innovate 
              and stay ahead of the competition.
            </p>
            
            <div className="pt-6">
              <h4 className="text-xl font-semibold mb-4">Our Approach</h4>
              <p className="text-foreground/90 leading-relaxed">
                Combining deep industry expertise with state-of-the-art technology, we work collaboratively 
                with our clients to create intelligent systems that transform operations and elevate customer 
                experiences. Our agile process ensures transparency, continuous improvement, and measurable success.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-primary mb-1">94%</div>
                <div className="text-xs text-foreground/70">Client Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-primary mb-1">35+</div>
                <div className="text-xs text-foreground/70">AI Solutions</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-primary mb-1">3x</div>
                <div className="text-xs text-foreground/70">Average ROI</div>
              </div>
            </div>
          </div>
          
          {/* Right side: animated graphic */}
          <AnimatedCard className="p-6 h-full">
            <div className="relative h-full min-h-[400px] flex items-center justify-center p-6">
              {/* Central node */}
              <div className="absolute w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 z-10 animate-pulse-slow">
                <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-primary"></div>
                </div>
              </div>
              
              {/* Connection lines */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div 
                  key={i} 
                  className="absolute h-px bg-gradient-to-r from-primary/60 to-transparent w-24 md:w-32"
                  style={{ 
                    transform: `rotate(${i * 45}deg) translateX(60px)`,
                    transformOrigin: 'left center' 
                  }}
                />
              ))}
              
              {/* Surrounding nodes */}
              {Array.from({ length: 8 }).map((_, i) => {
                const delay = i * 0.25;
                return (
                  <div 
                    key={i}
                    className="absolute w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center"
                    style={{ 
                      transform: `rotate(${i * 45}deg) translateX(120px)`,
                      animationDelay: `${delay}s`,
                      animation: 'float 3s ease-in-out infinite'
                    }}
                  >
                    <div className="w-4 h-4 rounded-full bg-primary/40"></div>
                  </div>
                );
              })}
              
              {/* Background glow */}
              <div className="absolute inset-0 rounded-full bg-primary/5 filter blur-3xl"></div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default About;
