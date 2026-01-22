"use client";

import { motion } from "framer-motion";
import {
  Users,
  Target,
  Video,
  MessageCircle,
  BarChart3,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/site-config";

const iconMap = {
  Users,
  Target,
  Video,
  MessageCircle,
  BarChart3,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#39FF14]/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#BF00FF]/10 rounded-full blur-[128px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Full-Funnel{" "}
              <span className="text-[#39FF14]">Growth Services</span>
            </h1>
            <p className="text-xl text-white/60">
              From awareness to conversion, we build integrated marketing
              strategies that drive measurable results at every stage of the
              customer journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-32"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-16 items-center ${
                      isEven ? "" : "lg:grid-flow-col-dense"
                    }`}
                  >
                    {/* Content */}
                    <div className={isEven ? "" : "lg:col-start-2"}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-[#39FF14]/10 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-[#39FF14]" />
                        </div>
                        <span className="text-sm font-medium text-[#39FF14] uppercase tracking-wider">
                          Service 0{index + 1}
                        </span>
                      </div>

                      <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                        {service.title}
                      </h2>

                      <p className="text-lg text-white/60 mb-8 leading-relaxed">
                        {service.fullDescription}
                      </p>

                      <ul className="space-y-4 mb-8">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#39FF14]/20 flex items-center justify-center mt-0.5">
                              <Check className="w-3 h-3 text-[#39FF14]" />
                            </div>
                            <span className="text-white/80">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button href="/contact" variant="outline">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>

                    {/* Visual */}
                    <div
                      className={`relative ${isEven ? "" : "lg:col-start-1"}`}
                    >
                      <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#39FF14]/5 to-[#BF00FF]/5 border border-white/10 p-8 flex items-center justify-center">
                        <div className="relative w-full h-full">
                          {/* Decorative elements */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full bg-[#39FF14]/10 blur-2xl" />
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Icon className="w-24 h-24 text-[#39FF14]/30" />
                          </div>

                          {/* Stats/Metrics Grid */}
                          <div className="absolute inset-4 grid grid-cols-2 gap-4">
                            {index === 0 && (
                              <>
                                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                  <div className="text-2xl font-bold text-[#39FF14]">
                                    500+
                                  </div>
                                  <div className="text-xs text-white/40">
                                    Creator Network
                                  </div>
                                </div>
                                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                  <div className="text-2xl font-bold text-[#39FF14]">
                                    8.2%
                                  </div>
                                  <div className="text-xs text-white/40">
                                    Avg. Engagement
                                  </div>
                                </div>
                                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                  <div className="text-2xl font-bold text-[#39FF14]">
                                    5.4x
                                  </div>
                                  <div className="text-xs text-white/40">
                                    Avg. ROI
                                  </div>
                                </div>
                                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                  <div className="text-2xl font-bold text-[#39FF14]">
                                    72hr
                                  </div>
                                  <div className="text-xs text-white/40">
                                    Avg. Turnaround
                                  </div>
                                </div>
                              </>
                            )}
                            {index === 1 && (
                              <>
                                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                  <div className="text-2xl font-bold text-[#39FF14]">
                                    $50M+
                                  </div>
                                  <div className="text-xs text-white/40">
                                    Ad Spend Managed
                                  </div>
                                </div>
                                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                  <div className="text-2xl font-bold text-[#39FF14]">
                                    4.2x
                                  </div>
                                  <div className="text-xs text-white/40">
                                    Avg. ROAS
                                  </div>
                                </div>
                                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                  <div className="text-2xl font-bold text-[#39FF14]">
                                    -45%
                                  </div>
                                  <div className="text-xs text-white/40">
                                    Avg. CPA Reduction
                                  </div>
                                </div>
                                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                  <div className="text-2xl font-bold text-[#39FF14]">
                                    15+
                                  </div>
                                  <div className="text-xs text-white/40">
                                    Tests/Week
                                  </div>
                                </div>
                              </>
                            )}
                            {index === 2 && (
                              <>
                                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                  <div className="text-2xl font-bold text-[#39FF14]">
                                    10K+
                                  </div>
                                  <div className="text-xs text-white/40">
                                    UGC Assets Created
                                  </div>
                                </div>
                                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                  <div className="text-2xl font-bold text-[#39FF14]">
                                    200+
                                  </div>
                                  <div className="text-xs text-white/40">
                                    UGC Creators
                                  </div>
                                </div>
                                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                  <div className="text-2xl font-bold text-[#39FF14]">
                                    3x
                                  </div>
                                  <div className="text-xs text-white/40">
                                    Better Than Avg
                                  </div>
                                </div>
                                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                  <div className="text-2xl font-bold text-[#39FF14]">
                                    48hr
                                  </div>
                                  <div className="text-xs text-white/40">
                                    Avg. Delivery
                                  </div>
                                </div>
                              </>
                            )}
                            {index === 3 && (
                              <>
                                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                  <div className="text-2xl font-bold text-[#39FF14]">
                                    24/7
                                  </div>
                                  <div className="text-xs text-white/40">
                                    Monitoring
                                  </div>
                                </div>
                                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                  <div className="text-2xl font-bold text-[#39FF14]">
                                    &lt;1hr
                                  </div>
                                  <div className="text-xs text-white/40">
                                    Response Time
                                  </div>
                                </div>
                                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                  <div className="text-2xl font-bold text-[#39FF14]">
                                    95%
                                  </div>
                                  <div className="text-xs text-white/40">
                                    Sentiment Score
                                  </div>
                                </div>
                                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                  <div className="text-2xl font-bold text-[#39FF14]">
                                    +180%
                                  </div>
                                  <div className="text-xs text-white/40">
                                    Engagement Growth
                                  </div>
                                </div>
                              </>
                            )}
                            {index === 4 && (
                              <>
                                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                  <div className="text-2xl font-bold text-[#39FF14]">
                                    Real-time
                                  </div>
                                  <div className="text-xs text-white/40">
                                    Dashboards
                                  </div>
                                </div>
                                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                  <div className="text-2xl font-bold text-[#39FF14]">
                                    50+
                                  </div>
                                  <div className="text-xs text-white/40">
                                    KPIs Tracked
                                  </div>
                                </div>
                                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                  <div className="text-2xl font-bold text-[#39FF14]">
                                    Weekly
                                  </div>
                                  <div className="text-xs text-white/40">
                                    Strategy Syncs
                                  </div>
                                </div>
                                <div className="bg-white/[0.02] rounded-xl p-4 border border-white/5">
                                  <div className="text-2xl font-bold text-[#39FF14]">
                                    100%
                                  </div>
                                  <div className="text-xs text-white/40">
                                    Transparent
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="text-[#39FF14]">Process</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              A proven framework that takes brands from where they are to where
              they want to be.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We dive deep into your brand, audience, and goals to understand what makes you unique.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "We build a custom growth roadmap with clear KPIs and milestones.",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "We launch, optimize, and iterate—constantly testing to find what works best.",
              },
              {
                step: "04",
                title: "Scale",
                description:
                  "We double down on winners and expand into new channels and audiences.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#39FF14]/50 to-transparent -translate-x-4" />
                )}

                <div className="text-5xl font-black text-[#39FF14]/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60">{item.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
              Let&apos;s build a growth strategy tailored to your brand. Book a
              free call and we&apos;ll show you exactly how we can help.
            </p>
            <Button href="/contact" size="lg">
              Book Free Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
