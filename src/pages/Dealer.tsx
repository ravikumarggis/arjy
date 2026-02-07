import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { CheckCircle, Users, TrendingUp, Headphones, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  { icon: TrendingUp, title: "High Margins", text: "Competitive dealer pricing with attractive profit margins." },
  { icon: Users, title: "Marketing Support", text: "Co-branded marketing materials and local event support." },
  { icon: Headphones, title: "Technical Training", text: "Regular training programs for your sales and service team." },
  { icon: Award, title: "Territory Protection", text: "Exclusive territory rights for authorized dealers." },
];

const Dealer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted!",
      description: "Thank you for your interest. Our team will contact you shortly.",
    });
    setFormData({ name: "", company: "", phone: "", email: "", city: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 md:py-24">
        <div className="container-wide text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Become an ARJY Dealer</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Partner with a trusted brand and grow your business with ARJY's premium water pump range.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeader
            label="Why Partner With Us"
            title="Dealer Benefits"
            description="Join India's fastest growing pump brand and enjoy exclusive business advantages."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((item, index) => (
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

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card rounded-2xl p-8 md:p-10 card-shadow">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">Dealer Enquiry Form</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 rounded-xl"
                  />
                  <Input
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="h-12 rounded-xl"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Phone Number *"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12 rounded-xl"
                  />
                  <Input
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 rounded-xl"
                  />
                </div>
                <Input
                  placeholder="City / District *"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                  className="h-12 rounded-xl"
                />
                <Textarea
                  placeholder="Additional Message (optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-xl min-h-[100px]"
                />
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Submit Enquiry
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Dealer;
