import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Leaf, Shield } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in tracking-tight">
            Donnersbergerknospe
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent block">
              E.V
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-xl mx-auto">
            Cannabis Social Club
          </p>

          <Button 
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-12 py-4 font-semibold"
          >
            Mitglied werden
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;