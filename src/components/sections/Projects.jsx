import React from "react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { projectsData } from "../../data/projects";
import useInView from "../../hooks/useInView";
import { Github, ExternalLink, FolderCode } from "lucide-react";

export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 md:py-32 bg-surface/30 border-y border-border/50 scroll-mt-20">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 md:px-10 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          subtitle="A mix of web development and data analysis projects. More added regularly."
        />

        {/* Projects Grid: 1 col mobile -> 2 cols desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between h-full group p-0 hover:bg-surface-hover overflow-hidden"
            >
              {/* Project Thumbnail */}
              {project.image && (
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
                </div>
              )}

              <div className={project.image ? "p-6 sm:p-8 flex flex-col flex-1" : "p-6 sm:p-8"}>
                {/* Header Icon + Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-black/5 border border-black/15 text-black group-hover:scale-105 transition-transform">
                    <FolderCode className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-muted-2">
                    0{project.id} / Project
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-black transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-background border border-border text-foreground/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 mt-auto border-t border-border/60 flex items-center gap-3">
                <Button
                  as="a"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  icon={Github}
                  className="flex-1 text-xs md:text-sm py-2.5"
                >
                  GitHub
                </Button>

                <Button
                  as="a"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  icon={ExternalLink}
                  iconPosition="right"
                  className="flex-1 text-xs md:text-sm py-2.5"
                >
                  Live Demo
                </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
