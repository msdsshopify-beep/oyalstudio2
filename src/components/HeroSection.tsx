import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto section-padding">
        <h1 className="brand-font text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          LATEST DROP
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Discover our newest collection of premium streetwear designed for the modern lifestyle
        </p>
        <Button variant="hero" size="lg" className="text-lg px-12 py-6">
          Shop the Drop
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;