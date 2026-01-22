"use client";

import { useState } from "react";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/button";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubscribed(true);
    setIsLoading(false);
    setEmail("");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <span className="text-2xl font-black tracking-tight text-white">
                Next
              </span>
              <span className="text-2xl font-black tracking-tight text-[#39FF14]">
                FTD
              </span>
            </Link>
            <p className="text-white/60 max-w-md mb-8">
              {siteConfig.description}
            </p>

            {/* Newsletter */}
            <div className="max-w-md">
              <h4 className="text-white font-semibold mb-4">
                Stay in the loop
              </h4>
              {isSubscribed ? (
                <p className="text-[#39FF14]">
                  Thanks for subscribing! We&apos;ll be in touch.
                </p>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex gap-3"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#39FF14] transition-colors"
                  />
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "..." : "Subscribe"}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              {siteConfig.navigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-[#39FF14] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#39FF14] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  className="hover:text-[#39FF14] transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <address className="not-italic">
                  {siteConfig.contact.address.street}
                  <br />
                  {siteConfig.contact.address.city},{" "}
                  {siteConfig.contact.address.state}{" "}
                  {siteConfig.contact.address.zip}
                </address>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-[#39FF14] hover:text-black transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-[#39FF14] hover:text-black transition-all"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-white/60 hover:bg-[#39FF14] hover:text-black transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Entity Info */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center text-white/30 text-xs">
            <p>
              {siteConfig.legalEntity.name} ({siteConfig.legalEntity.registrationNumber})
            </p>
            <p>
              {siteConfig.legalEntity.address.street}, {siteConfig.legalEntity.address.postalCode}, {siteConfig.legalEntity.address.city}, {siteConfig.legalEntity.address.country}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {currentYear} Next FTD. All rights reserved.
          </p>
          <div className="flex gap-6">
            {siteConfig.navigation.footer.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/40 hover:text-white/60 text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
