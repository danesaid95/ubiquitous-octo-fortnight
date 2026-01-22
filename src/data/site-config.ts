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
    name: "Dane Said",
    email: "Dane@NextFTD.com",
    address: {
      street: "30, Peirarios, Fl.: 1, Apt.: 1",
      postalCode: "2023",
      city: "Strovolos",
      country: "Cyprus",
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

  // Booking
  calendlyUrl: "https://calendly.com/dane-m-said/30min",

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
    id: "daydream",
    client: "Daydream",
    industry: "AI Fashion Tech",
    heroImage: "/images/case-studies/daydream-hero.jpg",
    logo: "/images/case-studies/daydream-logo.svg",
    summary: "How we drove 520% user acquisition growth for an AI-powered fashion platform through strategic influencer partnerships and viral content campaigns.",
    challenge:
      "Daydream, an AI-powered fashion shopping platform revolutionizing how consumers discover products through generative search, needed to break into a crowded fashion tech market. Despite their innovative conversational shopping experience, user acquisition costs were climbing and awareness among fashion-forward Gen Z consumers remained low. They needed a partner who could communicate their unique value proposition through authentic, culturally-relevant content.",
    strategy:
      "We developed a multi-platform influencer strategy that showcased Daydream's AI search capabilities in action. By partnering with fashion creators who could demonstrate the 'magic moment' of conversational product discovery, we created content that felt organic while highlighting the platform's revolutionary features. Our paid amplification strategy turned top-performing creator content into high-converting acquisition campaigns.",
    execution: [
      "Activated 80+ fashion and lifestyle influencers to demo AI search features",
      "Created viral 'find my outfit' challenge generating 2.4M+ organic views",
      "Produced 300+ UGC assets showcasing conversational shopping experience",
      "Launched TikTok Spark Ads and Meta campaigns with creator content",
      "Built retargeting funnels based on AI feature engagement signals",
    ],
    results: {
      revenue: "+520%",
      roas: "5.2x",
      cpa: "-58%",
      followers: "+320K",
    },
    testimonial: {
      quote: "Next FTD understood how to make AI feel human and exciting. They turned our technology into content that people actually wanted to watch and share.",
      author: "Julie Bornstein",
      role: "Founder, Daydream",
    },
  },
  {
    id: "halara",
    client: "Halara",
    industry: "DTC Athleisure",
    heroImage: "/images/case-studies/halara-hero.jpg",
    logo: "/images/case-studies/halara-logo.svg",
    summary: "Supercharging a viral athleisure brand's TikTok dominance to $8M monthly revenue and successful U.S. pop-up expansion.",
    challenge:
      "Halara had already achieved viral success on TikTok, but needed to scale sustainably while maintaining their authentic brand voice. As they prepared for major U.S. pop-up retail expansion in 2025, they required a strategic partner who could amplify their social momentum, drive foot traffic to physical locations, and convert viral attention into predictable, scalable revenue across all channels.",
    strategy:
      "We built an integrated growth engine that connected Halara's TikTok virality to real-world retail success. Our approach combined always-on creator content with geo-targeted campaigns for pop-up launches, creating a seamless online-to-offline customer journey. We also developed a community strategy that turned Halara's most engaged followers into brand evangelists who amplified every launch.",
    execution: [
      "Scaled creator network to 200+ active Halara ambassadors",
      "Launched geo-targeted TikTok campaigns for 12 U.S. pop-up locations",
      "Created 'Halara Haul' content series generating 15M+ monthly views",
      "Built lookalike audiences from top 1% engaged TikTok viewers",
      "Developed influencer event strategy for pop-up grand openings",
    ],
    results: {
      revenue: "$8M/mo",
      ltv: "+92%",
      community: "45K members",
      organic: "+380%",
    },
    testimonial: {
      quote: "They didn't just scale our marketing—they helped us build a movement. The pop-up launches exceeded every projection thanks to their strategy.",
      author: "Joyce Zhang",
      role: "Founder, Halara",
    },
  },
  {
    id: "onbuy",
    client: "OnBuy",
    industry: "E-commerce Marketplace",
    heroImage: "/images/case-studies/onbuy-hero.jpg",
    logo: "/images/case-studies/onbuy-logo.svg",
    summary: "Driving 290% GMV growth for a UK marketplace through strategic social campaigns that attracted both sellers and buyers at scale.",
    challenge:
      "OnBuy, an innovative UK-based online marketplace connecting third-party retailers with consumers, faced the classic marketplace challenge: they needed to grow both supply and demand simultaneously. Competing against established giants with massive brand recognition, they required a social strategy that could efficiently acquire both sellers seeking a fair platform and consumers looking for value—all while differentiating their unique no-inventory model.",
    strategy:
      "We developed a dual-audience social strategy that positioned OnBuy as the ethical alternative to marketplace monopolies. For consumers, we created deal-focused content highlighting seller diversity and competitive pricing. For sellers, we built thought leadership campaigns showcasing OnBuy's fair fee structure and growth potential. Our paid strategy used sophisticated audience segmentation to deliver the right message to each group.",
    execution: [
      "Created separate content strategies for buyer and seller acquisition",
      "Launched 'Support Independent Sellers' campaign with 50+ creator partners",
      "Built performance campaigns targeting e-commerce business owners",
      "Developed seasonal deal content generating 8M+ impressions",
      "Implemented cross-platform retargeting connecting seller and buyer journeys",
    ],
    results: {
      revenue: "+290%",
      roas: "4.6x",
      cpa: "-47%",
      followers: "+150K",
    },
    testimonial: {
      quote: "Next FTD cracked the code on marketplace marketing. They understood we weren't just selling products—we were building an alternative to the status quo.",
      author: "Cas Paton",
      role: "Founder, OnBuy",
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
  { name: "Daydream", logo: "/images/clients/daydream-logo.svg" },
  { name: "Halara", logo: "/images/clients/halara-logo.svg" },
  { name: "OnBuy", logo: "/images/clients/onbuy-logo.svg" },
  { name: "LUMINA", logo: "/images/clients/lumina-logo.svg" },
  { name: "ZEPHYR", logo: "/images/clients/zephyr-logo.svg" },
  { name: "NOVEX", logo: "/images/clients/novex-logo.svg" },
];
