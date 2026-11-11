import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { educationData } from "../../data/education";
import useInView from "../../hooks/useInView";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function Education() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <section id="education" className="py-24 md:py-32 scroll-mt-20">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-6 md:px-10 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
          subtitle="My formal educational path in engineering, technology, and sciences."
        />

        {/* Vertical Timeline */}
        <div className="relative pl-6 md:pl-8 border-l-2 border-border/80 space-y-8">
          {educationData.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-black group-hover:bg-black group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.15)] flex items-center justify-center">
                {item.isCurrent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                )}
              </div>

              <Card className="p-6 md:p-8 hover:bg-surface-hover">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-black" />
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                      {item.degree}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium ${
                        item.isCurrent
                          ? "bg-black/5 border border-black/20 text-black"
                          : "bg-background border border-border text-muted"
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      {item.year}
                    </span>
                  </div>
                </div>

                <p className="text-sm font-semibold text-black/90 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-muted-2" />
                  {item.institution}
                </p>

                <p className="text-muted text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
