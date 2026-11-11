import React from "react";
import { ArrowRight, Code2, Database, BrainCircuit } from "lucide-react";
import Button from "../ui/Button";
import SocialLinks from "../ui/SocialLinks";
import useInView from "../../hooks/useInView";

export default function Hero() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden scroll-mt-24"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] md:w-[650px] h-[300px] sm:h-[450px] md:h-[650px] bg-black/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 md:px-10 w-full transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/15 text-black text-xs md:text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
              </span>
              <span>Available for Freelance Work</span>
            </div>

            {/* Main Title */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
              Hi, I'm <span className="text-foreground">Uzaima Ali Bari</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-black mb-6 flex flex-wrap items-center gap-2">
              <span>AI Engineering Student</span>
              <span className="text-muted-2">•</span>
              <span>React Developer</span>
              <span className="text-muted-2">•</span>
              <span>Python Data Analyst</span>
            </h2>

            {/* Bio Paragraph */}
            <p className="text-muted text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              I build modern, responsive web applications with React and Tailwind CSS, and turn raw data into clear insights using Python. Currently pursuing AI Engineering, I combine development skills with data analysis and machine learning to deliver practical, results-driven solutions for real clients.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button
                as="a"
                href="#projects"
                variant="primary"
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                View My Projects
              </Button>

              <Button
                as="a"
                href="#contact"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Hire Me
              </Button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-wider text-muted-2 font-medium">Connect:</span>
              <SocialLinks />
            </div>
          </div>

          {/* Hero Visual Graphic / Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-black/10 to-black/5 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

              {/* Visual Card */}
              <div className="relative bg-white/90 backdrop-blur-xl border border-border rounded-3xl p-6 sm:p-8 shadow-xl">
                {/* Header Dots */}
                <div className="flex items-center justify-between border-b border-border/80 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-neutral-300 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-neutral-400 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-neutral-500 inline-block"></span>
                  </div>
                  <span className="text-xs font-mono text-muted-2">uzaima.dev</span>
                </div>

                {/* Tech Chips */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-background/80 border border-border/80">
                    <div className="p-2 rounded-lg bg-black/5 text-black">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Frontend Engineering</h4>
                      <p className="text-xs text-muted">React • JavaScript • Tailwind CSS</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-background/80 border border-border/80">
                    <div className="p-2 rounded-lg bg-black/5 text-black">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Data Analytics</h4>
                      <p className="text-xs text-muted">Python • Pandas • Matplotlib • SQL</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-background/80 border border-border/80">
                    <div className="p-2 rounded-lg bg-black/5 text-black">
                      <BrainCircuit className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Applied AI & ML</h4>
                      <p className="text-xs text-muted">Scikit-Learn • Predictive Models</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Badge */}
                <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between text-xs">
                  <span className="text-muted">Focus Area</span>
                  <span className="text-black font-mono font-medium">Data + Full-Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
