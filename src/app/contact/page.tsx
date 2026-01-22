"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Calendar, Send, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

interface FormData {
  name: string;
  company: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", company: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#39FF14]/10 rounded-full blur-[128px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Let&apos;s Build Something{" "}
              <span className="text-[#39FF14]">Great</span>
            </h1>
            <p className="text-xl text-white/60">
              Ready to scale your brand? Get in touch and let&apos;s talk about
              how we can drive growth for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">
                Send us a message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/30 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#39FF14]/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-[#39FF14]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-white/60 mb-6">
                    Thanks for reaching out. We&apos;ll get back to you within 24
                    hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#39FF14] transition-colors ${
                        errors.name ? "border-red-500" : "border-white/10"
                      }`}
                      placeholder="John Smith"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#39FF14] transition-colors ${
                        errors.company ? "border-red-500" : "border-white/10"
                      }`}
                      placeholder="Your Brand Inc."
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#39FF14] transition-colors ${
                        errors.email ? "border-red-500" : "border-white/10"
                      }`}
                      placeholder="john@yourbrand.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#39FF14] transition-colors resize-none ${
                        errors.message ? "border-red-500" : "border-white/10"
                      }`}
                      placeholder="Tell us about your brand and what you're looking to achieve..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info & Calendar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Book a Call Card */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#39FF14]/10 to-[#BF00FF]/10 border border-[#39FF14]/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#39FF14]/20 flex items-center justify-center">
                    <Calendar className="w-7 h-7 text-[#39FF14]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Book a Strategy Call
                    </h3>
                    <p className="text-white/60">30 minutes, no commitment</p>
                  </div>
                </div>
                <p className="text-white/60 mb-6">
                  Skip the back-and-forth. Book a time that works for you and
                  we&apos;ll dive into your growth goals.
                </p>
                <Button href={siteConfig.calendlyUrl} className="w-full">
                  Book Free Strategy Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Contact Details */}
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">
                  Contact Details
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#39FF14]" />
                    </div>
                    <div>
                      <div className="text-sm text-white/40 mb-1">Email</div>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-white hover:text-[#39FF14] transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#39FF14]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#39FF14]" />
                    </div>
                    <div>
                      <div className="text-sm text-white/40 mb-1">Office</div>
                      <address className="text-white not-italic">
                        {siteConfig.contact.address.street}
                        <br />
                        {siteConfig.contact.address.postalCode}, {siteConfig.contact.address.city}
                        <br />
                        {siteConfig.contact.address.country}
                      </address>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Response Time */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
                <p className="text-white/60">
                  Average response time:{" "}
                  <span className="text-[#39FF14] font-semibold">
                    Under 24 hours
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "What's your minimum engagement?",
                a: "We typically work with brands spending at least $20K/month on paid social or with a monthly retainer starting at $5K for organic services. That said, we evaluate each partnership individually based on growth potential.",
              },
              {
                q: "How quickly can you get started?",
                a: "For most engagements, we can kick off within 1-2 weeks of signing. This includes our discovery phase, strategy development, and initial asset creation.",
              },
              {
                q: "Do you require long-term contracts?",
                a: "We offer flexible month-to-month arrangements for most services. While we recommend a 3-month commitment to see meaningful results, we don't lock you into long-term contracts.",
              },
              {
                q: "What industries do you specialize in?",
                a: "We focus on DTC and e-commerce brands, with deep expertise in fashion, beauty, tech, and lifestyle categories. We know what works for brands targeting Gen Z and millennial consumers.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-white/60">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
