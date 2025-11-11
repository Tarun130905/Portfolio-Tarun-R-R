import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import vitCompetition from "@/assets/vit-competition.jpg";
import annaUniversity from "@/assets/anna-university.jpg";
import cmTrophy from "@/assets/cm-trophy.jpg";
import poolTrophy from "@/assets/pool-trophy.jpg";

export const AchievementsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  
  const medalCount = useCounterAnimation(500, 2000, isVisible);
  const championshipsCount = useCounterAnimation(5, 1500, isVisible);
  
  const images = [
    { src: vitCompetition, alt: "VIT Inter Collegiate Sports Fest VIBSPORTS 2025" },
    { src: annaUniversity, alt: "Anna University Swimming Competition" },
    { src: cmTrophy, alt: "CM Trophy Gold Medals" },
    { src: poolTrophy, alt: "Swimming Pool Championship Trophy" }
  ];
  
  return (
    <section 
      id="achievements" 
      ref={ref}
      className={`py-20 bg-secondary/20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Swimming <span className="text-primary">Achievements</span>
        </h2>

        <div className="max-w-6xl mx-auto space-y-6">
          <Card className="p-8 bg-card border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Trophy className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  National Level Swimmer
                </h3>
                <p className="text-muted-foreground mb-3">
                  Participated in many nationals, state and district competitions
                </p>
                <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg inline-flex">
                  <Medal className="text-primary" size={32} />
                  <div>
                    <p className="text-3xl font-bold text-foreground">{medalCount}+</p>
                    <p className="text-sm text-muted-foreground">Total Medals Won</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Award className="text-primary flex-shrink-0 mt-1" size={20} />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">{championshipsCount} Team Championships:</strong> Won {championshipsCount} overall Team championships
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="text-primary flex-shrink-0 mt-1" size={20} />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">CBSE Nationals:</strong> Represented my school in CBSE NATIONALS 
                  and won Silver and Bronze medals with new best times
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="text-primary flex-shrink-0 mt-1" size={20} />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">All India University Meet:</strong> Represented Anna University 
                  in All India National University Meet
                </p>
              </div>
            </div>
          </Card>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-center mb-4 text-foreground">
              Competition Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="overflow-hidden rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer group relative aspect-[3/4]"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium px-2">
                      Click to view
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-transparent">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-background/80 hover:bg-background text-foreground z-50"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              {selectedImage && (
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.alt}
                    className="max-w-full max-h-[95vh] w-auto h-auto object-contain rounded-lg"
                  />
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};
