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
      title: "SwimProf – Athlete Performance & Health Tracking Platform",
      date: "Present",
      description:
        "Creating a platform for my swim team to record competition results, track daily practice sessions, and monitor health details like heart rate and calories burned. The system allows swimmers to compare their progress with teammates, while coaches get an overview of training, performance trends, and athlete well-being.",
    },
    {
      title: "Personalized Workout & Diet Recommender",
      date: "Present",
      description:
        "Developing an AI-driven personalized workout and diet recommender for swimmers, combining collaborative filtering with rule-based AI to suggest tailored training plans and nutrition strategies based on athlete profiles and performance goals.",
    },
    {
      title: "AI-Powered Automated CSV Cleaner",
      date: "Present",
      description:
        "Developing an automated agent that detects and corrects missing values and outliers in datasets using machine learning and rule-based methods. It cleans messy CSV files and provides clear reports to improve data quality for AI workflows.",
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
