import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Laptop, Mouse, Headphones, HardDrive, Monitor, Keyboard, ShoppingCart, Star } from "lucide-react";

const Products = () => {
  const categories = [
    {
      icon: Laptop,
      title: "Laptops",
      description: "Premium laptops for business, gaming, and creative work",
      products: [
        { name: "MacBook Pro 16\"", price: "$2,499", rating: 4.9, features: ["M3 Pro Chip", "32GB RAM", "1TB SSD"] },
        { name: "Dell XPS 15", price: "$1,899", rating: 4.8, features: ["Intel i7", "16GB RAM", "512GB SSD"] },
        { name: "HP Spectre x360", price: "$1,299", rating: 4.7, features: ["Intel i5", "16GB RAM", "512GB SSD"] }
      ]
    },
    {
      icon: Monitor,
      title: "Monitors",
      description: "High-resolution displays for enhanced productivity",
      products: [
        { name: "Dell 4K Monitor 27\"", price: "$599", rating: 4.8, features: ["4K UHD", "IPS Panel", "USB-C"] },
        { name: "LG UltraWide 34\"", price: "$799", rating: 4.9, features: ["3440x1440", "144Hz", "HDR10"] },
        { name: "ASUS Gaming 24\"", price: "$349", rating: 4.6, features: ["1080p", "240Hz", "G-Sync"] }
      ]
    },
    {
      icon: Mouse,
      title: "Accessories",
      description: "Essential peripherals to complete your setup",
      products: [
        { name: "Logitech MX Master 3", price: "$99", rating: 4.8, features: ["Wireless", "7 Buttons", "4000 DPI"] },
        { name: "Apple Magic Keyboard", price: "$179", rating: 4.7, features: ["Wireless", "Backlit", "Touch ID"] },
        { name: "Sony WH-1000XM5", price: "$399", rating: 4.9, features: ["Noise Cancel", "30h Battery", "Wireless"] }
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="bg-tech-gradient bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our carefully curated selection of premium digital equipment 
            from the world's leading technology brands.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category, index) => (
            <div key={index} className="space-y-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-tech-gradient rounded-lg shadow-soft">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, productIndex) => (
                  <Card key={productIndex} className="group hover:shadow-medium transition-all duration-300 border-border bg-card-gradient">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {product.name}
                        </CardTitle>
                        <Badge variant="secondary" className="bg-tech-gradient text-white">
                          New
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">({product.rating})</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="text-2xl font-bold text-primary">{product.price}</div>
                        <Button variant="tech" size="sm" className="group">
                          <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="xl">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;