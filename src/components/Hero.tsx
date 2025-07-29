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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in tracking-tight">
            Donnersbergerknospe
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent block">
              E.V
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-md mx-auto">
            Cannabis Social Club
          </p>

          <Button 
            size="default"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 transition-all duration-300 text-base px-8 py-3"
          >
            Mitglied werden
            <ArrowRight className="ml-2 h-4 w-4" />
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