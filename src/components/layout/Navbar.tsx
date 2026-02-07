import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import arjyLogo from "@/assets/arjy-logo.jpeg";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Products",
    path: "/products",
    children: [
      { label: "Borewell Submersible", path: "/products/borewell" },
      { label: "Openwell Submersible", path: "/products/openwell" },
      { label: "Domestic Pumps", path: "/products/domestic" },
      { label: "Agricultural Pumps", path: "/products/agricultural" },
    ],
  },
  { label: "About Us", path: "/about" },
  { label: "Applications", path: "/applications" },
  { label: "Why ARJY", path: "/why-arjy" },
  { label: "Dealer", path: "/dealer" },
  { label: "Support", path: "/support" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="hero-gradient text-primary-foreground py-2 text-sm hidden md:block">
        <div className="container-wide flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919835084322" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 9835084322</span>
            </a>
            <a href="mailto:arjyelectricals@gmail.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Mail className="w-3.5 h-3.5" />
              <span>arjyelectricals@gmail.com</span>
            </a>
          </div>
          <div className="text-primary-foreground/80">
            Engineered for Powerful Water Flow
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-card/95 backdrop-blur-md sticky top-0 z-50 border-b border-border">
        <div className="container-wide flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={arjyLogo} alt="ARJY Pumps" className="h-12 md:h-14 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path) || location.pathname.startsWith("/products")
                        ? "text-primary bg-secondary"
                        : "text-foreground hover:text-primary hover:bg-secondary/50"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </Link>
                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-card rounded-xl border border-border elevated-shadow overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-4 py-3 text-sm transition-colors ${
                              isActive(child.path)
                                ? "bg-secondary text-primary font-medium"
                                : "text-foreground hover:bg-secondary/50 hover:text-primary"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-primary bg-secondary"
                      : "text-foreground hover:text-primary hover:bg-secondary/50"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden md:block">
              <Button variant="hero" size="default">
                Get a Quote
              </Button>
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-border bg-card"
            >
              <div className="container-wide py-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.path)
                          ? "text-primary bg-secondary"
                          : "text-foreground hover:text-primary hover:bg-secondary/50"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-6 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-3">
                  <Link to="/contact" onClick={() => setMobileOpen(false)}>
                    <Button variant="hero" className="w-full">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
