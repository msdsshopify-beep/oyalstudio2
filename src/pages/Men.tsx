import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Men = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="brand-font text-4xl md:text-6xl font-bold mb-4">MEN'S COLLECTION</h1>
            <p className="text-lg text-muted-foreground">Premium streetwear for men</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Men;