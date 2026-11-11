import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import { servicesData } from "../../data/services";
import useInView from "../../hooks/useInView";
import { Code2, Store, LineChart, BarChart3, ArrowUpRight } from "lucide-react";

const iconMap = {
  Code2,
  Store,
  LineChart,
  BarChart3,
};

export default function Services() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <section id="services" className="py-24 md:py-32 scroll-mt-20">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 md:px-10 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionHeading
          eyebrow="Services"
          title="What I Can Do For You"
          subtitle="Freelance services combining modern web development with practical data analysis."
        />

        {/* 2x2 Grid on Desktop, 1 Col on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || Code2;
            return (
              <Card
                key={service.id}
                className="group relative flex flex-col justify-between h-full p-8 hover:bg-surface-hover"
              >
                <div>
                  {/* Top Bar with Icon and Action Arrow */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-black/5 border border-black/15 text-black group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-7 h-7 shrink-0" />
                    </div>

                    <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted group-hover:text-black group-hover:border-black/40 group-hover:bg-black/5 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-black transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Micro-interaction label */}
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-2 text-xs font-medium text-muted-2 group-hover:text-black transition-colors">
                  <span>Available for custom projects</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
