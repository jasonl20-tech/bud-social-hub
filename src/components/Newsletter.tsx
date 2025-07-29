import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-black/95">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="max-w-2xl mx-auto">
          <div className="bg-black/20 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 md:p-12 shadow-2xl text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-2xl">
                <Mail className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Bleibe auf dem <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Laufenden</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Erhalte die neuesten Updates über Events, neue Sorten und exklusive Angebote direkt in dein Postfach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Deine E-Mail-Adresse" 
                className="bg-white/10 border-white/20 text-white placeholder-gray-400 flex-1"
              />
              <Button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-8">
                Anmelden
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              Keine Sorge, wir spammen nicht. Du kannst dich jederzeit abmelden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;