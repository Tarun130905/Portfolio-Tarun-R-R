import { Card } from "@/components/ui/card";
import { Calendar, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      title: "Flight Price Estimator",
      date: "March 2024",
      organization: "GUVI Workshop",
      repo: "https://github.com/Tarun130905/Flight-Price-Prediction",
      description:
        "Developed and executed a comprehensive website for predicting prices and flights available in a fixed schedule for travel.",
    },
    {
      title: "AI-Powered Automated CSV Cleaner",
      date: "November 2025",
      description:
        "Developed an AI-powered automated CSV Cleaning tool that detects and fixes missing values, duplicates, and formatting issues using ML-based imputation techniques. Enables one-click conversion of raw messy CSV files into clean, analysis-ready datasets within seconds.",
    },
    {
      title: "Smart Expense Tracker",
      date: "January 2026",
      repo: "https://github.com/Tarun130905/Expense-Tracker",
      description:
        "Built a Smart Finance Tracker that automatically categorizes expenses and tracks budgets in real time. It turns raw spending data into clear, actionable insights and allows one-click CSV exports for easy analysis and sharing.",
    },
    {
      title: "Personalized Workout & Diet Recommender",
      date: "Present",
      description:
        "Built an AI-based workout and diet recommender for swimmers using collaborative filtering and rule-based logic to generate personalized training and nutrition plans.",
    }
  ];

  return (
    <section 
      id="projects" 
      ref={ref}
      className={`py-20 bg-secondary/20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all hover:scale-105"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Open ${project.title} repository`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                {project.organization && (
                  <p className="text-primary font-semibold">{project.organization}</p>
                )}
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar size={16} />
                  <span>{project.date}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
