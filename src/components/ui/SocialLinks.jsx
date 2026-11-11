import React from "react";
import { Github, Linkedin, Briefcase, MessageCircle } from "lucide-react";

// Default social channels with placeholder links for Uzaima Ali Bari
export const defaultSocials = [
  {
    name: "GitHub",
    href: "https://github.com/UzaimaAliBarioffical", 
    icon: Github,
    label: "GitHub Profile",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/uzaima-bari-8a9b352ab/", 
    icon: Linkedin,
    label: "LinkedIn Profile",
  },
  {
    name: "Fiverr",
    href: "https://www.fiverr.com/uzaimabari",
    icon: Briefcase,
    label: "Fiverr Profile",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/923282301296",
    icon: MessageCircle,
    label: "WhatsApp Chat",
  },
];

export default function SocialLinks({
  links = defaultSocials,
  className = "",
  iconSize = "w-5 h-5",
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label || social.name}
            className="p-3 rounded-xl bg-surface border border-border text-muted hover:text-black hover:border-black/40 hover:bg-surface-hover hover:scale-105 transition-all duration-300"
          >
            <IconComponent className={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
