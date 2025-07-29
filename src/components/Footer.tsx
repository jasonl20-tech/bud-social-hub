import { Leaf, Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" }, 
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:info@greencircle-csc.de", label: "E-Mail" }
  ];

  const legalLinks = [
    { name: "Impressum", href: "#" },
    { name: "Datenschutz", href: "#" },
    { name: "AGB", href: "#" },
    { name: "Vereinssatzung", href: "#" }
  ];

  const quickLinks = [
    { name: "Über uns", href: "#about" },
    { name: "Mitgliedschaft", href: "#membership" },
    { name: "Events", href: "#events" },
    { name: "Kontakt", href: "#contact" }
  ];

  return (
    <footer className="bg-black/95 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8" />
              <span className="text-xl font-bold">Donnersbergerknospe E.V</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Ein Cannabis Social Club für verantwortungsvollen und legalen Cannabis-Konsum 
              in der Region Donnersbergkreis. Gemeinschaft, Bildung und Qualität stehen im Mittelpunkt.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-green-500/20 rounded-xl hover:bg-green-500/30 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-gray-300">
              <p>Donnersberg Straße 45<br />67295 Bolanden</p>
              <p>Tel: +49 6352 123456</p>
              <p>info@donnersbergerknospe.de</p>
            </div>
            <div className="mt-4">
              <h5 className="font-medium mb-2">Öffnungszeiten</h5>
              <p className="text-sm text-gray-300">
                Mo-Fr: 14:00-22:00<br />
                Sa-So: 12:00-23:00
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-green-500/20 rounded-xl">
              <p className="text-xs text-gray-300 leading-relaxed">
                Nur für Mitglieder ab 21 Jahren. Cannabis wird ausschließlich an Vereinsmitglieder 
                abgegeben. Kein Verkauf an Dritte.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Donnersbergerknospe E.V. Alle Rechte vorbehalten.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Registrierter Verein • Vereinsregister Berlin VR 12345
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;