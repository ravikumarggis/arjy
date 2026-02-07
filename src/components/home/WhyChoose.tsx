import { motion } from "framer-motion";
import { Settings, Zap, Shield, Headphones, Clock, Wrench } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const reasons = [
  { icon: Settings, title: "Engineering Excellence", description: "Precision-engineered with latest CNC technology" },
  { icon: Zap, title: "Energy Efficient", description: "Save up to 30% on electricity costs" },
  { icon: Shield, title: "SS 304 Construction", description: "Premium stainless steel for corrosion resistance" },
  { icon: Headphones, title: "After-Sales Support", description: "Dedicated service network across India" },
  { icon: Clock, title: "Long Life Performance", description: "Built to last 15+ years with minimal maintenance" },
  { icon: Wrench, title: "Easy Maintenance", description: "Simple design for hassle-free servicing" },
];

const WhyChoose = () => {
  return (
    <section className="section-padding ocean-gradient-bg water-pattern">
      <div className="container-wide">
        <SectionHeader
          label="Why Choose Us"
          title="The ARJY Advantage"
          description="Every ARJY pump is a testament to our commitment to quality, performance, and customer satisfaction."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-start gap-4 bg-card rounded-2xl p-6 card-shadow hover:elevated-shadow transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl water-gradient flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
