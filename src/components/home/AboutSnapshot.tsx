import { motion } from "framer-motion";
import { Shield, Zap, Award } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const highlights = [
  {
    icon: Shield,
    title: "Unmatched Quality",
    description: "Premium stainless steel construction with rigorous quality testing at every stage.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Energy-efficient motors delivering maximum water output with minimal power consumption.",
  },
  {
    icon: Award,
    title: "Trusted Brand",
    description: "Thousands of satisfied customers across India trust ARJY for reliable water solutions.",
  },
];

const AboutSnapshot = () => {
  return (
    <section className="section-padding ocean-gradient-bg water-pattern">
      <div className="container-wide">
        <SectionHeader
          label="About ARJY"
          title="Powering India's Water Needs"
          description="ARJY Pumps is a leading manufacturer of submersible pumps, delivering engineered water solutions with cutting-edge technology and unwavering commitment to quality."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 card-shadow hover:elevated-shadow transition-shadow duration-300 text-center group"
            >
              <div className="w-16 h-16 rounded-2xl water-gradient flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
