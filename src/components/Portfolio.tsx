import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Globe, Smartphone, ShoppingCart, Building } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Modern online store with advanced filtering, cart management, and secure payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "E-commerce",
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      features: ["Shopping Cart", "Payment Integration", "Admin Dashboard", "Mobile Responsive"]
    },
    {
      title: "Corporate Website",
      description: "Professional corporate website with CMS integration and SEO optimization.",
      technologies: ["Next.js", "Tailwind CSS", "Headless CMS", "Analytics"],
      category: "Corporate",
      icon: Building,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      features: ["CMS Integration", "SEO Optimized", "Multi-language", "Contact Forms"]
    },
    {
      title: "Restaurant App",
      description: "Mobile-first restaurant application with online ordering and table reservations.",
      technologies: ["React Native", "Firebase", "Stripe", "Google Maps"],
      category: "Mobile App",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop",
      features: ["Online Ordering", "Table Booking", "Push Notifications", "GPS Integration"]
    },
    {
      title: "Portfolio Website",
      description: "Creative portfolio website for a design agency with stunning animations and interactions.",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
      category: "Portfolio",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      features: ["Smooth Animations", "Project Showcase", "Contact Integration", "Fast Loading"]
    },
    {
      title: "SaaS Dashboard",
      description: "Comprehensive dashboard for business analytics with real-time data visualization.",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      category: "SaaS",
      icon: Building,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      features: ["Real-time Analytics", "Data Visualization", "User Management", "API Integration"]
    },
    {
      title: "Educational Platform",
      description: "Online learning platform with video streaming, quizzes, and progress tracking.",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      category: "Education",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      features: ["Video Streaming", "Quiz System", "Progress Tracking", "Certificates"]
    }
  ];

  const categories = ["All", "E-commerce", "Corporate", "Mobile App", "Portfolio", "SaaS", "Education"];

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="bg-tech-gradient bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our recent web development projects showcasing modern design, 
            cutting-edge technology, and exceptional user experiences.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "hero" : "tech"}
              size="sm"
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-medium transition-all duration-300 border-border bg-card-gradient">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-tech-gradient/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-tech-gradient rounded-lg shadow-soft">
                    <project.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your vision and create something amazing together. 
            From concept to deployment, we'll guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Start Your Project
            </Button>
            <Button variant="tech" size="lg">
              View More Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;