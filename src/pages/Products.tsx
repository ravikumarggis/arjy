import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/shared/SectionHeader";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import borewellImg from "@/assets/product-borewell.jpg";
import openwellImg from "@/assets/product-openwell.jpg";
import domesticImg from "@/assets/product-domestic.jpg";
import agriculturalImg from "@/assets/product-agricultural.jpg";

const allProducts = [
  {
    id: "borewell-4inch",
    category: "borewell",
    name: "ARJY 4\" Borewell Submersible",
    specs: "1.0 HP – 5.0 HP | SS 304",
    image: borewellImg,
    slug: "borewell",
  },
  {
    id: "borewell-6inch",
    category: "borewell",
    name: "ARJY 6\" Borewell Submersible",
    specs: "5.0 HP – 20.0 HP | SS 304",
    image: borewellImg,
    slug: "borewell",
  },
  {
    id: "openwell-1",
    category: "openwell",
    name: "ARJY Openwell Submersible V3",
    specs: "0.5 HP – 3.0 HP | Horizontal",
    image: openwellImg,
    slug: "openwell",
  },
  {
    id: "openwell-2",
    category: "openwell",
    name: "ARJY Openwell Submersible V5",
    specs: "3.0 HP – 7.5 HP | Vertical",
    image: openwellImg,
    slug: "openwell",
  },
  {
    id: "domestic-1",
    category: "domestic",
    name: "ARJY HomeFlow Mini",
    specs: "0.5 HP | Self-Priming",
    image: domesticImg,
    slug: "domestic",
  },
  {
    id: "domestic-2",
    category: "domestic",
    name: "ARJY HomeFlow Pro",
    specs: "1.0 HP | Pressure Booster",
    image: domesticImg,
    slug: "domestic",
  },
  {
    id: "agri-1",
    category: "agricultural",
    name: "ARJY AgriMax 10HP",
    specs: "10 HP | High Discharge",
    image: agriculturalImg,
    slug: "agricultural",
  },
  {
    id: "agri-2",
    category: "agricultural",
    name: "ARJY AgriMax 20HP",
    specs: "20 HP | Deep Well",
    image: agriculturalImg,
    slug: "agricultural",
  },
];

const tabs = [
  { key: "all", label: "All Products" },
  { key: "borewell", label: "Borewell" },
  { key: "openwell", label: "Openwell" },
  { key: "domestic", label: "Domestic" },
  { key: "agricultural", label: "Agricultural" },
];

const Products = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all" ? allProducts : allProducts.filter((p) => p.category === activeTab);

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 md:py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Products</h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Explore our complete range of submersible and domestic pumps engineered for performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-wide">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.key
                    ? "water-gradient text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  to={`/products/${product.slug}`}
                  className="group block bg-card rounded-2xl overflow-hidden card-shadow hover:elevated-shadow transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-square bg-secondary/30 p-6 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{product.specs}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
