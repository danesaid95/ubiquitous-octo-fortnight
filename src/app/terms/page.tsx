"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";

export default function TermsPage() {
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
              Terms of Service
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
                <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing or using the services provided by {siteConfig.legalEntity.name} (&ldquo;Next FTD,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
                <p>
                  Next FTD provides social media marketing services including, but not limited to, influencer marketing, paid social advertising, UGC campaigns, community management, and performance analytics. The specific scope of services will be defined in individual service agreements or statements of work.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Client Responsibilities</h2>
                <p>As a client, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Provide accurate and complete information necessary for service delivery</li>
                  <li>Grant appropriate access to social media accounts and advertising platforms as needed</li>
                  <li>Review and approve content and campaigns in a timely manner</li>
                  <li>Pay all fees according to the agreed payment terms</li>
                  <li>Comply with all applicable laws and platform terms of service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
                <p>
                  Payment terms will be specified in individual service agreements. Unless otherwise agreed, invoices are due within 30 days of receipt. Late payments may incur interest charges and may result in suspension of services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                <p>
                  Unless otherwise specified in a service agreement, clients retain ownership of their existing intellectual property. Content created by Next FTD as part of service delivery becomes the property of the client upon full payment, unless otherwise agreed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Confidentiality</h2>
                <p>
                  Both parties agree to maintain the confidentiality of proprietary information shared during the course of the engagement. This obligation survives the termination of any service agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Next FTD shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to the use of our services. Our total liability shall not exceed the fees paid by the client in the 12 months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
                <p>
                  Either party may terminate services as specified in the applicable service agreement. Upon termination, all outstanding fees become immediately due, and both parties shall return or destroy confidential information of the other party.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of Cyprus. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Cyprus.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. We will notify clients of material changes by email or through our website. Continued use of our services after such modifications constitutes acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us at:
                </p>
                <address className="not-italic mt-4">
                  <p>{siteConfig.legalEntity.name}</p>
                  <p>Registration Number: {siteConfig.legalEntity.registrationNumber}</p>
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
