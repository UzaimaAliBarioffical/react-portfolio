import React from "react";
import { ArrowUp } from "lucide-react";
import SocialLinks from "../ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-12 md:py-16 text-muted">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10 pb-10 border-b border-border">
          {/* Brand Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="font-heading text-2xl font-bold tracking-tight text-foreground hover:text-black transition-colors inline-block mb-2"
            >
              Uzaima Ali Bari<span className="text-black">.</span>
            </a>
            <p className="text-sm text-muted max-w-md">
              AI Engineering Student • React Developer • Python Data Analyst
            </p>
          </div>

          {/* Social Icons */}
          <SocialLinks />
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs md:text-sm text-muted-2">
          <p>© 2026 Uzaima Ali Bari. All rights reserved.</p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-muted hover:text-black transition-colors group"
          >
            <span>Back to top</span>
            <span className="p-1.5 rounded-lg bg-background border border-border group-hover:border-black/40 group-hover:scale-110 transition-all">
              <ArrowUp className="w-4 h-4 text-black" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
