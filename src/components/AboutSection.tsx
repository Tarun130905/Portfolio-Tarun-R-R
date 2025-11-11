import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-20 bg-secondary/20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          <span className="text-primary">Education</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="text-primary" size={24} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Bachelor of Computer Science & Engineering
                </h3>
                <p className="text-primary font-semibold mb-2">Easwari Engineering College</p>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar size={16} />
                  <span>Sept 2023 - Present</span>
                  <span className="ml-4">CGPA: 8.4</span>
                </div>
                <p className="text-muted-foreground">Tamilnadu, India</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="text-primary" size={24} />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Engineering Graphics with Mathematics
                </h3>
                <p className="text-primary font-semibold mb-2">DAV Boys Senior Secondary School</p>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar size={16} />
                  <span>March 2023</span>
                </div>
                <p className="text-muted-foreground">Tamilnadu, India</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
