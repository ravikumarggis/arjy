import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import { motion } from "framer-motion";
import { Download, FileText, Wrench, HelpCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const resources = [
  { icon: Download, title: "Product Catalog", description: "Download our complete product catalog with specifications.", action: "Download PDF" },
  { icon: FileText, title: "Installation Guidelines", description: "Step-by-step installation guide for all pump models.", action: "View Guide" },
  { icon: Wrench, title: "Maintenance Tips", description: "Best practices to keep your pump running efficiently.", action: "Read More" },
];

const faqs = [
  {
    question: "What is the warranty period for ARJY pumps?",
    answer: "ARJY pumps come with a standard 18-month warranty from the date of purchase covering manufacturing defects. Extended warranty options are available through our dealer network.",
  },
  {
    question: "How do I choose the right pump for my borewell?",
    answer: "The selection depends on factors like borewell depth, diameter, water table level, and required flow rate. Contact our technical team or your nearest dealer for a free consultation and pump sizing recommendation.",
  },
  {
    question: "Are ARJY pumps compatible with solar power systems?",
    answer: "Yes, many of our borewell and agricultural pump models are compatible with solar power systems. We offer dedicated solar pump controllers and can recommend the right solar panel configuration for your pump.",
  },
  {
    question: "Where can I find spare parts for my ARJY pump?",
    answer: "Genuine ARJY spare parts are available through our authorized dealer network across India. Contact your nearest dealer or call our customer support helpline for assistance.",
  },
  {
    question: "What maintenance does a submersible pump require?",
    answer: "Regular maintenance includes checking cable connections, inspecting for vibrations, monitoring power consumption, and periodic professional servicing. We recommend annual maintenance checks for optimal performance.",
  },
  {
    question: "Do you provide installation services?",
    answer: "Installation services are available through our authorized dealers and service partners. They are trained to install ARJY pumps correctly and safely, ensuring optimal performance and warranty validity.",
  },
];

const Support = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 md:py-24">
        <div className="container-wide text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Support</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Resources, guides, and answers to help you get the most out of your ARJY pump.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            label="Resources"
            title="Downloads & Guides"
            description="Access our product documentation, installation guides, and maintenance tips."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {resources.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-7 card-shadow text-center hover:elevated-shadow transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl water-gradient flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <Button variant="outline" size="sm">
                  {item.action}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              label="FAQs"
              title="Frequently Asked Questions"
              description="Find quick answers to common questions about ARJY pumps."
            />

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <AccordionItem value={`faq-${index}`} className="bg-card rounded-xl card-shadow border-none px-6">
                    <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
