"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#39FF14]/10 rounded-full blur-[128px]" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#BF00FF]/10 rounded-full blur-[100px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14] text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
            Limited spots available
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Ready to{" "}
            <span className="gradient-text">Scale?</span>
          </h2>

          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Book a free strategy call with our team and discover how we can
            engineer growth for your brand. No pitch decks, no fluff—just
            actionable insights.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={siteConfig.calendlyUrl} size="lg">
              Book Free Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button href="/case-studies" variant="ghost" size="lg">
              View Case Studies
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#39FF14]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              No commitment required
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#39FF14]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              30-minute call
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#39FF14]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Custom growth roadmap
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
