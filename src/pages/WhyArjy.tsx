import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import { motion } from "framer-motion";
import { Settings, Zap, Shield, Headphones, Clock, Wrench, Award, TrendingUp } from "lucide-react";

const advantages = [
  {
    icon: Settings,
    title: "Engineering Excellence",
    description: "Every pump is designed using advanced CAD software and manufactured with CNC precision. Our engineering team brings decades of experience in fluid dynamics and motor design.",
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    description: "Our pumps consume up to 30% less power than conventional alternatives. Smart motor design and optimized impeller geometry deliver maximum output with minimal electricity usage.",
  },
  {
    icon: Shield,
    title: "Premium Material Quality",
    description: "We use only SS 304 grade stainless steel for impellers and diffusers. Our motors feature copper windings and high-grade insulation for long-lasting performance.",
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    description: "A pan-India service network with trained technicians ensures quick support whenever you need it. Our warranty and AMC programs provide complete peace of mind.",
  },
  {
    icon: Clock,
    title: "Long Life Performance",
    description: "Built to last 15+ years with minimal maintenance. Our rigorous testing process subjects every pump to extreme conditions to ensure field reliability.",
  },
  {
    icon: Wrench,
    title: "Easy Maintenance",
    description: "Modular design allows for quick disassembly and servicing. Standard spare parts are readily available through our dealer network across India.",
  },
  {
    icon: Award,
    title: "Certified Quality",
    description: "ISO 9001:2015 certified manufacturing process. All products are ISI marked and comply with BIS standards for safety and performance.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Innovation",
    description: "Our R&D lab continuously works on improving efficiency, reducing noise, and developing smart pump solutions with IoT monitoring capabilities.",
  },
];

const WhyArjy = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 md:py-24">
        <div className="container-wide text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Why ARJY</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Discover what makes ARJY Pumps the preferred choice for thousands of customers across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-5 bg-card rounded-2xl p-7 card-shadow hover:elevated-shadow transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl water-gradient flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="hero-gradient py-16">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10,000+", label: "Pumps Delivered" },
              { number: "500+", label: "Dealers Nationwide" },
              { number: "15+", label: "Years Experience" },
              { number: "99%", label: "Customer Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-1">{stat.number}</div>
                <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyArjy;
