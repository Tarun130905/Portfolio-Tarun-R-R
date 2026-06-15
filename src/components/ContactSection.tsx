import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      id="contact" 
      ref={ref}
      className={`py-20 bg-secondary/20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <div className="text-center mb-8">
              <p className="text-lg text-muted-foreground">
                I'm always open to discussing new projects, opportunities, or collaborations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="mailto:ritarun2020@gmail.com"
                className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="text-primary group-hover:text-primary-foreground" size={24} />
                </div>
                <div className="text-left">
                  <p className="font-semibold">Email</p>
                  <p className="text-sm opacity-80">ritarun2020@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+919444525879"
                className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="text-primary group-hover:text-primary-foreground" size={24} />
                </div>
                <div className="text-left">
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm opacity-80">+91 9444525879</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/larunrr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary-foreground/10 flex items-center justify-center">
                  <Linkedin className="text-primary group-hover:text-primary-foreground" size={24} />
                </div>
                <div className="text-left">
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-sm opacity-80">Connect with me</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div className="text-left">
                  <p className="font-semibold">Location</p>
                  <p className="text-sm opacity-80">Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              © 2025 Tarun R R. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
