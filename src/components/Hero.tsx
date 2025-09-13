import { Button } from "@/components/ui/button";
import { Plane, Shield, Clock, Users } from "lucide-react";
import heroAirplane from "@/assets/hero-airplane.jpg";

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
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Transparent Aviation Data</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Know Your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Aircraft</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Get transparent, contextual information about your specific aircraft to reduce anxiety and build trust in your flight.
          </p>
          
          {/* Key Questions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
              <Clock className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-sm text-muted-foreground">"How old is this plane?"</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
              <Shield className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-sm text-muted-foreground">"What's its safety record?"</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
              <Users className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-sm text-muted-foreground">"Has it been maintained properly?"</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
              <Plane className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-sm text-muted-foreground">"How safe is this aircraft type?"</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              Try Demo Flight
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
          
          {/* Trust Badge */}
          <p className="text-sm text-muted-foreground mt-8">
            Powered by real-time data from FlightAware & FlightRadar24
          </p>
        </div>
      </div>
    </section>
  );
};