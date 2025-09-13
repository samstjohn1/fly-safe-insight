import { Button } from "@/components/ui/button";
import { Plane, Shield, Clock, Users, Smartphone } from "lucide-react";
import heroAirplane from "@/assets/hero-airplane.jpg";
import appMockup from "@/assets/app-mockup.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroAirplane} 
          alt="Commercial aircraft in flight" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Smartphone className="w-6 h-6 text-primary" />
              <span className="text-base font-medium text-primary">Mobile App Coming Soon</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Know Your
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Aircraft</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              The mobile app that gives you transparent, contextual information about your specific aircraft to reduce flight anxiety.
            </p>
            
            {/* Key Questions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border/50">
                <Clock className="w-8 h-8 text-accent flex-shrink-0" />
                <span className="text-sm text-muted-foreground">"How old is this plane?"</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border/50">
                <Shield className="w-8 h-8 text-accent flex-shrink-0" />
                <span className="text-sm text-muted-foreground">"What's its safety record?"</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border/50">
                <Users className="w-8 h-8 text-accent flex-shrink-0" />
                <span className="text-sm text-muted-foreground">"Maintenance history?"</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border/50">
                <Plane className="w-8 h-8 text-accent flex-shrink-0" />
                <span className="text-sm text-muted-foreground">"Aircraft type safety?"</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Sign Up for Early Access
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Watch Demo
              </Button>
            </div>
            
            {/* Trust Badge */}
            <p className="text-sm text-muted-foreground mt-6">
              Powered by real-time data from FlightAware & FlightRadar24
            </p>
          </div>

          {/* Right Content - App Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-xl animate-float"></div>
              <img 
                src={appMockup} 
                alt="Aircraft transparency mobile app interface showing flight details"
                className="relative w-80 h-auto rounded-3xl shadow-feature"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};