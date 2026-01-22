"use client";

import { motion } from "framer-motion";
import { Zap, Eye, LineChart, Handshake } from "lucide-react";

const differentiators = [
  {
    icon: Zap,
    title: "Performance Obsessed",
    description:
      "Every strategy we build is engineered for measurable results. We obsess over ROAS, CAC, and LTV—not vanity metrics that don't move the needle.",
  },
  {
    icon: Eye,
    title: "Culturally Fluent",
    description:
      "We live where your audience lives. Our team stays embedded in TikTok, Instagram, and emerging platforms to catch trends before they peak.",
  },
  {
    icon: LineChart,
    title: "Radically Transparent",
    description:
      "No black boxes or smoke and mirrors. Real-time dashboards, weekly syncs, and clear reporting so you always know exactly what we're doing.",
  },
  {
    icon: Handshake,
    title: "Partner Mindset",
    description:
      "We're not just an agency—we're an extension of your team. Your wins are our wins, and we're invested in your long-term success.",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0a0a0a]">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#39FF14]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              Why Brands Choose{" "}
              <span className="text-[#39FF14]">Next FTD</span>
            </h2>
            <p className="text-lg text-white/60 mb-8">
              We&apos;re not your typical marketing agency. We&apos;re a team of
              performance marketers, content strategists, and culture experts
              who know what it takes to cut through the noise and drive real
              business results.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="text-4xl font-black text-[#39FF14] mb-2">
                  98%
                </div>
                <div className="text-sm text-white/60">Client Retention</div>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="text-4xl font-black text-[#39FF14] mb-2">
                  3.5x
                </div>
                <div className="text-sm text-white/60">Avg. Revenue Lift</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Differentiators */}
          <div className="grid sm:grid-cols-2 gap-6">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#39FF14]/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#39FF14]/10 flex items-center justify-center mb-4 group-hover:bg-[#39FF14]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
