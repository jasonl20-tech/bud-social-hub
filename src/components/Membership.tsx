import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Crown } from "lucide-react";

const Membership = () => {
  const plans = [
    {
      name: "Starter",
      price: "25",
      period: "Monat",
      description: "Ideal für Cannabis-Neulinge",
      features: [
        "Club-Zugang täglich 16-22 Uhr",
        "Auswahl von 3 verschiedenen Sorten",
        "Monatliches Limit: 10g",
        "Grundlegende Beratung",
        "Community-Events"
      ],
      popular: false,
      icon: Check
    },
    {
      name: "Standard",
      price: "45",
      period: "Monat",
      description: "Die perfekte Balance",
      features: [
        "Club-Zugang täglich 14-24 Uhr",
        "Auswahl von 8 verschiedenen Sorten",
        "Monatliches Limit: 20g",
        "Persönliche Beratung",
        "Priorität bei neuen Sorten",
        "Exklusive Tastings"
      ],
      popular: true,
      icon: Star
    },
    {
      name: "Premium",
      price: "75",
      period: "Monat",
      description: "Das Vollprogramm",
      features: [
        "24/7 Club-Zugang",
        "Alle verfügbaren Sorten",
        "Monatliches Limit: 35g",
        "VIP-Lounge Zugang",
        "Private Beratungstermine",
        "Cultivation Workshops",
        "Gäste-Berechtigung (2 Personen)",
        "Sonderrabatte auf Zubehör"
      ],
      popular: false,
      icon: Crown
    }
  ];

  return (
    <section id="membership" className="py-32 bg-gradient-to-br from-black via-gray-900/50 to-black relative overflow-hidden">
      {/* Animated background bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-green-400/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-300/4 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Enhanced glass bubble for title */}
        <div className="text-center mb-20">
          <div className="bg-white/5 backdrop-blur-2xl border border-green-400/30 rounded-[2.5rem] p-12 md:p-16 shadow-[0_20px_60px_rgba(34,197,94,0.15)] max-w-5xl mx-auto hover:bg-white/8 transition-all duration-500 hover:shadow-[0_30px_80px_rgba(34,197,94,0.25)] hover:border-green-400/40">
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">
              <span className="bg-gradient-to-r from-green-300 via-green-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-lg">Mitgliedschaft</span>
            </h2>
            <p className="text-xl md:text-2xl text-green-50/90 leading-relaxed font-light max-w-3xl mx-auto">
              Werden Sie Teil unserer exklusiven Cannabis-Community und genießen Sie die Vorteile einer legalen, sicheren Umgebung.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`group relative bg-white/5 backdrop-blur-2xl border border-green-400/25 rounded-3xl p-10 text-center transition-all duration-500 hover:bg-white/10 hover:border-green-300/40 hover:shadow-[0_25px_50px_rgba(34,197,94,0.2)] hover:-translate-y-2 ${
                plan.popular 
                  ? 'scale-105 border-green-300/50 shadow-[0_20px_40px_rgba(34,197,94,0.25)] bg-white/8' 
                  : 'shadow-[0_15px_30px_rgba(0,0,0,0.3)]'
              }`}
            >
              {/* Floating glass bubble for popular badge */}
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white/10 backdrop-blur-xl border border-green-300/40 rounded-2xl px-6 py-3 shadow-[0_10px_30px_rgba(34,197,94,0.3)]">
                    <span className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent font-bold text-sm tracking-wide">
                      Beliebteste Wahl
                    </span>
                  </div>
                </div>
              )}

              {/* Icon in glass bubble */}
              <div className="flex justify-center mb-8">
                <div className={`bg-white/10 backdrop-blur-xl border rounded-2xl p-4 transition-all duration-300 group-hover:bg-white/15 group-hover:scale-110 ${
                  plan.popular ? 'border-green-300/40 shadow-[0_10px_20px_rgba(34,197,94,0.2)]' : 'border-white/20'
                }`}>
                  <plan.icon className={`h-14 w-14 ${plan.popular ? 'text-green-300' : 'text-green-200/70'}`} />
                </div>
              </div>

              <h3 className="text-3xl font-black mb-3 text-white tracking-tight">{plan.name}</h3>
              <p className="text-green-100/80 mb-8 font-light text-lg">{plan.description}</p>

              {/* Price in glass bubble */}
              <div className="mb-10">
                <div className="bg-white/8 backdrop-blur-xl border border-green-400/20 rounded-2xl p-6 inline-block">
                  <span className="text-5xl font-black text-white">€{plan.price}</span>
                  <span className="text-green-200/70 text-lg font-medium">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-left">
                    <div className="bg-green-400/20 backdrop-blur-sm rounded-full p-1 mr-4 mt-0.5 flex-shrink-0">
                      <Check className="h-4 w-4 text-green-300" />
                    </div>
                    <span className="text-green-50/90 font-medium leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full font-bold text-lg py-4 rounded-2xl transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white shadow-[0_10px_30px_rgba(34,197,94,0.4)] hover:shadow-[0_15px_40px_rgba(34,197,94,0.5)] hover:scale-105' 
                    : 'bg-white/10 backdrop-blur-xl hover:bg-white/20 border border-white/30 hover:border-white/40 text-white shadow-[0_8px_25px_rgba(255,255,255,0.1)]'
                }`}
                size="lg"
              >
                {plan.name} wählen
              </Button>
            </div>
          ))}
        </div>

        {/* Enhanced bottom CTA in glass bubble */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-2xl border border-green-400/30 rounded-3xl p-10 shadow-[0_20px_50px_rgba(34,197,94,0.15)] max-w-3xl mx-auto hover:bg-white/8 transition-all duration-500 hover:border-green-300/40">
            <p className="text-green-100/80 mb-8 text-lg font-light leading-relaxed">
              Alle Preise verstehen sich inklusive MwSt. • Mindestvertragslaufzeit: 6 Monate
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white/10 backdrop-blur-xl hover:bg-white/20 border border-green-300/30 hover:border-green-300/50 text-white font-bold py-4 px-8 rounded-2xl shadow-[0_8px_25px_rgba(255,255,255,0.1)] hover:shadow-[0_12px_35px_rgba(34,197,94,0.2)] transition-all duration-300 hover:scale-105">
                Club-Tour vereinbaren
              </Button>
              <Button className="bg-white/10 backdrop-blur-xl hover:bg-white/20 border border-green-300/30 hover:border-green-300/50 text-white font-bold py-4 px-8 rounded-2xl shadow-[0_8px_25px_rgba(255,255,255,0.1)] hover:shadow-[0_12px_35px_rgba(34,197,94,0.2)] transition-all duration-300 hover:scale-105">
                Beratungstermin
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;