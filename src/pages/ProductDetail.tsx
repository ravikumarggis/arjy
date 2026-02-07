import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Download, CheckCircle } from "lucide-react";
import borewellImg from "@/assets/product-borewell.jpg";
import openwellImg from "@/assets/product-openwell.jpg";
import domesticImg from "@/assets/product-domestic.jpg";
import agriculturalImg from "@/assets/product-agricultural.jpg";

const productData: Record<string, {
  title: string;
  tagline: string;
  image: string;
  features: string[];
  specs: { label: string; value: string }[];
  applications: string[];
}> = {
  borewell: {
    title: "Borewell Submersible Pumps",
    tagline: "High-performance pumps for deep borewell water extraction",
    image: borewellImg,
    features: [
      "SS 304 construction for corrosion resistance",
      "Energy-efficient motor design",
      "Available in 4\", 6\", and 8\" sizes",
      "Sand guard protection system",
      "High head and discharge capacity",
      "Suitable for depths up to 1000 feet",
    ],
    specs: [
      { label: "Power Range", value: "1.0 HP – 30.0 HP" },
      { label: "Material", value: "Stainless Steel 304" },
      { label: "Bore Size", value: "4\", 6\", 8\"" },
      { label: "Max Head", value: "Up to 350 meters" },
      { label: "Voltage", value: "220V / 415V" },
      { label: "Certification", value: "ISI Marked, ISO 9001" },
    ],
    applications: ["Agriculture Irrigation", "Residential Water Supply", "Industrial Use", "Municipal Water Supply"],
  },
  openwell: {
    title: "Openwell Submersible Pumps",
    tagline: "Reliable water pumping solutions for open wells and tanks",
    image: openwellImg,
    features: [
      "Horizontal and vertical mounting options",
      "Oil-filled motor for cooling",
      "Built-in thermal overload protection",
      "Low noise operation",
      "Easy installation and maintenance",
      "Suitable for open wells up to 50 feet",
    ],
    specs: [
      { label: "Power Range", value: "0.5 HP – 7.5 HP" },
      { label: "Material", value: "Cast Iron + SS" },
      { label: "Type", value: "Horizontal / Vertical" },
      { label: "Max Head", value: "Up to 60 meters" },
      { label: "Voltage", value: "220V Single Phase" },
      { label: "Certification", value: "ISI Marked" },
    ],
    applications: ["Open Wells", "Water Tanks", "Swimming Pools", "Garden Irrigation"],
  },
  domestic: {
    title: "Domestic Pumps",
    tagline: "Compact and efficient pumps for home water pressure needs",
    image: domesticImg,
    features: [
      "Self-priming capability",
      "Low power consumption",
      "Compact and lightweight design",
      "Automatic pressure control option",
      "Silent operation",
      "Dry run protection",
    ],
    specs: [
      { label: "Power Range", value: "0.5 HP – 2.0 HP" },
      { label: "Material", value: "SS + Engineering Plastic" },
      { label: "Type", value: "Self-Priming / Booster" },
      { label: "Max Head", value: "Up to 45 meters" },
      { label: "Voltage", value: "220V Single Phase" },
      { label: "Certification", value: "ISI Marked" },
    ],
    applications: ["Home Water Supply", "Pressure Boosting", "Overhead Tank Filling", "Garden Watering"],
  },
  agricultural: {
    title: "Agricultural Pumps",
    tagline: "Heavy-duty pumps designed for large-scale farming and irrigation",
    image: agriculturalImg,
    features: [
      "High discharge capacity",
      "Designed for continuous operation",
      "Robust construction for tough conditions",
      "Energy-efficient operation",
      "Compatible with solar power systems",
      "Wide range of power options",
    ],
    specs: [
      { label: "Power Range", value: "5.0 HP – 30.0 HP" },
      { label: "Material", value: "Cast Iron + SS 304" },
      { label: "Type", value: "Submersible / Monoblock" },
      { label: "Max Head", value: "Up to 300 meters" },
      { label: "Voltage", value: "415V Three Phase" },
      { label: "Certification", value: "ISI Marked, BIS" },
    ],
    applications: ["Drip Irrigation", "Sprinkler Systems", "Flood Irrigation", "Water Transfer"],
  },
};

const ProductDetail = () => {
  const { category } = useParams<{ category: string }>();
  const product = productData[category || "borewell"] || productData.borewell;

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="container-wide">
          <Link to="/products" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">{product.title}</h1>
          <p className="text-lg text-primary-foreground/80 mt-2">{product.tagline}</p>
        </div>
      </section>

      {/* Product Details */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-secondary/30 rounded-2xl p-10 flex items-center justify-center"
            >
              <img src={product.image} alt={product.title} className="max-w-full max-h-[400px] object-contain" />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Key Features</h2>
              <div className="space-y-3 mb-8">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Enquire Now
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download Catalog
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Specs Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Technical Specifications</h2>
            <div className="bg-card rounded-2xl overflow-hidden card-shadow">
              <table className="w-full">
                <tbody>
                  {product.specs.map((spec, index) => (
                    <tr key={spec.label} className={index % 2 === 0 ? "bg-secondary/30" : ""}>
                      <td className="px-6 py-4 font-semibold text-foreground">{spec.label}</td>
                      <td className="px-6 py-4 text-muted-foreground">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Applications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Applications</h2>
            <div className="flex flex-wrap gap-3">
              {product.applications.map((app) => (
                <span key={app} className="px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                  {app}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
