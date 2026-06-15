import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      organization: "Xtract.io",
      period: "Jan 2026 - Apr 2026",
      description: "Designed and developed a User Analytics Dashboard using Angular, .NET Core, and PostgreSQL. Contributed to debugging, testing, deployment, and CI/CD workflows using Azure DevOps.",
    },
    {
      title: "Department Sports Head",
      organization: "Easwari Engineering College",
      description: "Organized sports events and demonstrated leadership and team management skills.",
    },
    {
      title: "Member",
      organization: "METANOIA SRM EASWARI TOASTMASTERS Club",
      description: "Developing communication and leadership skills through regular club activities",
    },
    {
      title: "Member",
      organization: "Youth Red Cross - Easwari Engineering College",
      description: "Volunteered in social work events and contributed to community service initiatives and Toastmasters conferences for communication and networking.",
    },
  ];

  return (
    <section 
      id="experience" 
      ref={ref}
      className={`py-20 bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          <span className="text-primary">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                  <p className="text-primary font-semibold mb-1">{exp.organization}</p>
                  {exp.period && <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>}
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
