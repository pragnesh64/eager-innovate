
import React from 'react';
import AnimatedCard from './AnimatedCard';
import { Bot, Cog, BarChart, ArrowRight, BrainCircuit, Code, Lightbulb } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, features }) => {
  return (
    <AnimatedCard className="h-full">
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
          {icon}
        </div>
        
        <h4 className="text-xl font-semibold mb-3">{title}</h4>
        <p className="text-foreground/80 text-sm mb-6">{description}</p>
        
        <div className="flex-grow">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm">
                <ArrowRight size={16} className="text-primary mr-3 mt-1 shrink-0" />
                <span className="text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedCard>
  );
};

const Services: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      title: "AI Integration & Automation",
      description: "We help organizations embed AI into their existing workflows, automating routine tasks and enhancing decision-making.",
      icon: <Cog size={24} className="text-primary" />,
      features: [
        "Enterprise AI Integration: Seamlessly connect AI systems with your legacy infrastructure.",
        "Process Automation: Automate business processes to reduce costs and eliminate inefficiencies.",
        "Data-Driven Insights: Leverage predictive analytics and machine learning to drive smarter strategies."
      ]
    },
    {
      title: "Custom AI Agent Development",
      description: "Develop custom AI agents designed to interact, learn, and optimize operations across industries.",
      icon: <Bot size={24} className="text-primary" />,
      features: [
        "Conversational Agents: Build chatbots and virtual assistants for superior customer service.",
        "Generative AI Solutions: Create automated content generation tools that fuel marketing, support, and creative functions.",
        "Intelligent Workflow Agents: Develop agents that manage tasks, schedule meetings, and even integrate with CRM systems."
      ]
    },
    {
      title: "AI Strategy & Consulting",
      description: "Our expert consultants provide strategic guidance to ensure your AI investments deliver maximum ROI.",
      icon: <BrainCircuit size={24} className="text-primary" />,
      features: [
        "AI Readiness Assessment: Evaluate your current technology landscape and identify opportunities.",
        "Roadmap Development: Craft a detailed strategy for a successful AI transformation.",
        "Ongoing Support: Continuous performance monitoring and iterative improvements."
      ]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-radial from-primary/5 to-transparent opacity-50" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-sm text-primary font-medium uppercase tracking-wider mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Our Services</h3>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            We deliver cutting-edge AI solutions that transform businesses through innovation, 
            automation, and strategic implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        {/* Additional benefits */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gradient">Why Choose Our AI Solutions</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/20 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb size={24} className="text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Tailored Solutions</h4>
              <p className="text-foreground/80 text-sm">
                Custom AI solutions designed specifically for your business needs and challenges.
              </p>
            </div>
            
            <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/20 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Code size={24} className="text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Seamless Integration</h4>
              <p className="text-foreground/80 text-sm">
                Our solutions integrate smoothly with your existing systems and workflows.
              </p>
            </div>
            
            <div className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/20 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <BarChart size={24} className="text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Measurable Results</h4>
              <p className="text-foreground/80 text-sm">
                Data-driven approach with clear metrics to track performance and ROI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
