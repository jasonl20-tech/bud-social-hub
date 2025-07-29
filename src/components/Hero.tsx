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
      <div className="container mx-auto px-4 flex items-center justify-center min-h-screen relative z-10">
        {/* Left menu bubble - fixed at top */}
        <div className="fixed left-4 top-20 z-20 hidden lg:block">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10">
                Home
              </a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10">
                Über uns
              </a>
              <a href="#membership" className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10">
                Mitgliedschaft
              </a>
              <a href="#events" className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10">
                Events
              </a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10">
                Kontakt
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-12 w-full max-w-7xl">
          {/* Existing glass bubble - unchanged */}
          <div className="flex-1 max-w-4xl mx-auto">
            {/* Glass morphism bubble */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-20 shadow-2xl text-center text-white mx-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in tracking-tight">
                Donnersbergerknospe
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent block">
                  E.V
                </span>
              </h1>
              
              <p className="text-lg md:text-xl mb-8 text-gray-300">
                Cannabis Social Club
              </p>

              <Button 
                size="default"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 transition-all duration-300 text-base px-8 py-3"
              >
                Mitglied werden
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              {/* Scroll indicator inside bubble - clickable */}
              <a href="#about" className="mt-12 flex justify-center animate-bounce cursor-pointer">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-white/50 transition-colors">
                  <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;