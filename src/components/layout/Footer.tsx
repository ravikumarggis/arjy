import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import arjyLogo from "@/assets/arjy-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      {/* Main Footer */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src={arjyLogo} alt="ARJY Pumps" className="h-16 w-auto object-contain brightness-200" />
            <p className="text-navy-foreground/70 text-sm leading-relaxed">
              Engineered for powerful water flow. ARJY Pumps delivers high-performance submersible and domestic pumps for agriculture, residential, and industrial applications.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-navy-foreground/10 flex items-center justify-center hover:bg-cyan transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", path: "/about" },
                { label: "Products", path: "/products" },
                { label: "Applications", path: "/applications" },
                { label: "Why ARJY", path: "/why-arjy" },
                { label: "Become a Dealer", path: "/dealer" },
                { label: "Support", path: "/support" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-navy-foreground/70 hover:text-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Borewell Submersible", path: "/products/borewell" },
                { label: "Openwell Submersible", path: "/products/openwell" },
                { label: "Domestic Pumps", path: "/products/domestic" },
                { label: "Agricultural Pumps", path: "/products/agricultural" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-navy-foreground/70 hover:text-cyan transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-navy-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-cyan" />
                <span>Mangal Pur Road , Near Rangella Banquet Hall, Karnal, Haryana - 132001</span>
              </li>
              <li>
                <a href="tel:+919835084322" className="flex items-center gap-3 text-sm text-navy-foreground/70 hover:text-cyan transition-colors">
                  <Phone className="w-4 h-4 shrink-0 text-cyan" />
                  <span>+91 9835084322</span>
                </a>
              </li>
              <li>
                <a href="mailto:arjyelectricals@gmail.com" className="flex items-center gap-3 text-sm text-navy-foreground/70 hover:text-cyan transition-colors">
                  <Mail className="w-4 h-4 shrink-0 text-cyan" />
                  <span>arjyelectricals@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-foreground/10">
        <div className="container-wide py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-navy-foreground/50">
          <p>&copy; {new Date().getFullYear()} ARJY Pumps. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-navy-foreground transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-navy-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
