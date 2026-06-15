import { Card } from "@/components/ui/card";
import { Code, Layers, Wrench, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "C++", "HTML/CSS", "SQL", "PostgreSQL"],
    },
    {
      title: "Frameworks",
      icon: Layers,
      skills: ["Angular", "Pandas", "Numpy", "Matplotlib", "Scikit", "Flask", "React", "ASP.NET"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Jupyter Notebook", "Visual Studio Code", "Google Colab", "Power BI", "Gen AI"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Leadership", "Teamwork", "Time Management", "Organisational Skills"],
    },
  ];

  return (
    <section 
      id="skills" 
      ref={ref}
      className={`py-20 bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Skills & <span className="text-primary">Expertise</span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
