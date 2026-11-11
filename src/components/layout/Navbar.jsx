import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="font-heading text-2xl font-bold tracking-tight text-foreground hover:text-black transition-colors flex items-center gap-1"
        >
          <span>Uzaima</span>
          <span className="text-black">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-muted hover:text-foreground font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Call To Action */}
        <div className="hidden md:block">
          <Button as="a" href="#contact" variant="primary" icon={ArrowUpRight} iconPosition="right">
            Hire Me
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-black rounded-lg bg-surface border border-border transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-border px-6 py-6 transition-all duration-300 animate-fadeIn">
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-base text-muted hover:text-black font-medium py-2 border-b border-border/40 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <Button
            as="a"
            href="#contact"
            variant="primary"
            className="w-full"
            onClick={closeMenu}
            icon={ArrowUpRight}
            iconPosition="right"
          >
            Hire Me
          </Button>
        </div>
      )}
    </header>
  );
}
