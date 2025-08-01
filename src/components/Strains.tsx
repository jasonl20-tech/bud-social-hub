import { Card } from "@/components/ui/card";
import { Leaf, Star, Zap, Heart } from "lucide-react";
import { useEffect, useRef } from "react";

const Strains = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const duration = 8000; // 8 seconds for one cycle
    let animationId: number;

    const animate = () => {
      const now = Date.now();
      const progress = ((now / duration) % 1); // Creates a looping 0-1 cycle
      
      // Smooth easing function
      const easeInOut = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      scrollContainer.scrollLeft = easeInOut * maxScroll;
      
      animationId = requestAnimationFrame(animate);
    };

    // Start animation after a short delay
    const timer = setTimeout(() => {
      animate();
    }, 1000);

    return () => {
      clearTimeout(timer);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const strains = [
    {
      name: "Green Gelato",
      type: "Hybrid",
      thc: "22%",
      cbd: "1%",
      effects: ["Entspannend", "Kreativ", "Euphorisch"],
      flavor: "Süß, Zitrus, Beeren",
      icon: Leaf,
      gradient: "from-green-400 to-green-600"
    },
    {
      name: "Purple Haze",
      type: "Sativa",
      thc: "18%",
      cbd: "0.5%",
      effects: ["Energetisch", "Fokussiert", "Happy"],
      flavor: "Blumig, Süß, Erdig",
      icon: Star,
      gradient: "from-purple-400 to-purple-600"
    },
    {
      name: "Northern Lights",
      type: "Indica",
      thc: "24%",
      cbd: "2%",
      effects: ["Beruhigend", "Schmerzlindernd", "Schlaffördernd"],
      flavor: "Süß, Würzig, Holzig",
      icon: Zap,
      gradient: "from-blue-400 to-blue-600"
    },
    {
      name: "Wedding Cake",
      type: "Hybrid",
      thc: "20%",
      cbd: "1.5%",
      effects: ["Entspannend", "Glücklich", "Beruhigend"],
      flavor: "Vanille, Süß, Erdig",
      icon: Heart,
      gradient: "from-pink-400 to-pink-600"
    },
    {
      name: "Blue Dream",
      type: "Hybrid",
      thc: "19%",
      cbd: "1%",
      effects: ["Ausgewogen", "Kreativ", "Entspannt"],
      flavor: "Beeren, Süß, Zitrus",
      icon: Leaf,
      gradient: "from-cyan-400 to-cyan-600"
    },
    {
      name: "OG Kush",
      type: "Hybrid",
      thc: "25%",
      cbd: "0.8%",
      effects: ["Stark", "Entspannend", "Euphorisch"],
      flavor: "Zitrus, Kiefer, Erdig",
      icon: Star,
      gradient: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section id="strains" className="py-24 bg-black/90">
      <div className="container mx-auto px-4" data-aos="fade-up">
        {/* Glass bubble for title */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="bg-black/20 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Unsere <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Sorten</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Entdecken Sie unsere sorgfältig ausgewählten Cannabis-Sorten - von entspannenden Indicas bis hin zu energetischen Sativas.
            </p>
          </div>
        </div>

        {/* Horizontal scrolling strains list */}
        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          <div ref={scrollContainerRef} className="flex gap-6 overflow-x-hidden scrollbar-hide">
            {strains.map((strain, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-80 bg-black/20 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6 shadow-xl hover:bg-green-500/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${strain.gradient}`}>
                    <strain.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${strain.gradient} text-white`}>
                    {strain.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{strain.name}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">THC</p>
                    <p className="text-green-400 font-bold text-lg">{strain.thc}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 text-sm">CBD</p>
                    <p className="text-green-400 font-bold text-lg">{strain.cbd}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-2">Geschmack</p>
                  <p className="text-gray-300">{strain.flavor}</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm mb-2">Effekte</p>
                  <div className="flex flex-wrap gap-2">
                    {strain.effects.map((effect, effectIndex) => (
                      <span 
                        key={effectIndex}
                        className="px-2 py-1 bg-white/10 rounded-lg text-gray-300 text-xs"
                      >
                        {effect}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strains;