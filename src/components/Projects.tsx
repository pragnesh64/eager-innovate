
import React, { useState } from 'react';
import AnimatedCard from './AnimatedCard';
import { ArrowRight } from 'lucide-react';

interface Project {
  title: string;
  client: string;
  description: string;
  results: string[];
  technologies: string[];
  image: string;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects: Project[] = [
    {
      title: "Project Falcon",
      client: "Leading E-commerce Retailer",
      description: "We integrated an AI-powered automation system that streamlined order processing, logistics, and customer service—resulting in a 35% reduction in operational costs and a 50% increase in processing speed.",
      results: [
        "35% reduction in operational costs",
        "50% increase in processing speed",
        "Improved customer satisfaction scores"
      ],
      technologies: ["Machine Learning", "Predictive Analytics", "Workflow Automation"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Project Athena",
      client: "Global Financial Institution",
      description: "Our team developed a sophisticated virtual assistant that handled customer inquiries, processed transactions, and offered personalized financial advice—boosting customer satisfaction by 40% and reducing support costs by 25%.",
      results: [
        "40% boost in customer satisfaction",
        "25% reduction in support costs",
        "24/7 customer service availability"
      ],
      technologies: ["Natural Language Processing", "AI Chatbots", "Secure API Integration"],
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Project Insight",
      client: "Digital Marketing Agency",
      description: "Eagerminds deployed a generative AI platform that produces high-quality marketing copy, social media posts, and campaign materials. This tool enabled the client to scale content production while ensuring brand consistency and engagement.",
      results: [
        "10x increase in content production",
        "30% higher engagement rates",
        "Consistent brand messaging across channels"
      ],
      technologies: ["Large Language Models", "Content Management APIs", "AI-driven Personalization"],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  return (
    <section id="projects" className="py-20 relative bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-sm text-primary font-medium uppercase tracking-wider mb-3">Case Studies</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Featured Projects</h3>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Explore how we've helped businesses across industries leverage AI to achieve remarkable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Project navigation */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {projects.map((project, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-4 rounded-xl transition-all ${
                    activeProject === index 
                      ? 'bg-primary/10 border border-primary/20' 
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                  onClick={() => setActiveProject(index)}
                >
                  <h4 className={`font-semibold ${activeProject === index ? 'text-primary' : 'text-white'}`}>
                    {project.title}
                  </h4>
                  <p className="text-sm text-foreground/70 mt-1">{project.client}</p>
                </button>
              ))}
            </div>
          </div>
          
          {/* Project details */}
          <div className="lg:col-span-3">
            <AnimatedCard className="overflow-hidden h-full">
              <div className="h-48 relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${projects[activeProject].image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              
              <div className="p-6 md:p-8">
                <h4 className="text-2xl font-semibold mb-2">{projects[activeProject].title}</h4>
                <p className="text-sm text-primary mb-4">{projects[activeProject].client}</p>
                
                <div className="mb-6">
                  <h5 className="text-sm font-medium text-foreground/70 mb-2">Overview</h5>
                  <p className="text-foreground/90">{projects[activeProject].description}</p>
                </div>
                
                <div className="mb-6">
                  <h5 className="text-sm font-medium text-foreground/70 mb-2">Results</h5>
                  <ul className="space-y-2">
                    {projects[activeProject].results.map((result, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <ArrowRight size={16} className="text-primary mr-3 mt-1 shrink-0" />
                        <span className="text-foreground/80">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium text-foreground/70 mb-2">Technologies</h5>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
