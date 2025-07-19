import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Code2, ShoppingBag } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-hero-gradient pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary font-medium">
                <div className="flex items-center space-x-1">
                  <Monitor className="w-5 h-5" />
                  <Code2 className="w-5 h-5" />
                </div>
                <span>Digital Equipment & Web Development</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Premium Tech
                <span className="block bg-tech-gradient bg-clip-text text-transparent">
                  Solutions
                </span>
                for Modern Business
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                OlaTech specializes in providing high-quality laptops, accessories, and professional web development services. Your trusted partner for all digital needs.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Devices Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Websites Built</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Shop Products
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="tech" size="xl">
                <Code2 className="w-5 h-5 mr-2" />
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Premium laptops and tech accessories"
                className="w-full h-auto rounded-2xl shadow-strong"
              />
              <div className="absolute inset-0 bg-tech-gradient/10 rounded-2xl"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-medium backdrop-blur-sm animate-glow">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available 24/7</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-medium backdrop-blur-sm">
              <div className="text-sm">
                <div className="font-semibold text-primary">Free Delivery</div>
                <div className="text-muted-foreground">On orders above $500</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;