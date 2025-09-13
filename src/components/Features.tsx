import { Card } from "@/components/ui/card";
import { Search, Plane, Shield, BarChart3, Clock, Award } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Flight Lookup",
      description: "Enter your airline and flight number to instantly identify your specific aircraft.",
      highlight: "Real-time aircraft assignment"
    },
    {
      icon: Plane,
      title: "Aircraft Profile",
      description: "Detailed information about your plane including model, age, and airline fleet context.",
      highlight: "Complete aircraft history"
    },
    {
      icon: Shield,
      title: "Safety Records",
      description: "Historical safety data for your aircraft type with industry-wide safety statistics.",
      highlight: "Transparent safety data"
    },
    {
      icon: BarChart3,
      title: "Fleet Comparison",
      description: "See how your aircraft compares to the airline's fleet average age and specifications.",
      highlight: "Context-driven insights"
    },
    {
      icon: Clock,
      title: "Maintenance History",
      description: "Access to maintenance schedules and compliance records for complete transparency.",
      highlight: "Verified maintenance data"
    },
    {
      icon: Award,
      title: "Trust Score",
      description: "Our proprietary algorithm creates a trust score based on multiple safety factors.",
      highlight: "Data-driven confidence"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Fly Confident</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive aircraft information at your fingertips, sourced from trusted aviation databases.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-feature transition-all duration-300 group bg-card/50 border-border/50 hover:border-primary/20"
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-sm font-medium text-accent">{feature.highlight}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};