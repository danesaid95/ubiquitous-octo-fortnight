"use client";

import { motion } from "framer-motion";
import { Zap, Eye, LineChart, Handshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { values } from "@/data/site-config";

const valueIcons = [Zap, Eye, LineChart, Handshake];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#39FF14]/10 rounded-full blur-[128px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              We&apos;re Building the{" "}
              <span className="text-[#39FF14]">Future</span> of Brand Growth
            </h1>
            <p className="text-xl text-white/60">
              Next FTD is a performance-obsessed social media marketing agency
              built for DTC brands ready to dominate their categories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-white/60 mb-6 leading-relaxed">
                We exist to help ambitious DTC brands break through the noise
                and capture the attention of the consumers who matter most. In a
                world of infinite scroll and shrinking attention spans, we
                engineer growth strategies that don&apos;t just perform—they
                compound.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                Our approach fuses data-driven paid media with culturally fluent
                content and authentic creator partnerships. We don&apos;t chase
                trends—we anticipate them. And we measure everything, so you
                always know exactly what&apos;s driving results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#39FF14]/20 to-[#BF00FF]/20 p-1">
                <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-7xl font-black gradient-text mb-4">
                      FTD
                    </div>
                    <div className="text-white/60">
                      <span className="block">Future.</span>
                      <span className="block">Trend.</span>
                      <span className="block">Driven.</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <p>
                Next FTD was born from a simple observation: most marketing
                agencies are stuck in the past. They&apos;re still running
                playbooks from 2015 in a landscape that changes every week.
              </p>
              <p>
                We started as a small team of performance marketers, content
                creators, and platform specialists who were frustrated with the
                status quo. We knew there had to be a better way—an approach
                that combined the rigor of performance marketing with the
                cultural fluency of native content creation.
              </p>
              <p>
                Today, we&apos;ve helped over 200 brands achieve scalable,
                sustainable growth through our unique blend of influencer
                marketing, paid social, and community-driven strategies.
                We&apos;ve managed over $50M in ad spend and built a creator
                network of 500+ vetted partners.
              </p>
              <p className="text-[#39FF14]">
                But we&apos;re just getting started.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              The Team Behind the <span className="text-[#39FF14]">Results</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              We&apos;re a diverse crew of strategists, creators, analysts, and
              platform nerds united by one thing: an obsession with driving
              measurable growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Team Vibe Cards */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Performance Marketers
              </h3>
              <p className="text-white/60">
                Data-driven strategists who live in dashboards and speak fluent
                ROAS. They turn ad dollars into revenue.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
              <div className="text-5xl mb-4">🎬</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Content Creators
              </h3>
              <p className="text-white/60">
                Platform natives who know what stops the scroll. They craft
                content that feels native, not forced.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Relationship Builders
              </h3>
              <p className="text-white/60">
                Community experts who turn customers into fans and fans into
                advocates. They build loyalty that lasts.
              </p>
            </div>
          </motion.div>

          {/* Team Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10"
          >
            {[
              { value: "35+", label: "Team Members" },
              { value: "12", label: "Countries" },
              { value: "24/7", label: "Coverage" },
              { value: "100%", label: "Remote" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-[#39FF14] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              Our Core <span className="text-[#39FF14]">Values</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              These aren&apos;t just words on a wall. They&apos;re the
              principles that guide every decision we make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#39FF14]/30 transition-colors group"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#39FF14]/10 flex items-center justify-center group-hover:bg-[#39FF14]/20 transition-colors">
                      <Icon className="w-7 h-7 text-[#39FF14]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {value.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
              Ready to Work with Us?
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
              Let&apos;s talk about how we can engineer growth for your brand.
              No pitch decks, no fluff—just real strategies that work.
            </p>
            <Button href="/contact" size="lg">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
