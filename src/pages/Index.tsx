import Layout from "@/components/layout/Layout";
import HeroCarousel from "@/components/home/HeroCarousel";
import AboutSnapshot from "@/components/home/AboutSnapshot";
import ProductCategories from "@/components/home/ProductCategories";
import WhyChoose from "@/components/home/WhyChoose";
import ApplicationsSection from "@/components/home/ApplicationsSection";
import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  return (
    <Layout>
      <HeroCarousel />
      <AboutSnapshot />
      <ProductCategories />
      <WhyChoose />
      <ApplicationsSection />
      <CTABanner />
    </Layout>
  );
};

export default Index;
