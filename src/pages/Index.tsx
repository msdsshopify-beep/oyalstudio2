import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import PromoSection from "@/components/PromoSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductGrid />
      <ReviewsSection />
      <PromoSection />
      <Footer />
    </div>
  );
};

export default Index;
