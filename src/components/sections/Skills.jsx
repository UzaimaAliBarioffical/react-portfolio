import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { skillsData } from "../../data/skills";
import useInView from "../../hooks/useInView";
import {
  Code2,
  FileCode,
  Code,
  Palette,
  Sparkles,
  Terminal,
  Sigma,
  FileSpreadsheet,
  LineChart,
  BarChart2,
  Database,
  BrainCircuit,
} from "lucide-react";

// Icon mapping dictionary
const iconMap = {
  Code2,
  FileCode,
  Code,
  Palette,
  Sparkles,
  Terminal,
  Sigma,
  FileSpreadsheet,
  LineChart,
  BarChart2,
  Database,
  BrainCircuit,
};

export default function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <section id="skills" className="py-24 md:py-32 bg-surface/30 border-y border-border/50 scroll-mt-20">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 md:px-10 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I Work With"
          subtitle="A practical toolkit spanning front-end development, Python data analysis, and machine learning fundamentals."
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skillsData.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName] || Code2;
            return (
              <Card
                key={index}
                className="group flex flex-col items-start justify-between p-5 md:p-6 hover:bg-surface-hover"
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <div className="p-3 rounded-xl bg-black/5 border border-black/15 text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6 shrink-0" />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-muted-2 px-2 py-1 rounded bg-background border border-border">
                    {skill.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-black transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
