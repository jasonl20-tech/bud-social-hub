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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Über <span className="text-primary">Donnersbergerknospe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Wir sind ein Cannabis Social Club, der sich der Schaffung einer sicheren, 
            legalen und verantwortungsvollen Cannabis-Gemeinschaft widmet.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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
              className="rounded-sm shadow-medium w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-sm"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300 bg-gradient-card border-border/50 rounded-sm">
              <div className="flex justify-center mb-4">
                <feature.icon className="h-12 w-12 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;