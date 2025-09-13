import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, Search, FileText, Shield } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: QrCode,
      title: "Scan or Enter Flight",
      description: "Scan your boarding pass or enter your airline and flight number to get started."
    },
    {
      number: "02", 
      icon: Search,
      title: "Aircraft Identification",
      description: "We pull real-time aircraft assignment data from trusted flight tracking APIs."
    },
    {
      number: "03",
      icon: FileText,
      title: "Generate Profile",
      description: "Instant aircraft profile with age, maintenance records, and fleet comparison."
    },
    {
      number: "04",
      icon: Shield,
      title: "Safety Context",
      description: "Comprehensive safety statistics and trust score for peace of mind."
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How It
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our mobile app delivers aircraft transparency in four simple steps, powered by real-time aviation data.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 border-border/50 hover:shadow-soft transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-xs font-bold text-primary">{step.number}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* App Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-xl animate-float"></div>
              <img 
                src={appMockup} 
                alt="Aircraft transparency app interface"
                className="relative w-80 h-auto rounded-3xl shadow-feature"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            Sign Up for Early Access
          </Button>
        </div>
      </div>
    </section>
  );
};