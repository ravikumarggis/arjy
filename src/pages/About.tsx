import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import { motion } from "framer-motion";
import { Eye, Target, Shield, Award, CheckCircle } from "lucide-react";
import aboutFactory from "@/assets/about-factory.jpg";

const values = [
  { icon: Shield, title: "Quality First", text: "Every pump undergoes 100% testing before dispatch." },
  { icon: Award, title: "Innovation", text: "Continuous R&D for improved efficiency and performance." },
  { icon: CheckCircle, title: "Reliability", text: "Built to perform consistently for 15+ years." },
  { icon: Target, title: "Customer Focus", text: "Solutions tailored to real-world water needs." },
];

const certifications = [
  "ISO 9001:2015 Certified",
  "ISI Marked Products",
  "BIS Standards Compliance",
  "CE Certified Motors",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={aboutFactory} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              About ARJY Pumps
            </h1>
            <p className="text-lg text-primary-foreground/80">
              A legacy of engineering excellence, powering India's water infrastructure since day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-semibold tracking-widest uppercase text-accent mb-3 block">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Engineering Water Solutions for a Better Tomorrow
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ARJY Pumps stands at the forefront of submersible pump manufacturing in India. With state-of-the-art facilities and a team of dedicated engineers, we design and produce pumps that set industry benchmarks for performance and reliability.
                </p>
                <p>
                  Our manufacturing unit is equipped with advanced CNC machinery, precision testing equipment, and automated assembly lines that ensure every pump meets the highest quality standards before reaching our customers.
                </p>
                <p>
                  From borewell submersible pumps to domestic water pressure systems, our comprehensive product range serves agriculture, residential, commercial, and industrial sectors across India.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden card-shadow"
            >
              <img src={aboutFactory} alt="ARJY Manufacturing Facility" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding ocean-gradient-bg">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-8 md:p-10 card-shadow"
            >
              <div className="w-14 h-14 rounded-2xl water-gradient flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted water pump brand, recognized for engineering excellence, energy efficiency, and unwavering commitment to powering the nation's water infrastructure.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-card rounded-2xl p-8 md:p-10 card-shadow"
            >
              <div className="w-14 h-14 rounded-2xl water-gradient flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver high-performance, energy-efficient water pumping solutions through continuous innovation, superior manufacturing processes, and exceptional customer service across every corner of India.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            label="Our Values"
            title="What Drives Us"
            description="Core principles that guide every pump we engineer and every customer we serve."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center bg-card rounded-2xl p-6 card-shadow"
              >
                <div className="w-14 h-14 rounded-2xl water-gradient flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding hero-gradient">
        <div className="container-wide text-center">
          <SectionHeader
            label="Quality Assurance"
            title="Certified Excellence"
            description="Our products meet the highest national and international quality standards."
            light
          />
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl px-6 py-4 text-primary-foreground font-semibold"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
