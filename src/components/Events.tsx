import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "Cannabis & Wellness Workshop",
      date: "15. Februar 2024",
      time: "18:00 - 20:00",
      location: "Donnersbergerknospe Hauptraum",
      attendees: 25,
      maxAttendees: 30,
      description: "Erfahren Sie mehr über die therapeutischen Eigenschaften von Cannabis und verschiedene Anwendungsmethoden.",
      category: "Workshop"
    },
    {
      title: "Strain Tasting Event",
      date: "22. Februar 2024", 
      time: "19:00 - 22:00",
      location: "VIP Lounge",
      attendees: 18,
      maxAttendees: 20,
      description: "Probieren und bewerten Sie neue Sorten in entspannter Atmosphäre mit unseren Cannabis-Experten.",
      category: "Tasting"
    },
    {
      title: "Cultivation Basics Seminar",
      date: "1. März 2024",
      time: "16:00 - 18:30",
      location: "Schulungsraum",
      attendees: 12,
      maxAttendees: 15,
      description: "Grundlagen des Cannabis-Anbaus für Hobby-Gärtner. Nur für Premium+ Mitglieder.",
      category: "Seminar"
    },
    {
      title: "Community Meet & Greet",
      date: "8. März 2024",
      time: "17:00 - 21:00", 
      location: "Gesamte Clubfläche",
      attendees: 45,
      maxAttendees: 60,
      description: "Monatliches Treffen für alle Mitglieder. Networking, Entspannung und Gemeinschaft.",
      category: "Community"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Workshop": return "bg-blue-100 text-blue-800";
      case "Tasting": return "bg-green-100 text-green-800";
      case "Seminar": return "bg-purple-100 text-purple-800";
      case "Community": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="events" className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Aktuelle <span className="text-primary">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie unsere regelmäßigen Events, Workshops und Community-Treffen. 
            Bildung, Gemeinschaft und Spaß stehen im Mittelpunkt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <Card key={index} className="p-6 bg-card border-border/50 hover:shadow-medium transition-all duration-300 rounded-sm">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-sm text-sm font-medium ${getCategoryColor(event.category)}`}>
                  {event.category}
                </span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-1" />
                  {event.attendees}/{event.maxAttendees}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-foreground">{event.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  {event.date}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  {event.time}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  {event.location}
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  className="flex-1 bg-gradient-primary shadow-soft hover:shadow-medium transition-all rounded-sm font-semibold"
                  disabled={event.attendees >= event.maxAttendees}
                >
                  {event.attendees >= event.maxAttendees ? "Ausgebucht" : "Anmelden"}
                </Button>
                <Button variant="outline" className="border-primary/30 hover:bg-primary/10 rounded-sm font-medium">
                  Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 rounded-sm font-medium">
            Alle Events anzeigen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;