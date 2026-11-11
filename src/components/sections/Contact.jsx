import React, { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";
import useInView from "../../hooks/useInView";
import { Send, CheckCircle2, Mail, MessageSquare, User, Github, Linkedin, Briefcase, MessageCircle } from "lucide-react";

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Connect form to backend endpoint or email provider (Formspree, EmailJS, Web3Forms, etc.)
    console.log("Form submission data:", formData);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  // Replace placeholder links below with your actual URLs
  const directChannels = [
    {
      name: "GitHub",
      value: "github.com/UzaimaAliBarioffical",
      href: "https://github.com/UzaimaAliBarioffical",
      icon: Github,
      description: "Explore source code & repositories",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/uzaima-bari",
      href: "https://www.linkedin.com/in/uzaima-bari-8a9b352ab/",
      icon: Linkedin,
      description: "Connect professionally & view work history",
    },
    {
      name: "Fiverr",
      value: "fiverr.com/uzaimabari",
      href: "https://www.fiverr.com/uzaimabari",
      icon: Briefcase,
      description: "Hire me for custom freelance orders",
    },
    {
      name: "WhatsApp",
      value: "+92 328 2301296",
      href: "https://wa.me/923282301296",
      icon: MessageCircle,
      description: "Quick message for immediate inquiries",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface/30 border-t border-border/50 scroll-mt-20">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 md:px-10 transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind? Fill out the form below or reach out directly — I usually respond within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-black/5 border border-black/20 flex items-center justify-center text-black">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-muted text-base max-w-md">
                    Thank you for reaching out. I'll review your inquiry and get back to you shortly.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="secondary"
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2"
                    >
                      <User className="w-4 h-4 text-black" />
                      <span>Your Name</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-border text-foreground placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-black" />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-border text-foreground placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 text-black" />
                      <span>Project Details / Message</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and goals..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-border text-foreground placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    icon={Send}
                    iconPosition="right"
                    className="w-full py-4 text-base"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
              Direct Channels
            </h3>

            {directChannels.map((channel, i) => {
              const ChannelIcon = channel.icon;
              return (
                <a
                  key={i}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Card className="p-5 flex items-start gap-4 hover:bg-surface-hover">
                    <div className="p-3 rounded-xl bg-black/5 border border-black/15 text-black group-hover:scale-110 transition-transform">
                      <ChannelIcon className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-heading text-base font-bold text-foreground group-hover:text-black transition-colors">
                          {channel.name}
                        </h4>
                        <span className="text-xs text-black font-mono font-medium">Connect →</span>
                      </div>
                      <p className="text-xs text-muted font-medium mb-1">
                        {channel.value}
                      </p>
                      <p className="text-xs text-muted-2">
                        {channel.description}
                      </p>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
