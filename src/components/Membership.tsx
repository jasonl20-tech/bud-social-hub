import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Crown, Leaf } from "lucide-react";

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
    <section id="membership" className="py-24 bg-black/90">
      <div className="container mx-auto px-4 animate-fade-in">
        {/* Glass bubble for title */}
        <div className="text-center mb-16">
          <div className="bg-black/20 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Mitgliedschaft</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Werden Sie Teil unserer exklusiven Cannabis-Community und genießen Sie die Vorteile einer legalen, sicheren Umgebung.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-black/20 backdrop-blur-xl border border-green-500/20 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-green-500/10 shadow-xl ${
                plan.popular 
                  ? 'scale-105 border-green-400/40 shadow-2xl' 
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold">
                    Beliebteste Wahl
                  </span>
                </div>
              )}

              <div className="flex justify-center mb-6">
                <div className="flex gap-2">
                  {index === 0 && (
                    <Leaf className="h-14 w-14 text-green-400" />
                  )}
                  {index === 1 && (
                    <>
                      <Leaf className="h-14 w-14 text-green-400" />
                      <Leaf className="h-14 w-14 text-green-400" />
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <Leaf className="h-14 w-14 text-green-400" />
                      <Leaf className="h-14 w-14 text-green-400" />
                      <Leaf className="h-14 w-14 text-green-400" />
                    </>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
              <p className="text-gray-300 mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold text-white">€{plan.price}</span>
                <span className="text-gray-300">/{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-left">
                    <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full font-semibold ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white' 
                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white'
                }`}
                size="lg"
              >
                {plan.name} wählen
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA in glass bubble */}
        <div className="text-center mt-12">
          <div className="bg-black/20 backdrop-blur-xl border border-green-500/20 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <p className="text-gray-300 mb-6">
              Alle Preise verstehen sich inklusive MwSt. • Mindestvertragslaufzeit: 6 Monate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white font-medium">
                Club-Tour vereinbaren
              </Button>
              <Button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white font-medium">
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