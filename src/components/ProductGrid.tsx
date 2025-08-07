import { Button } from "@/components/ui/button";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    id: 1,
    name: "Essential Collection Set",
    price: 129,
    image: product1,
    category: "Bundle"
  },
  {
    id: 2,
    name: "Oversized Hoodie",
    price: 89,
    image: product2,
    category: "Hoodies"
  },
  {
    id: 3,
    name: "Minimal Tee",
    price: 39,
    image: product3,
    category: "T-Shirts"
  },
  {
    id: 4,
    name: "Comfort Joggers",
    price: 69,
    image: product4,
    category: "Bottoms"
  }
];

const ProductGrid = () => {
  return (
    <section className="py-16">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="brand-font text-4xl md:text-5xl font-bold mb-4">
            FEATURED PRODUCTS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Curated pieces that define modern streetwear culture
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg product-shadow group-hover:hover-shadow transition-all duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>
              
              <div className="pt-4 space-y-2">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  {product.category}
                </p>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="font-bold text-xl">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="minimal" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;