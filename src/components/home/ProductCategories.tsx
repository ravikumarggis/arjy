import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import borewellImg from "@/assets/product-borewell.jpg";
import openwellImg from "@/assets/product-openwell.jpg";
import domesticImg from "@/assets/product-domestic.jpg";
import agriculturalImg from "@/assets/product-agricultural.jpg";

const categories = [
  {
    title: "Borewell Submersible",
    description: "High-performance pumps for deep borewell applications",
    image: borewellImg,
    path: "/products/borewell",
  },
  {
    title: "Openwell Submersible",
    description: "Reliable pumps for open wells and water tanks",
    image: openwellImg,
    path: "/products/openwell",
  },
  {
    title: "Domestic Pumps",
    description: "Compact pumps for home water pressure boosting",
    image: domesticImg,
    path: "/products/domestic",
  },
  {
    title: "Agricultural Pumps",
    description: "Heavy-duty pumps for large-scale irrigation",
    image: agriculturalImg,
    path: "/products/agricultural",
  },
];

const ProductCategories = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeader
          label="Our Products"
          title="Pumps for Every Application"
          description="Discover our comprehensive range of submersible and domestic pumps designed for maximum efficiency and longevity."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={cat.path}
                className="group block bg-card rounded-2xl overflow-hidden card-shadow hover:elevated-shadow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden bg-secondary/50 p-6 flex items-center justify-center">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{cat.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                    View Range <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
