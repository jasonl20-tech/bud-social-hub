import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Über uns", href: "#about" },
    { name: "Mitgliedschaft", href: "#membership" },
    { name: "Events", href: "#events" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/10 backdrop-blur-xl border-b border-white/10 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/693911bd-59a2-4958-8bd0-6d57805592bc.png" 
              alt="Donnersberger Knospe Logo" 
              className="h-10 w-10"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Donnersbergerknospe E.V</span>
          </div>

          {/* Desktop Navigation - removed */}

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-primary shadow-none hover:shadow-soft transition-all px-6 py-2 font-medium">
              Mitglied werden
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 shadow-medium">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 pt-2">
                <Button className="w-full bg-gradient-primary">
                  Mitglied werden
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;