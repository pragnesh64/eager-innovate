
import React from 'react';
import AnimatedCard from './AnimatedCard';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <AnimatedCard className="overflow-hidden h-full">
      <div className="h-64 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${member.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>
      
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
        <p className="text-primary text-sm mb-3">{member.role}</p>
        <p className="text-foreground/80 text-sm mb-4">{member.bio}</p>
        
        <div className="flex space-x-3">
          {member.social.linkedin && (
            <a href={member.social.linkedin} className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
              <Linkedin size={16} />
            </a>
          )}
          {member.social.twitter && (
            <a href={member.social.twitter} className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
              <Twitter size={16} />
            </a>
          )}
          {member.social.email && (
            <a href={`mailto:${member.social.email}`} className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
              <Mail size={16} />
            </a>
          )}
        </div>
      </div>
    </AnimatedCard>
  );
};

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Arjun Patel",
      role: "Chief Technology Officer",
      bio: "With over 15 years in AI and machine learning, Dr. Patel leads our R&D initiatives and technical strategy.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "arjun@eagerminds.ai"
      }
    },
    {
      name: "Sophia Martinez",
      role: "Head of AI Integration",
      bio: "An industry veteran, Sophia ensures seamless implementation across diverse platforms and business environments.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sophia@eagerminds.ai"
      }
    },
    {
      name: "Daniel Kim",
      role: "Chief Strategy Officer",
      bio: "Daniel crafts innovative strategies that align AI capabilities with business goals for maximum impact.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "daniel@eagerminds.ai"
      }
    }
  ];
  
  return (
    <section id="team" className="py-20 relative bg-gradient-to-t from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-sm text-primary font-medium uppercase tracking-wider mb-3">Our Experts</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-6">Meet the Team</h3>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Our team is composed of seasoned experts in AI research, software engineering, and business strategy, 
            committed to pushing the boundaries of innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block rounded-xl bg-white/5 border border-white/10 p-8 max-w-2xl">
            <h4 className="text-xl font-semibold mb-4">Join Our Team</h4>
            <p className="text-foreground/80 mb-6">
              We're always looking for talented individuals who are passionate about AI and innovation. 
              Check out our open positions and become part of our journey.
            </p>
            <a 
              href="#contact" 
              className="px-6 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-all inline-block"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
