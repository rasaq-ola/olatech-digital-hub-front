import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Search, Smartphone, Globe, Zap, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const webServices = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Full-stack web applications built with modern technologies",
      features: ["React/Next.js", "Node.js Backend", "Database Design", "API Integration"],
      price: "From $2,500",
      duration: "4-8 weeks"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that convert visitors to customers",
      features: ["Figma Design", "Responsive Layout", "User Research", "Prototyping"],
      price: "From $1,200",
      duration: "2-4 weeks"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your website's visibility and ranking on search engines",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Analytics"],
      price: "From $800",
      duration: "Ongoing"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      features: ["React Native", "iOS & Android", "App Store Deploy", "Push Notifications"],
      price: "From $3,500",
      duration: "6-12 weeks"
    },
    {
      icon: Globe,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration",
      features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Admin Panel"],
      price: "From $3,000",
      duration: "6-10 weeks"
    },
    {
      icon: Zap,
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and performing optimally",
      features: ["Security Updates", "Performance Optimization", "Content Updates", "24/7 Support"],
      price: "From $200/month",
      duration: "Monthly"
    }
  ];

  const supportServices = [
    "Technical Consultation",
    "Equipment Setup & Configuration",
    "Software Installation",
    "Data Migration Services",
    "Training & Support",
    "Warranty & Repair Services"
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="bg-tech-gradient bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional web development services and comprehensive tech support 
            to help your business thrive in the digital world.
          </p>
        </div>

        {/* Web Development Services */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Web Development Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-border bg-card-gradient">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-tech-gradient rounded-lg shadow-soft group-hover:shadow-glow transition-all duration-300">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="text-lg font-bold text-primary">{service.price}</div>
                      <Badge variant="secondary">{service.duration}</Badge>
                    </div>
                    <Button variant="tech" size="sm" className="w-full group">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              Technical Support Services
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Beyond selling premium equipment, we provide comprehensive technical support 
              to ensure you get the most out of your digital investments.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {supportServices.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/50 border border-border">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{service}</span>
                </div>
              ))}
            </div>
            
            <Button variant="hero" size="lg" className="group">
              Contact Support
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <Card className="p-8 bg-card-gradient border-border shadow-medium">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto shadow-glow">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">Free Consultation</h4>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Not sure what you need? Book a free 30-minute consultation to discuss 
                  your requirements and get personalized recommendations.
                </p>
                <Button variant="tech" size="lg" className="w-full">
                  Book Consultation
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;