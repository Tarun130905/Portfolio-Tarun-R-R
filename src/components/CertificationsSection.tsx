import { Card } from "@/components/ui/card";
import { Award, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const certifications = [
    { name: "Microsoft Azure", provider: "Microsoft" },
    { name: "Artificial Intelligence", provider: "Infosys Springboard" },
    { name: "Networking Course", provider: "CISCO" },
    { name: "Data Science Tools", provider: "IBM (Cognitive Classes)" },
    { name: "Internet of Things", provider: "NPTEL" },
  ];

  return (
    <section 
      id="certifications" 
      ref={ref}
      className={`py-20 bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          <span className="text-primary">Certifications</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-foreground">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">{cert.provider}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
