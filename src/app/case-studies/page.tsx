"use client";

import { motion } from "framer-motion";
import { ArrowRight, Quote, TrendingUp, Users, Target, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data/site-config";

const resultIcons = {
  revenue: TrendingUp,
  roas: Target,
  cpa: Percent,
  followers: Users,
  ltv: TrendingUp,
  community: Users,
  organic: TrendingUp,
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#39FF14]/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 -left-32 w-96 h-96 bg-[#BF00FF]/10 rounded-full blur-[128px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Real <span className="text-[#39FF14]">Results</span> for Real
              Brands
            </h1>
            <p className="text-xl text-white/60">
              We don&apos;t just talk about growth—we deliver it. Here&apos;s
              how we&apos;ve helped brands like yours scale to new heights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Case Study Header */}
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14] text-sm font-medium">
                      {study.industry}
                    </span>
                    <span className="text-white/40">Case Study 0{index + 1}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                    {study.client}
                  </h2>
                  <p className="text-xl text-white/60 max-w-3xl">
                    {study.summary}
                  </p>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                  {Object.entries(study.results).map(([key, value]) => {
                    const Icon = resultIcons[key as keyof typeof resultIcons] || TrendingUp;
                    return (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-[#39FF14]/10 to-transparent border border-[#39FF14]/20"
                      >
                        <Icon className="w-6 h-6 text-[#39FF14] mb-3" />
                        <div className="text-3xl sm:text-4xl font-black text-[#39FF14] mb-1">
                          {value}
                        </div>
                        <div className="text-sm text-white/60 capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Challenge, Strategy, Execution */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                  {/* Challenge */}
                  <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      The Challenge
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Strategy */}
                  <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-yellow-500" />
                      The Strategy
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {study.strategy}
                    </p>
                  </div>

                  {/* Execution */}
                  <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#39FF14]" />
                      The Execution
                    </h3>
                    <ul className="space-y-3">
                      {study.execution.map((item, i) => (
                        <li
                          key={i}
                          className="text-white/60 text-sm flex items-start gap-2"
                        >
                          <ArrowRight className="w-4 h-4 text-[#39FF14] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Testimonial */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#39FF14]/5 to-[#BF00FF]/5 border border-white/10"
                >
                  <Quote className="absolute top-6 left-6 w-12 h-12 text-[#39FF14]/20" />
                  <blockquote className="relative z-10">
                    <p className="text-xl sm:text-2xl text-white font-medium mb-6 leading-relaxed">
                      &ldquo;{study.testimonial.quote}&rdquo;
                    </p>
                    <footer className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#39FF14]/20 flex items-center justify-center">
                        <span className="text-[#39FF14] font-bold">
                          {study.testimonial.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-white">
                          {study.testimonial.author}
                        </div>
                        <div className="text-sm text-white/60">
                          {study.testimonial.role}
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </motion.div>

                {/* Divider */}
                {index < caseStudies.length - 1 && (
                  <div className="mt-32 border-t border-white/10" />
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              The Numbers Don&apos;t Lie
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Across all our brand partnerships, we consistently deliver
              results that matter.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "$50M+", label: "Ad Spend Managed" },
              { value: "4.2x", label: "Average ROAS" },
              { value: "200+", label: "Brands Scaled" },
              { value: "98%", label: "Client Retention" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-black text-[#39FF14] mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              Your Success Story Starts Here
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
              Ready to become our next case study? Let&apos;s talk about how we
              can drive similar results for your brand.
            </p>
            <Button href="/contact" size="lg">
              Start Your Growth Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
