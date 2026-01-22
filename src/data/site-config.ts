export const siteConfig = {
  name: "Next FTD",
  tagline: "Where Culture Meets Conversion.",
  description:
    "Next FTD is a next-gen social media marketing agency that drives explosive growth for DTC and e-commerce brands through influencer partnerships, paid social mastery, and culturally-charged content strategies.",
  url: "https://nextftd.com",

  // SEO
  metaDescription:
    "Next FTD is a performance-driven social media marketing agency specializing in influencer marketing, TikTok & Meta ads, UGC campaigns, and community management for fast-scaling DTC brands.",

  // Social Bios
  instagramBio: `Next-gen growth for bold brands 🚀\nInfluencer | Paid Social | UGC\nDriving 7-figure results for DTC 💰\n📩 Let's scale → link in bio`,

  // Elevator Pitch
  elevatorPitch:
    "Next FTD is a performance-obsessed social media marketing agency built for DTC brands ready to dominate. We fuse data-driven paid media strategies with culturally fluent content and authentic influencer partnerships to turn scrollers into buyers. From TikTok virality to Meta ad precision, we engineer growth that compounds—helping brands break through the noise and capture the attention of Gen Z and millennial consumers who actually convert.",

  // Contact
  contact: {
    email: "hello@nextftd.com",
    phone: "+1 (888) 639-8384",
    address: {
      street: "350 Fifth Avenue, Suite 4820",
      city: "New York",
      state: "NY",
      zip: "10118",
      country: "United States",
    },
  },

  // Legal Entity
  legalEntity: {
    name: "True Polygon Entertainment Limited",
    registrationNumber: "HE 422125",
    address: {
      street: "30, Peirarios, Fl.: 1, Apt.: 1",
      postalCode: "2023",
      city: "Strovolos",
      country: "Cyprus",
    },
  },

  // Social Links
  social: {
    instagram: "https://instagram.com/nextftd",
    tiktok: "https://tiktok.com/@nextftd",
    linkedin: "https://linkedin.com/company/nextftd",
    twitter: "https://twitter.com/nextftd",
  },

  // Navigation
  navigation: {
    main: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Contact", href: "/contact" },
    ],
    footer: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
};

export const services = [
  {
    id: "influencer-marketing",
    title: "Influencer Marketing",
    shortDescription: "Strategic creator partnerships that drive authentic engagement and measurable ROI.",
    fullDescription:
      "We identify, vet, and activate the right creators for your brand—from nano-influencers to household names. Our data-backed approach ensures every partnership delivers authentic content that resonates with your target audience and drives real business results.",
    features: [
      "End-to-end creator sourcing and vetting",
      "Performance-based partnership structures",
      "Content rights management",
      "Real-time campaign analytics",
      "Affiliate and ambassador programs",
    ],
    icon: "Users",
  },
  {
    id: "paid-social",
    title: "Paid Social Advertising",
    shortDescription: "High-performance TikTok & Meta campaigns engineered for scale.",
    fullDescription:
      "Our paid social team combines creative strategy with algorithmic expertise to build campaigns that cut through the noise. We specialize in full-funnel strategies across TikTok and Meta that turn ad spend into predictable, scalable revenue.",
    features: [
      "TikTok Ads & Spark Ads",
      "Meta (Facebook & Instagram) Ads",
      "Creative testing frameworks",
      "Audience segmentation & lookalikes",
      "Attribution modeling & ROAS optimization",
    ],
    icon: "Target",
  },
  {
    id: "ugc-campaigns",
    title: "UGC Campaigns",
    shortDescription: "Authentic user-generated content that converts browsers into buyers.",
    fullDescription:
      "We build and manage networks of UGC creators who produce scroll-stopping content designed for performance. From product seeding to content briefs to asset delivery, we handle the entire UGC pipeline so you get a steady stream of high-converting creative.",
    features: [
      "UGC creator network access",
      "Creative brief development",
      "Content production management",
      "Usage rights & licensing",
      "Performance-optimized formats",
    ],
    icon: "Video",
  },
  {
    id: "community-management",
    title: "Community Management",
    shortDescription: "Build loyal communities that amplify your brand and drive organic growth.",
    fullDescription:
      "Your community is your competitive moat. We manage your social presence with a human touch—responding, engaging, and fostering the kind of brand loyalty that turns customers into advocates and advocates into evangelists.",
    features: [
      "24/7 social media monitoring",
      "Comment and DM management",
      "Crisis response protocols",
      "Community growth strategies",
      "Brand voice development",
    ],
    icon: "MessageCircle",
  },
  {
    id: "performance-analytics",
    title: "Performance Analytics",
    shortDescription: "Real-time insights and reporting that inform every decision.",
    fullDescription:
      "Data without insight is just noise. Our analytics practice turns your marketing data into actionable intelligence—custom dashboards, attribution modeling, and strategic recommendations that help you understand what's working and why.",
    features: [
      "Custom KPI dashboards",
      "Multi-touch attribution",
      "Competitive benchmarking",
      "Monthly strategy reviews",
      "Predictive performance modeling",
    ],
    icon: "BarChart3",
  },
];

