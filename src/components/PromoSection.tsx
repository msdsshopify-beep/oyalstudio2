import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Truck, Shield, Headphones, CreditCard } from "lucide-react";

const PromoSection = () => {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container-max section-padding">
        {/* Promo Banner */}
        <div className="text-center mb-16">
          <h2 className="brand-font text-4xl md:text-6xl font-bold mb-4">
            FLAT 20% OFF
          </h2>
          <p className="text-xl mb-6">On your first order • Use code: NOVA20</p>
          <Button variant="accent" size="lg">
            Shop Now
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-md mx-auto mb-16">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Stay Updated
          </h3>
          <div className="flex gap-2">
            <Input 
              placeholder="Enter your email"
              className="bg-primary-foreground text-primary border-0"
            />
            <Button variant="accent">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Truck className="h-8 w-8 mx-auto mb-2" />
            <h4 className="font-semibold mb-1">Free Shipping</h4>
            <p className="text-sm opacity-80">On orders over $75</p>
          </div>
          <div className="text-center">
            <Shield className="h-8 w-8 mx-auto mb-2" />
            <h4 className="font-semibold mb-1">Secure Payment</h4>
            <p className="text-sm opacity-80">SSL protected checkout</p>
          </div>
          <div className="text-center">
            <Headphones className="h-8 w-8 mx-auto mb-2" />
            <h4 className="font-semibold mb-1">24/7 Support</h4>
            <p className="text-sm opacity-80">Expert customer service</p>
          </div>
          <div className="text-center">
            <CreditCard className="h-8 w-8 mx-auto mb-2" />
            <h4 className="font-semibold mb-1">Easy Returns</h4>
            <p className="text-sm opacity-80">30-day return policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;