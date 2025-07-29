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
      content: "Grüne Straße 123\n10115 Berlin",
      link: "https://maps.google.com"
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+49 30 12345678",
      link: "tel:+493012345678"
    },
    {
      icon: Mail,
      title: "E-Mail",
      content: "info@greencircle-csc.de",
      link: "mailto:info@greencircle-csc.de"
    },
    {
      icon: Clock,
      title: "Öffnungszeiten",
      content: "Mo-Fr: 14:00-22:00\nSa-So: 12:00-23:00",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Kontakt & <span className="text-primary">Besuch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Haben Sie Fragen oder möchten Sie uns besuchen? Wir freuen uns auf Ihre Nachricht 
            oder Ihren Besuch in unserem Club.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card border-border/50">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Nachricht senden</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Vorname</label>
                  <Input placeholder="Ihr Vorname" className="border-border/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Nachname</label>
                  <Input placeholder="Ihr Nachname" className="border-border/50" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">E-Mail</label>
                <Input type="email" placeholder="ihre.email@example.com" className="border-border/50" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Telefon (optional)</label>
                <Input type="tel" placeholder="+49 30 12345678" className="border-border/50" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Betreff</label>
                <Input placeholder="Worum geht es?" className="border-border/50" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Nachricht</label>
                <Textarea 
                  placeholder="Ihre Nachricht an uns..." 
                  rows={5}
                  className="border-border/50"
                />
              </div>
              
              <Button className="w-full bg-gradient-primary shadow-soft hover:shadow-medium transition-all" size="lg">
                Nachricht senden
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Kontakt & Info</h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 bg-card border-border/50 hover:shadow-soft transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            {/* Important Notice */}
            <Card className="p-6 bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800">
              <h4 className="font-semibold text-foreground mb-3">Wichtiger Hinweis</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Der Zutritt zu unserem Club ist nur für Mitglieder ab 21 Jahren gestattet. 
                Bitte bringen Sie einen gültigen Lichtbildausweis mit. Erstbesucher benötigen 
                eine Anmeldung und ein kurzes Aufnahmegespräch.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;