export const caseStudies = [
  {
    id: "veratone",
    client: "VeraTone",
    industry: "Clean Beauty",
    heroImage: "/images/case-studies/veratone-hero.jpg",
    logo: "/images/case-studies/veratone-logo.svg",
    summary: "How we helped a clean beauty brand achieve 340% revenue growth in 6 months through strategic influencer partnerships and TikTok-first paid media.",
    challenge:
      "VeraTone, a clean beauty brand targeting Gen Z consumers, was struggling to break through in a saturated market. Their existing marketing efforts were scattered across channels with no cohesive strategy, and their cost per acquisition had climbed to unsustainable levels. They needed a partner who understood their audience and could build a growth engine from the ground up.",
    strategy:
      "We developed a TikTok-first strategy that leaned into the platform's authenticity-driven algorithm. This included identifying micro-influencers who genuinely aligned with VeraTone's clean beauty mission, creating a UGC pipeline optimized for TikTok's native formats, and building a paid media strategy that amplified top-performing organic content.",
    execution: [
      "Activated 45+ micro-influencers across skincare and lifestyle niches",
      "Produced 200+ UGC assets optimized for TikTok and Meta",
      "Launched Spark Ads campaigns featuring top-performing creator content",
      "Built custom audiences based on engaged viewers and purchasers",
      "Implemented a testing framework with 15+ creative variations weekly",
    ],
    results: {
      revenue: "+340%",
      roas: "4.8x",
      cpa: "-62%",
      followers: "+180K",
    },
    testimonial: {
      quote: "Next FTD didn't just run our marketing—they transformed our entire approach to growth. The results speak for themselves.",
      author: "Maya Chen",
      role: "Founder & CEO, VeraTone",
    },
  },
  {
    id: "fluxathletica",
    client: "FluxAthletica",
    industry: "Athletic Apparel",
    heroImage: "/images/case-studies/fluxathletica-hero.jpg",
    logo: "/images/case-studies/fluxathletica-logo.svg",
    summary: "Scaling a challenger athletic brand to $2M monthly revenue through community-driven marketing and performance creative.",
    challenge:
      "FluxAthletica was a promising athletic apparel brand with a loyal but small customer base. They were competing against industry giants with massive budgets and needed a way to punch above their weight. Their previous agency had focused solely on paid acquisition, neglecting the brand-building that creates lasting customer relationships.",
    strategy:
      "We built a community-first growth strategy that turned FluxAthletica's most passionate customers into a marketing army. By combining authentic community engagement with precision-targeted paid campaigns, we created a flywheel where organic advocacy amplified paid performance and vice versa.",
    execution: [
      "Launched a brand ambassador program with 500+ active members",
      "Created a private community with exclusive content and early access",
      "Developed a content series featuring real customers' fitness journeys",
      "Built Meta campaigns using ambassador content as primary creative",
      "Implemented a referral program with gamified rewards",
    ],
    results: {
      revenue: "$2M/mo",
      ltv: "+85%",
      community: "12K members",
      organic: "+240%",
    },
    testimonial: {
      quote: "They understood that our community is our superpower. The growth we've achieved feels sustainable because it's built on real relationships.",
      author: "Jordan Wells",
      role: "Co-Founder, FluxAthletica",
    },
  },
];

export const values = [
  {
    title: "Performance Obsessed",
    description: "Every strategy we build is engineered for measurable results. Vanity metrics don't pay the bills.",
  },
  {
    title: "Culturally Fluent",
    description: "We live where your audience lives—understanding the trends, memes, and moments that move culture.",
  },
  {
    title: "Radically Transparent",
    description: "No black boxes, no smoke and mirrors. You see exactly what we're doing and why it's working.",
  },
  {
    title: "Partner Mindset",
    description: "Your wins are our wins. We're invested in your long-term success, not just the next campaign.",
  },
];

export const stats = [
  { value: "$50M+", label: "Ad Spend Managed" },
  { value: "200+", label: "Brand Partners" },
  { value: "4.2x", label: "Average ROAS" },
  { value: "500+", label: "Creator Network" },
];

export const clientLogos = [
  { name: "Brand 1", logo: "/images/clients/client-1.svg" },
  { name: "Brand 2", logo: "/images/clients/client-2.svg" },
  { name: "Brand 3", logo: "/images/clients/client-3.svg" },
  { name: "Brand 4", logo: "/images/clients/client-4.svg" },
  { name: "Brand 5", logo: "/images/clients/client-5.svg" },
  { name: "Brand 6", logo: "/images/clients/client-6.svg" },
];
