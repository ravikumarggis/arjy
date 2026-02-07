import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import agricultureImg from "@/assets/app-agriculture.jpg";
import residentialImg from "@/assets/app-residential.jpg";
import industrialImg from "@/assets/app-industrial.jpg";
import commercialImg from "@/assets/app-commercial.jpg";
import infrastructureImg from "@/assets/app-infrastructure.jpg";

const applications = [
  {
    title: "Agriculture",
    description: "ARJY pumps power irrigation systems across farms of all sizes. From drip irrigation to sprinkler systems, our pumps deliver consistent water flow for optimal crop growth and water conservation.",
    image: agricultureImg,
    products: ["Borewell Submersible", "Agricultural Pumps"],
  },
  {
    title: "Residential",
    description: "Ensure reliable water pressure for homes and apartment complexes. Our domestic pumps are designed for quiet, efficient operation — perfect for overhead tank filling, pressure boosting, and daily water needs.",
    image: residentialImg,
    products: ["Domestic Pumps", "Openwell Submersible"],
  },
  {
    title: "Industrial",
    description: "Heavy-duty water solutions for factories, plants, and manufacturing facilities. ARJY industrial pumps handle high volumes with continuous operation capabilities and robust construction.",
    image: industrialImg,
    products: ["Borewell Submersible", "Agricultural Pumps"],
  },
  {
    title: "Commercial",
    description: "Water supply solutions for hotels, hospitals, shopping complexes, and commercial buildings. Reliable performance for critical water infrastructure needs.",
    image: commercialImg,
    products: ["Borewell Submersible", "Domestic Pumps"],
  },
  {
    title: "Water Supply & Infrastructure",
    description: "Municipal and community water supply systems powered by ARJY. Our pumps support large-scale water distribution, treatment plants, and public utility projects.",
    image: infrastructureImg,
    products: ["Borewell Submersible", "Agricultural Pumps"],
  },
];

const Applications = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 md:py-24">
        <div className="container-wide text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Applications</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              See how ARJY pumps deliver reliable water solutions across diverse industries and real-world use cases.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding">
        <div className="container-wide space-y-16">
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              style={{ direction: index % 2 === 1 ? "rtl" : "ltr" }}
            >
              <div className="rounded-2xl overflow-hidden card-shadow" style={{ direction: "ltr" }}>
                <img src={app.image} alt={app.title} className="w-full h-64 md:h-80 object-cover" />
              </div>
              <div style={{ direction: "ltr" }}>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{app.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">{app.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {app.products.map((product) => (
                    <span key={product} className="px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                      {product}
                    </span>
                  ))}
                </div>
                <Link to="/products">
                  <Button variant="default">View Products</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Applications;
