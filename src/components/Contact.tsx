import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse", 
      content: "Donnersberg Straße 45\n67295 Bolanden",
      link: "https://maps.google.com"
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+49 6352 123456",
      link: "tel:+496352123456"
    },
    {
      icon: Mail,
      title: "E-Mail",
      content: "info@donnersbergerknospe.de",
      link: "mailto:info@donnersbergerknospe.de"
    },
    {
      icon: Clock,
      title: "Öffnungszeiten",
      content: "Mo-Fr: 14:00-22:00\nSa-So: 12:00-23:00",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-black/90">
      <div className="container mx-auto px-4">
        {/* Glass bubble for title */}
        <div className="text-center mb-16">
          <div className="bg-black/20 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Kontakt & <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Besuch</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Haben Sie Fragen oder möchten Sie uns besuchen? Wir freuen uns auf Ihre Nachricht oder Ihren Besuch in unserem Club.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form in glass bubble */}
          <div className="bg-black/20 backdrop-blur-xl border border-green-500/20 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-white">Nachricht senden</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Vorname</label>
                  <Input placeholder="Ihr Vorname" className="bg-white/10 border-white/20 text-white placeholder-gray-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Nachname</label>
                  <Input placeholder="Ihr Nachname" className="bg-white/10 border-white/20 text-white placeholder-gray-400" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">E-Mail</label>
                <Input type="email" placeholder="ihre.email@example.com" className="bg-white/10 border-white/20 text-white placeholder-gray-400" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Telefon (optional)</label>
                <Input type="tel" placeholder="+49 30 12345678" className="bg-white/10 border-white/20 text-white placeholder-gray-400" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Betreff</label>
                <Input placeholder="Worum geht es?" className="bg-white/10 border-white/20 text-white placeholder-gray-400" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Nachricht</label>
                <Textarea 
                  placeholder="Ihre Nachricht an uns..." 
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white transition-all" size="lg">
                Nachricht senden
              </Button>
            </form>
          </div>

          {/* Contact Information in glass bubbles */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-white">Kontakt & Info</h3>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-black/20 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6 shadow-xl hover:bg-green-500/10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 p-3 rounded-xl">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-2">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-gray-300 hover:text-green-400 transition-colors whitespace-pre-line"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-300 whitespace-pre-line">{info.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Important Notice in glass bubble */}
            <div className="bg-yellow-500/20 backdrop-blur-xl border border-yellow-500/30 rounded-2xl p-6 shadow-xl">
              <h4 className="font-semibold text-yellow-300 mb-3">Wichtiger Hinweis</h4>
              <p className="text-sm text-yellow-200 leading-relaxed">
                Der Zutritt zu unserem Club ist nur für Mitglieder ab 21 Jahren gestattet. 
                Bitte bringen Sie einen gültigen Lichtbildausweis mit. Erstbesucher benötigen 
                eine Anmeldung und ein kurzes Aufnahmegespräch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;