"use client";

import { motion } from "framer-motion";
import { Users, Target, Video, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Users,
    title: "Influencer Marketing",
    description:
      "Strategic creator partnerships that drive authentic engagement and measurable ROI across platforms.",
    href: "/services#influencer-marketing",
  },
  {
    icon: Target,
    title: "Paid Social",
    description:
      "High-performance TikTok & Meta campaigns engineered for scale and sustainable ROAS.",
    href: "/services#paid-social",
  },
  {
    icon: Video,
    title: "UGC Campaigns",
    description:
      "Authentic user-generated content that converts browsers into buyers with native creative.",
    href: "/services#ugc-campaigns",
  },
  {
    icon: MessageCircle,
    title: "Community Management",
    description:
      "Build loyal communities that amplify your brand and drive organic growth at scale.",
    href: "/services#community-management",
  },
];

export function ServicesSnapshot() {
  return (
    <section className="relative py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            What We <span className="text-[#39FF14]">Do</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Full-funnel social media marketing services designed for DTC brands
            ready to scale.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="group block h-full p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#39FF14]/50 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#39FF14]/10 flex items-center justify-center group-hover:bg-[#39FF14]/20 transition-colors">
                      <Icon className="w-7 h-7 text-[#39FF14]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#39FF14] transition-colors flex items-center gap-2">
                        {service.title}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#39FF14] font-semibold hover:gap-4 transition-all"
          >
            View all services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
