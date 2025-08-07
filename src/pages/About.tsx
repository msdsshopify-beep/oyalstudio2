import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="brand-font text-4xl md:text-6xl font-bold mb-8">ABOUT NOVA</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Born from the streets, designed for the future. NOVA represents the intersection of comfort, style, and authenticity.
            </p>
            <p className="text-lg leading-relaxed">
              Our mission is to create premium streetwear that speaks to the modern generation. Every piece is carefully crafted with attention to detail, using only the finest materials to ensure both comfort and durability.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;