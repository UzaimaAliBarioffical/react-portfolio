import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import useInView from "../../hooks/useInView";
import { CheckCircle2, User, GraduationCap, Briefcase, Target } from "lucide-react";

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  const highlightChips = [
    "AI Engineering Student",
    "React & Python",
    "Data-Driven Approach",
    "Open to Freelance Work",
  ];

  const quickFacts = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "AI Engineering Student",
    },
    {
      icon: Briefcase,
      label: "Availability",
      value: "Freelance & Projects",
    },
    {
      icon: Target,
      label: "Specialization",
      value: "Web Dev + Data Analysis",
    },
    {
      icon: User,
      label: "Location",
      value: "Remote / Worldwide",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 scroll-mt-20 relative">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 md:px-10 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionHeading
          eyebrow="About Me"
          title="Turning Ideas Into Data-Driven Digital Products"
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-muted text-base md:text-lg leading-relaxed">
              I'm Uzaima Ali Bari, an AI Engineering student with a strong interest in web development, data analysis, and applied machine learning. I enjoy the process of building things end-to-end — designing clean user interfaces with React and Tailwind CSS, then working with Python to explore, clean, and visualize data that tells a meaningful story.
            </p>

            <p className="text-muted text-base md:text-lg leading-relaxed">
              My goal is to bridge the gap between good software and good decisions — building websites that look professional and perform well, and running data analysis that helps businesses and individuals understand their numbers. I'm currently expanding into machine learning and REST API integration to offer complete, modern solutions to freelance clients.
            </p>

            {/* Highlight Chips */}
            <div className="pt-4 flex flex-wrap gap-3">
              {highlightChips.map((chip, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/5 border border-black/15 text-foreground text-sm font-medium hover:border-black/30 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  <span>{chip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Facts Card Column */}
          <div className="lg:col-span-5">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full blur-2xl pointer-events-none" />

              <h3 className="font-heading text-xl font-bold text-foreground mb-6 pb-4 border-b border-border flex items-center justify-between">
                <span>Quick Overview</span>
                <span className="text-xs font-mono text-black font-normal">01 / Profile</span>
              </h3>

              <div className="space-y-4">
                {quickFacts.map((fact, i) => {
                  const FactIcon = fact.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-3 rounded-xl bg-background/80 border border-border/80 hover:border-black/30 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-black/5 text-black shrink-0 mt-0.5">
                        <FactIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs text-muted-2 uppercase tracking-wider block font-medium">
                          {fact.label}
                        </span>
                        <span className="text-sm font-semibold text-foreground">
                          {fact.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
