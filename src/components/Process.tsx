
import React from 'react';
import { Search, PenTool, Code, Cpu, Rocket } from 'lucide-react';

const ProcessStep: React.FC<{
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}> = ({ number, title, description, icon, isLast = false }) => {
  return (
    <div className="flex relative">
      {/* Connector line */}
      {!isLast && (
        <div className="absolute top-16 left-8 w-0.5 h-[calc(100%-4rem)] bg-gradient-to-b from-primary/50 to-primary/10" />
      )}
      
      {/* Step number and content */}
      <div className="flex flex-col items-center mr-6">
        <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center z-10">
          {icon}
        </div>
      </div>
      
      <div className="pb-16">
        <div className="flex items-center mb-2">
          <div className="w-8 h-8 rounded-full bg-primary/20 text-primary font-semibold flex items-center justify-center text-sm mr-3">
            {number}
          </div>
          <h4 className="text-xl font-semibold">{title}</h4>
        </div>
        <p className="text-foreground/80 pl-11">{description}</p>
      </div>
    </div>
  );
};

const Process: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery & Assessment",
      description: "We begin with a comprehensive analysis of your business needs and technological landscape, identifying opportunities for AI enhancement.",
      icon: <Search size={24} className="text-primary" />
    },
    {
      number: 2,
      title: "Strategic Roadmap",
      description: "Develop a tailored AI strategy with clear milestones, timelines, and measurable KPIs aligned with your business objectives.",
      icon: <PenTool size={24} className="text-primary" />
    },
    {
      number: 3,
      title: "Design & Development",
      description: "Collaborate closely with your team to build custom solutions using agile methodologies, ensuring continuous feedback and adaptation.",
      icon: <Code size={24} className="text-primary" />
    },
    {
      number: 4,
      title: "Integration & Testing",
      description: "Seamlessly integrate the AI solution into your environment and rigorously test for optimal performance, security, and reliability.",
      icon: <Cpu size={24} className="text-primary" />
    },
    {
      number: 5,
      title: "Launch & Optimization",
      description: "Go live with full support, and continuously refine the solution through data-driven insights and performance analytics.",
      icon: <Rocket size={24} className="text-primary" />
    }
  ];
  
  return (
    <section id="process" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-sm text-primary font-medium uppercase tracking-wider mb-3">How We Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Our Process</h3>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Our structured approach ensures seamless AI implementation and optimal results for your business.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
