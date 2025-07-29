import { Card } from "@/components/ui/card";
import { Users, Shield, Leaf, Heart } from "lucide-react";
import clubInterior from "@/assets/club-interior.jpg";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Community",
      description: "Eine starke Gemeinschaft von Cannabis-Liebhabern mit gemeinsamen Werten"
    },
    {
      icon: Shield,
      title: "100% Legal",
      description: "Vollständig reguliert und nach deutschem Recht betrieben"
    },
    {
      icon: Leaf,
      title: "Premium Qualität",
      description: "Hochwertige Cannabis-Sorten aus kontrolliertem Anbau"
    },
    {
      icon: Heart,
      title: "Aufklärung",
      description: "Bildung über verantwortlichen Konsum und Cannabis-Kultur"
    }
  ];

  return (
    <section id="about" className="py-24 bg-black/90">
      <div className="container mx-auto px-4 animate-fade-in">
        {/* Glass bubble for main title */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="bg-black/20 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Was wir <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">bieten</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Donnersbergerknospe E.V ist Ihr Zugang zu einer professionellen Cannabis-Community mit höchsten Standards.
            </p>
          </div>
        </div>

        {/* Glass bubble for mission */}
        <div className="mb-16" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-black/20 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">
                  Unser Angebot
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Als Cannabis Social Club bieten wir unseren Mitgliedern exklusiven Zugang zu 
                  hochwertigen Cannabis-Produkten in einer sicheren und legalen Umgebung. 
                  Unsere Clubräume sind ein Ort der Begegnung und des Austauschs.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Wir organisieren regelmäßige Events, Workshops und Bildungsveranstaltungen 
                  rund um Cannabis-Kultur, Anbautechniken und verantwortlichen Konsum. 
                  Ihre Sicherheit und Zufriedenheit stehen bei uns an erster Stelle.
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="300">
          {features.map((feature, index) => (
            <div key={index} className="bg-black/20 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6 text-center shadow-xl hover:bg-green-500/10 transition-all duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay={400 + index * 100}>
              <div className="flex justify-center mb-4">
                <feature.icon className="h-12 w-12 text-green-400" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">{feature.title}</h4>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;