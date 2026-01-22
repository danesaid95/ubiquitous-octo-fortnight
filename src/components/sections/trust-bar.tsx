"use client";

import { motion } from "framer-motion";

const brands = [
  "VERATONE",
  "FLUXATHLETICA",
  "LUMINA",
  "ZEPHYR",
  "NOVEX",
  "PRISMTECH",
];

export function TrustBar() {
  return (
    <section className="relative py-16 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-white/40 mb-10 tracking-widest uppercase"
        >
          Trusted by category-leading brands
        </motion.p>

        <div className="relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Scrolling Logos */}
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex gap-24 items-center"
          >
            {/* First set */}
            {brands.map((brand, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 text-2xl font-bold text-white/20 hover:text-white/40 transition-colors whitespace-nowrap tracking-wider"
              >
                {brand}
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {brands.map((brand, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 text-2xl font-bold text-white/20 hover:text-white/40 transition-colors whitespace-nowrap tracking-wider"
              >
                {brand}
              </div>
            ))}
            {/* Third duplicate for wider screens */}
            {brands.map((brand, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 text-2xl font-bold text-white/20 hover:text-white/40 transition-colors whitespace-nowrap tracking-wider"
              >
                {brand}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
