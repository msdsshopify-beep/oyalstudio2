import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max section-padding">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="brand-font text-2xl font-bold">NOVA</h3>
            <p className="text-sm opacity-80">
              Premium streetwear for the modern lifestyle. Quality, comfort, and style in every piece.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 hover:text-brand-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-brand-accent cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 hover:text-brand-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold">Shop</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/shop" className="hover:text-brand-accent transition-colors">All Products</Link></li>
              <li><Link to="/men" className="hover:text-brand-accent transition-colors">Men</Link></li>
              <li><Link to="/women" className="hover:text-brand-accent transition-colors">Women</Link></li>
              <li><Link to="/new" className="hover:text-brand-accent transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/track" className="hover:text-brand-accent transition-colors">Track Your Order</Link></li>
              <li><Link to="/size-guide" className="hover:text-brand-accent transition-colors">Size Guide</Link></li>
              <li><Link to="/returns" className="hover:text-brand-accent transition-colors">Returns & Exchanges</Link></li>
            </ul>
          </div>

          {/* Payment Icons */}
          <div className="space-y-4">
            <h4 className="font-semibold">Secure Payment</h4>
            <div className="flex flex-wrap gap-2">
              <div className="bg-primary-foreground text-primary px-2 py-1 rounded text-xs font-semibold">VISA</div>
              <div className="bg-primary-foreground text-primary px-2 py-1 rounded text-xs font-semibold">MC</div>
              <div className="bg-primary-foreground text-primary px-2 py-1 rounded text-xs font-semibold">AMEX</div>
              <div className="bg-primary-foreground text-primary px-2 py-1 rounded text-xs font-semibold">PAYPAL</div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
            <p>&copy; 2024 NOVA. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-brand-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;