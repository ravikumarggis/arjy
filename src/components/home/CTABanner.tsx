import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-gradient py-20 md:py-28">
        {/* Decorative circles */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-cyan/10 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-48 rounded-full bg-primary-foreground/5 blur-2xl" />

        <div className="container-wide relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Power Your Water Needs with ARJY Pumps
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Get in touch with us for product enquiries, dealer partnerships, or technical support.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="amber" size="xl">
                  Get a Quote
                </Button>
              </Link>
              <Link to="/dealer">
                <Button variant="heroOutline" size="xl">
                  Dealer Enquiry
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
