import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TrackOrder = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container-max section-padding">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-12">
              <h1 className="brand-font text-4xl md:text-6xl font-bold mb-4">TRACK ORDER</h1>
              <p className="text-lg text-muted-foreground">Enter your order details below</p>
            </div>

            <form className="space-y-6">
              <Input placeholder="Order Number" />
              <Input placeholder="Email Address" type="email" />
              <Button type="submit" className="w-full" size="lg">
                Track My Order
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackOrder;