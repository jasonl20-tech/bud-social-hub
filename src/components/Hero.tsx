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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Cannabis
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              {" "}Social Club
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Eine Gemeinschaft für verantwortungsvollen Cannabis-Konsum in legaler und sicherer Umgebung
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4"
            >
              Mitglied werden
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              Mehr erfahren
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-gray-300">Aktive Mitglieder</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Leaf className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-gray-300">Legal & Sicher</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="h-8 w-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold mb-1">5</div>
              <div className="text-gray-300">Jahre Erfahrung</div>
            </div>
          </div>
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