import React, { lazy, Suspense } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Footer from "./components/layout/Footer";

// Lazy-load below-the-fold sections for instant initial paint
const About = lazy(() => import("./components/sections/About"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Services = lazy(() => import("./components/sections/Services"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Education = lazy(() => import("./components/sections/Education"));
const Contact = lazy(() => import("./components/sections/Contact"));

function SectionSkeleton() {
  return (
    <div className="py-20 max-w-6xl mx-auto px-6 md:px-10 min-h-[350px] flex items-center justify-center">
      <div className="w-full space-y-4 animate-pulse">
        <div className="h-4 bg-surface border border-border/40 rounded-full w-28 mx-auto" />
        <div className="h-8 bg-surface border border-border/40 rounded-xl w-64 mx-auto" />
        <div className="h-24 bg-surface border border-border/40 rounded-2xl w-full" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-background text-foreground font-sans antialiased selection:bg-accent selection:text-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <About />
          <Skills />
          <Services />
          <Projects />
          <Education />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
