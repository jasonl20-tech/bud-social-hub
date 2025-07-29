import { Card } from "@/components/ui/card";
import { Users, Shield, Leaf, Heart } from "lucide-react";
import clubInterior from "@/assets/club-interior.jpg";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Gemeinschaft",
      description: "Eine offene und respektvolle Gemeinschaft von Cannabis-Enthusiasten"
    },
    {
      icon: Shield,
      title: "Legal & Sicher",
      description: "Vollständig legal und in Übereinstimmung mit allen geltenden Gesetzen"
    },
    {
      icon: Leaf,
      title: "Qualität",
      description: "Hochwertige, kontrollierte Cannabis-Produkte für unsere Mitglieder"
    },
    {
      icon: Heart,
      title: "Wohlbefinden",
      description: "Fokus auf Gesundheit, Aufklärung und verantwortungsvollen Konsum"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        {/* Glass bubble for main title */}
        <div className="text-center mb-16">
          <div className="bg-black/20 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Was wir <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">machen</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Wir sind ein Cannabis Social Club, der eine sichere, legale und verantwortungsvolle Cannabis-Gemeinschaft schafft.
            </p>
          </div>
        </div>

        {/* Glass bubble for mission */}
        <div className="mb-16">
          <div className="bg-black/20 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  Unsere Mission
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Donnersbergerknospe E.V wurde 2019 gegründet mit dem Ziel, eine professionelle 
                  und sichere Umgebung für Cannabis-Liebhaber zu schaffen. Wir glauben an 
                  Aufklärung, Gemeinschaft und die positiven Aspekte von Cannabis.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Als registrierter Verein folgen wir strengen Qualitätsstandards und 
                  arbeiten eng mit den Behörden zusammen, um eine vollständig legale 
                  und transparente Operation zu gewährleisten.
                </p>
              </div>
              <div className="relative">
                <img
                  src={clubInterior}
                  alt="Club Interior"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Glass bubbles for features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-black/20 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6 text-center shadow-xl hover:bg-green-500/10 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <feature.icon className="h-12 w-12 text-green-400" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;