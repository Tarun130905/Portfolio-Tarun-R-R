import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-8">
            <img 
              src={profilePhoto} 
              alt="Tarun R R - Computer Science Student and Developer" 
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Hi, I'm <span className="text-primary">TARUN R R</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Computer Science Engineering Student | Full-Stack Developer | AI/ML Enthusiast
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about leveraging technology to solve real-world challenges through full-stack development, 
            AI/ML and Data analytics. National-level swimmer bringing resilience, discipline, and teamwork to 
            technology innovation.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/tarun-r-r-63817a320/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:rrtarun2020@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
