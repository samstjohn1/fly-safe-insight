import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plane, ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden bg-gradient-primary p-12 md:p-16 text-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 transform rotate-12">
              <Plane className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="absolute top-20 right-16 transform -rotate-12">
              <Plane className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="absolute bottom-16 left-20 transform rotate-45">
              <Plane className="w-10 h-10 text-primary-foreground" />
            </div>
            <div className="absolute bottom-10 right-10 transform -rotate-45">
              <Plane className="w-7 h-7 text-primary-foreground" />
            </div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Fly with Confidence?
            </h2>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Be among the first to access our mobile app and get instant aircraft transparency for every flight.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="accent" 
                size="lg" 
                className="w-full sm:w-auto group"
              >
                Sign Up for Early Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
              >
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">10,000+</div>
                <div className="text-sm text-primary-foreground/80">Flights Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">50+</div>
                <div className="text-sm text-primary-foreground/80">Airlines Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">Real-time</div>
                <div className="text-sm text-primary-foreground/80">Data Updates</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};