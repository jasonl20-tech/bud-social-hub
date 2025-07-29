import { Card } from "@/components/ui/card";
import { Leaf, Star, Zap, Heart } from "lucide-react";
import { useEffect, useRef } from "react";

const Strains = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;
    
    if (!section || !scrollContainer) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Check if we're in the section
      if (rect.top <= 0 && rect.bottom > windowHeight) {
        const scrollProgress = Math.abs(rect.top) / (sectionHeight - windowHeight);
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const scrollLeft = scrollProgress * maxScroll;
        
        scrollContainer.scrollLeft = scrollLeft;
        
        // When horizontal scroll is complete, allow normal scrolling
        if (scrollLeft >= maxScroll - 10) {
          document.body.style.overflow = 'auto';
        } else {
          document.body.style.overflow = 'hidden';
        }
      } else {
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
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
    <section ref={sectionRef} id="strains" className="bg-black/90" style={{ height: '200vh' }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        {/* Glass bubble for title */}
        <div className="container mx-auto px-4 text-center mb-16">
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
        <div className="container mx-auto px-4">
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
        
        {/* Scroll indicator */}
        <div className="container mx-auto px-4 text-center mt-8">
          <p className="text-gray-400 text-sm">Scrollen Sie weiter um durch die Sorten zu navigieren</p>
        </div>
      </div>
    </section>
  );
};

export default Strains;