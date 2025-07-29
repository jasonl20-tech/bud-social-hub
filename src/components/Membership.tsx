import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Crown } from "lucide-react";

const Membership = () => {
  const plans = [
    {
      name: "Basis",
      price: "30",
      period: "Monat",
      description: "Perfekt für Einsteiger",
      features: [
        "Zugang zu den Club-Räumlichkeiten",
        "Basis Cannabis-Auswahl",
        "Teilnahme an Events",
        "Community-Zugang",
        "Beratung durch Experten"
      ],
      popular: false,
      icon: Check
    },
    {
      name: "Premium",
      price: "50",
      period: "Monat",
      description: "Unser beliebtestes Paket",
      features: [
        "Alle Basis-Vorteile",
        "Premium Cannabis-Auswahl", 
        "Priorität bei Events",
        "Exklusive Sorten",
        "Persönliche Beratung",
        "Gastfreund-Privilegien"
      ],
      popular: true,
      icon: Star
    },
    {
      name: "VIP",
      price: "80",
      period: "Monat",
      description: "Das ultimative Erlebnis",
      features: [
        "Alle Premium-Vorteile",
        "VIP-Lounge Zugang",
        "Limitierte Editionen",
        "Private Events",
        "Concierge-Service",
        "Cultivation Workshops",
        "Exklusive Partnerschaften"
      ],
      popular: false,
      icon: Crown
    }
  ];

  return (
    <section id="membership" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Mitgliedschaft
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Wählen Sie die Mitgliedschaft, die am besten zu Ihren Bedürfnissen passt. 
            Alle Mitgliedschaften beinhalten den Zugang zu unserem Club und unserer Gemeinschaft.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 text-center transition-all duration-300 hover:shadow-medium rounded-sm ${
                plan.popular 
                  ? 'border-primary shadow-glow scale-105 bg-gradient-card' 
                  : 'bg-card border-border hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-4 py-2 rounded-sm text-sm font-semibold">
                    Beliebteste Wahl
                  </span>
                </div>
              )}

              <div className="flex justify-center mb-4">
                <plan.icon className={`h-12 w-12 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
              </div>

              <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold text-foreground">€{plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-left">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full rounded-sm font-semibold ${
                  plan.popular 
                    ? 'bg-gradient-primary shadow-soft hover:shadow-medium' 
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
                size="lg"
              >
                {plan.name} wählen
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Alle Preise verstehen sich inklusive MwSt. Mindestlaufzeit: 3 Monate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="rounded-sm font-medium">
              Kostenlose Clubführung
            </Button>
            <Button variant="outline" size="lg" className="rounded-sm font-medium">
              Fragen zur Mitgliedschaft?
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;