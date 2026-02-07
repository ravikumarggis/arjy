import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import agricultureImg from "@/assets/app-agriculture.jpg";
import residentialImg from "@/assets/app-residential.jpg";
import industrialImg from "@/assets/app-industrial.jpg";

const applications = [
  { title: "Agriculture", description: "Irrigation & farming water supply", image: agricultureImg, path: "/applications" },
  { title: "Residential", description: "Home water pressure & supply", image: residentialImg, path: "/applications" },
  { title: "Industrial", description: "Factory & plant water systems", image: industrialImg, path: "/applications" },
];

const ApplicationsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeader
          label="Applications"
          title="Trusted Across Industries"
          description="From farms to factories, ARJY pumps deliver reliable water flow wherever it's needed."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link
                to={app.path}
                className="group block relative h-72 md:h-80 rounded-2xl overflow-hidden card-shadow"
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-1">{app.title}</h3>
                  <p className="text-primary-foreground/70 text-sm">{app.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
