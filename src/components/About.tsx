import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Code, Award, Users, Zap, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Laptop,
      title: "Premium Equipment",
      description: "Carefully curated selection of high-quality laptops and accessories from top brands."
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Professional website development services using modern technologies and best practices."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "All products come with warranty and our commitment to excellence in every project."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Dedicated support team ensuring your satisfaction with every purchase and project."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times for both product deliveries and development projects."
    },
    {
      icon: Shield,
      title: "Trusted Service",
      description: "Years of experience building trust with customers across digital solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="bg-tech-gradient bg-clip-text text-transparent">OlaTech</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            OlaTech combines expertise in digital equipment sales with professional web development services. 
            We're your one-stop solution for premium laptops, accessories, and custom websites that drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-border bg-card-gradient">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-tech-gradient rounded-lg shadow-soft group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Why Choose OlaTech?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-tech-gradient rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Dual Expertise</h4>
                  <p className="text-muted-foreground">Unique combination of hardware sales and software development skills.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-tech-gradient rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Competitive Pricing</h4>
                  <p className="text-muted-foreground">Best prices in the market without compromising on quality.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-tech-gradient rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ongoing Support</h4>
                  <p className="text-muted-foreground">Comprehensive after-sales support and maintenance services.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 bg-card-gradient border-border shadow-medium">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-tech-gradient rounded-full flex items-center justify-center mx-auto shadow-glow">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Our Mission</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower businesses and individuals with premium digital equipment and cutting-edge web solutions 
                    that enhance productivity and drive success in the digital age.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;