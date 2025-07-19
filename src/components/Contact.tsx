import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Laptop, 
  Code,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      primary: "hello@olatech.com",
      secondary: "support@olatech.com"
    },
    {
      icon: Phone,
      title: "Phone",
      primary: "+1 (555) 123-4567",
      secondary: "+1 (555) 987-6543"
    },
    {
      icon: MapPin,
      title: "Location",
      primary: "123 Tech Street",
      secondary: "Silicon Valley, CA 94000"
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Mon - Fri: 9AM - 6PM",
      secondary: "Sat: 10AM - 4PM"
    }
  ];

  const services = [
    { icon: Laptop, title: "Equipment Sales", description: "Laptops & Accessories" },
    { icon: Code, title: "Web Development", description: "Custom Websites & Apps" },
    { icon: MessageSquare, title: "Consultation", description: "Technical Support" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get in <span className="bg-tech-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to upgrade your tech or build your dream website? 
            We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card-gradient shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" className="border-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" className="border-border" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john.doe@example.com" className="border-border" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Service Interested In</label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <service.icon className="w-3 h-3 mr-1" />
                        {service.title}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project or what equipment you're looking for..."
                    className="min-h-32 border-border"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full group">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-tech-gradient rounded-lg shadow-soft">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{info.title}</h3>
                      <p className="text-muted-foreground text-sm">{info.primary}</p>
                      <p className="text-muted-foreground text-xs">{info.secondary}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Contact */}
            <Card className="border-border bg-tech-gradient text-white shadow-glow">
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="text-xl font-bold">Need Immediate Help?</h3>
                <p className="text-white/90 text-sm">
                  For urgent technical support or equipment questions, 
                  call us directly or use our live chat.
                </p>
                <div className="flex flex-col space-y-2">
                  <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Live Chat
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-border bg-card-gradient shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <Button 
                      key={index}
                      variant="outline" 
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <social.icon className="w-4 h-4" />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map or Additional CTA */}
        <Card className="border-border bg-card-gradient shadow-medium">
          <CardContent className="p-8 text-center space-y-6">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Visit Our Showroom</h3>
              <p className="text-muted-foreground leading-relaxed">
                Experience our products hands-on at our modern showroom. 
                See the latest laptops, test accessories, and meet our team for personalized recommendations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Get Directions
              </Button>
              <Button variant="tech" size="lg">
                Schedule Visit
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;