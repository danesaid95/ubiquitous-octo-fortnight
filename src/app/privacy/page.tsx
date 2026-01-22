"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-white/60">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="space-y-8 text-white/70">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p>
                  {siteConfig.legalEntity.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the Next FTD website and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                <p>We may collect information about you in various ways, including:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong className="text-white">Personal Data:</strong> Name, email address, phone number, company name, and other information you voluntarily provide when contacting us or using our services.</li>
                  <li><strong className="text-white">Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
                  <li><strong className="text-white">Cookies and Tracking:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                <p>We may use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To send you marketing and promotional communications (with your consent)</li>
                  <li>To analyze usage patterns and improve our website</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Sharing Your Information</h2>
                <p>
                  We may share your information with third parties only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>With service providers who assist us in operating our business</li>
                  <li>To comply with legal requirements or respond to lawful requests</li>
                  <li>To protect our rights, privacy, safety, or property</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>The right to access your personal data</li>
                  <li>The right to rectify inaccurate data</li>
                  <li>The right to erasure (&ldquo;right to be forgotten&rdquo;)</li>
                  <li>The right to restrict processing</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <address className="not-italic mt-4">
                  <p>{siteConfig.legalEntity.name}</p>
                  <p>{siteConfig.legalEntity.address.street}</p>
                  <p>{siteConfig.legalEntity.address.postalCode}, {siteConfig.legalEntity.address.city}</p>
                  <p>{siteConfig.legalEntity.address.country}</p>
                  <p className="mt-2">
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-[#39FF14] hover:underline">
                      {siteConfig.contact.email}
                    </a>
                  </p>
                </address>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
