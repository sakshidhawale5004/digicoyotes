import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroServices from "@/assets/hero-services.jpg";

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  rotatingWords: string[];
  tagline: string;
  features: string[];
  process: { title: string; desc: string }[];
  benefits: string[];
  technologies?: string[];
  platforms?: { category: string; items: string[] }[];
}

const servicesData: Record<string, ServiceData> = {
  "branding-and-identity": {
    title: "Branding & Social Media Marketing",
    subtitle: "Turning brands into stories that resonate",
    description: "From crafting your identity to connecting with your audience, we help your brand stand out and engage with compelling storytelling and creative campaigns.",
    rotatingWords: ["Brand Strategy", "Visual Identity", "Social Media", "Content Creation"],
    tagline: "TURNING BRANDS INTO STORIES THAT RESONATE.",
    features: [
      "Logo Design & Visual Identity Systems",
      "Brand Strategy & Positioning",
      "Brand Guidelines & Style Guides",
      "Social Media Planning & Strategy",
      "Content Creation & Execution",
      "Community Management & Engagement",
    ],
    process: [
      { title: "Discovery", desc: "Deep dive into your brand's DNA, audience, and competitive landscape." },
      { title: "Strategy", desc: "Develop positioning, messaging, and visual direction aligned with your goals." },
      { title: "Creation", desc: "Design and refine all brand assets with meticulous attention to detail." },
      { title: "Execution", desc: "Roll out campaigns with comprehensive guidelines and ongoing support." },
    ],
    benefits: ["Stand out in a crowded marketplace", "Build lasting customer recognition and loyalty", "Create consistency across all touchpoints", "Amplify engagement through strategic storytelling"],
  },
  "digital-marketing": {
    title: "Search Engine Optimization",
    subtitle: "Climb the rankings, drive organic growth",
    description: "Our SEO strategies are crafted to boost your visibility, attract high-intent traffic, and improve your online presence. We make search engines work for you!",
    rotatingWords: ["On-Page SEO", "Off-Page SEO", "Keyword Research", "Content Strategy"],
    tagline: "CLIMB THE RANKINGS, DRIVE ORGANIC GROWTH.",
    features: [
      "On-Off Page Optimization",
      "Keyword Research & Strategy",
      "Content Strategy & Optimization",
      "Technical SEO Audits",
      "Link Building & Authority Growth",
      "Analytics & Performance Tracking",
    ],
    process: [
      { title: "Audit", desc: "Comprehensive analysis of your current SEO performance and opportunities." },
      { title: "Strategy", desc: "Custom SEO plan aligned with your business objectives and target keywords." },
      { title: "Execution", desc: "Implement on-page, off-page, and technical optimizations." },
      { title: "Optimization", desc: "Continuous monitoring, testing, and refinement for maximum organic growth." },
    ],
    benefits: ["Increase organic traffic and visibility", "Rank higher for high-intent keywords", "Build sustainable long-term growth", "Data-backed decision making"],
  },
  "web-design-development": {
    title: "Web Design & Development",
    subtitle: "Innovative websites that speak your brand",
    description: "We create stunning, responsive websites that combine design excellence with seamless functionality to engage your audience and drive conversions.",
    rotatingWords: ["Custom Websites", "Responsive Design", "E-commerce", "Web Applications"],
    tagline: "INNOVATIVE WEBSITES THAT SPEAK YOUR BRAND.",
    features: [
      "Custom Website Design & Development",
      "Responsive & Mobile-First Design",
      "E-commerce Store Development",
      "CMS Integration (WordPress, Shopify)",
      "Website Maintenance & Support",
      "Performance Optimization & Speed",
    ],
    process: [
      { title: "Discovery", desc: "Understand your brand, goals, audience, and technical requirements." },
      { title: "Design", desc: "Create wireframes and high-fidelity mockups aligned with your brand." },
      { title: "Development", desc: "Build a fast, secure, responsive website with clean code." },
      { title: "Launch", desc: "Deploy, test, and provide ongoing support and maintenance." },
    ],
    benefits: ["Professional online presence that converts", "Fast-loading, SEO-friendly websites", "Seamless mobile experience", "Easy-to-manage content management system"],
    technologies: ["PHP", "WordPress", "Shopify", "HTML5", "CSS", "JavaScript"],
  },
  "social-google-ads": {
    title: "Social & Google Ads",
    subtitle: "Targeted ads, maximum impact",
    description: "Leverage our data-driven ad strategies to amplify your reach, engage the right audience, and achieve measurable results on social and search platforms.",
    rotatingWords: ["Facebook Ads", "Google Ads", "Instagram Ads", "LinkedIn Ads"],
    tagline: "TARGETED ADS, MAXIMUM IMPACT.",
    features: [
      "Facebook & Instagram Advertising",
      "Google Ads (Search & Display)",
      "LinkedIn Ads for B2B",
      "Bing Ads Management",
      "Retargeting & Remarketing",
      "Campaign Analytics & Reporting",
    ],
    process: [
      { title: "Research", desc: "Audience analysis, competitor research, and platform selection." },
      { title: "Strategy", desc: "Custom ad strategy with targeting, budgets, and creative direction." },
      { title: "Launch", desc: "Create and launch campaigns across social and search platforms." },
      { title: "Optimize", desc: "Continuous A/B testing, bid optimization, and performance scaling." },
    ],
    benefits: ["Maximize return on ad spend", "Reach the right audience at the right time", "Measurable results with detailed reporting", "Scale campaigns efficiently"],
    platforms: [
      { category: "Social Ads", items: ["Facebook Advertising", "Instagram Ads", "LinkedIn Ads"] },
      { category: "Search Ads", items: ["Google Ads", "Bing Ads"] },
    ],
  },
  "ecommerce-solutions": {
    title: "Seller Platforms",
    subtitle: "Empowering sellers to succeed online",
    description: "We streamline your entry into e-commerce with optimized seller platforms, helping you manage and grow your online sales efficiently.",
    rotatingWords: ["Amazon Ads", "Listing Optimization", "Store Setup", "Sales Growth"],
    tagline: "EMPOWERING SELLERS TO SUCCEED ONLINE.",
    features: [
      "Strategy Development & Website Audit",
      "E-Commerce SEO & Listing Optimization",
      "Conversion Rate Optimization",
      "Paid Advertising (Amazon, etc.)",
      "Product Photography & Content",
      "Inventory & Catalog Management",
    ],
    process: [
      { title: "Analysis", desc: "Evaluate your products, audience, and competitive landscape." },
      { title: "Setup", desc: "Create optimized product listings and store configurations." },
      { title: "Marketing", desc: "Launch advertising campaigns and optimize for conversions." },
      { title: "Growth", desc: "Scale with ongoing optimization and performance monitoring." },
    ],
    benefits: ["Streamlined e-commerce entry", "Optimized product listings for conversions", "Data-driven advertising strategies", "Scalable infrastructure for growth"],
  },
  "influencer-marketing": {
    title: "Influencer Marketing",
    subtitle: "Authentic connections through influential voices",
    description: "We bridge your brand with trusted influencers for meaningful campaigns that build credibility, awareness, and drive engagement.",
    rotatingWords: ["Influencer Outreach", "Campaign Strategy", "Content Collaboration", "Brand Partnerships"],
    tagline: "AUTHENTIC CONNECTIONS THROUGH INFLUENTIAL VOICES.",
    features: [
      "Influencer Identification & Outreach",
      "Campaign Strategy & Planning",
      "Content Collaboration & Creation",
      "Captivating Tailored Campaigns",
      "Performance Tracking & Analytics",
      "Long-term Partnership Management",
    ],
    process: [
      { title: "Research", desc: "Identify the right influencers aligned with your brand values." },
      { title: "Strategy", desc: "Develop campaign goals, messaging, and collaboration frameworks." },
      { title: "Execution", desc: "Manage content creation, approvals, and campaign launches." },
      { title: "Analysis", desc: "Track performance, engagement, and ROI across campaigns." },
    ],
    benefits: ["Build brand credibility through trusted voices", "Reach new audiences organically", "Create authentic, engaging content", "Drive measurable engagement and conversions"],
  },
  "creative-content-production": {
    title: "Creative Content Production",
    subtitle: "Sharp visuals and stories that cut through the noise",
    description: "From video production to photography, we create high-quality content that captures attention and drives engagement.",
    rotatingWords: ["Video Production", "Motion Graphics", "Photography", "Animation"],
    tagline: "CONTENT THAT CAPTIVATES AND CONVERTS.",
    features: [
      "Video Production & Editing",
      "Professional Photography",
      "Motion Graphics & Animation",
      "Podcast Production",
      "Live Event Coverage",
      "Post-Production & Color Grading",
    ],
    process: [
      { title: "Concept", desc: "Develop creative concepts that align with your brand and goals." },
      { title: "Pre-Production", desc: "Planning, scripting, storyboarding, and logistics." },
      { title: "Production", desc: "Professional shooting and recording with top-tier equipment." },
      { title: "Post-Production", desc: "Editing, color grading, sound design, and final delivery." },
    ],
    benefits: ["Professional-grade content that elevates your brand", "Engaging stories that connect with audiences", "Multi-platform optimized deliverables", "Consistent visual quality across all media"],
  },
  "content-creation": {
    title: "Content Creation",
    subtitle: "Engaging content that builds authority and drives action",
    description: "Content is the backbone of digital success. We create compelling written and visual content that converts.",
    rotatingWords: ["Blog Strategy", "Social Content", "Copywriting", "Infographics"],
    tagline: "CONTENT THAT BUILDS AUTHORITY.",
    features: [
      "Blog Posts & Articles",
      "Social Media Content",
      "Copywriting & Ad Copy",
      "Infographics & Visual Content",
      "Whitepapers & Case Studies",
      "Newsletter & Email Content",
    ],
    process: [
      { title: "Research", desc: "Deep audience research and content gap analysis." },
      { title: "Planning", desc: "Editorial calendar and content strategy development." },
      { title: "Creation", desc: "Expert writers and designers craft your content." },
      { title: "Distribution", desc: "Strategic publishing and promotion across channels." },
    ],
    benefits: ["Establish thought leadership in your industry", "Improve search engine rankings", "Nurture leads through the sales funnel", "Build a loyal, engaged community"],
  },
  "ux-ui-design": {
    title: "UX/UI Design",
    subtitle: "Interfaces that delight users and drive engagement",
    description: "Great design is invisible — it just works. We create intuitive, beautiful interfaces that users love.",
    rotatingWords: ["User Research", "Wireframing", "Visual Design", "Prototyping"],
    tagline: "DESIGN THAT DELIGHTS.",
    features: [
      "User Research & Persona Development",
      "Wireframing & Prototyping",
      "Visual UI Design",
      "Design System Creation",
      "Usability Testing",
      "Responsive & Accessible Design",
    ],
    process: [
      { title: "Research", desc: "Understand users, their needs, pain points, and behaviors." },
      { title: "Ideation", desc: "Wireframes and prototypes to explore solutions." },
      { title: "Design", desc: "High-fidelity designs with attention to every detail." },
      { title: "Validation", desc: "User testing and iteration to ensure optimal experience." },
    ],
    benefits: ["Increase user satisfaction and retention", "Reduce development costs with validated designs", "Improve accessibility and reach", "Create a competitive advantage through superior UX"],
  },
  "generative-ai": {
    title: "Generative AI",
    subtitle: "Creative intelligence that builds, writes and designs",
    description: "We design and deploy generative AI solutions — from custom LLM apps and chatbots to image, video, and content generation pipelines that unlock new product experiences.",
    rotatingWords: ["LLM Apps", "Chatbots", "RAG Systems", "AI Agents"],
    tagline: "CREATIVE INTELLIGENCE, ON DEMAND.",
    features: [
      "Custom LLM Application Development",
      "RAG & Knowledge Base Systems",
      "AI Chatbots & Virtual Assistants",
      "Image, Video & Audio Generation",
      "Prompt Engineering & Fine-tuning",
      "AI Agent Workflows & Automation",
    ],
    process: [
      { title: "Discovery", desc: "Identify high-impact generative AI use cases for your business." },
      { title: "Design", desc: "Architect prompts, models, and data pipelines for quality outputs." },
      { title: "Build", desc: "Develop, fine-tune, and integrate models into your products." },
      { title: "Scale", desc: "Monitor, evaluate, and optimize for cost, quality, and safety." },
    ],
    benefits: ["Ship AI features faster", "Reduce content production costs", "Personalize at scale", "Stay ahead with cutting-edge models"],
    technologies: ["OpenAI", "Anthropic", "LangChain", "LlamaIndex", "Pinecone", "Hugging Face"],
  },
  "ai-development": {
    title: "AI Development",
    subtitle: "End-to-end AI products engineered for production",
    description: "We build production-grade AI systems — predictive models, intelligent automation, and AI-powered features integrated deep into your product stack.",
    rotatingWords: ["AI Strategy", "Model Development", "MLOps", "AI Integration"],
    tagline: "AI THAT SHIPS, NOT JUST DEMOS.",
    features: [
      "AI Strategy & Roadmapping",
      "Custom Model Development",
      "AI API & Backend Integration",
      "MLOps & Model Deployment",
      "Computer Vision Solutions",
      "Natural Language Processing",
    ],
    process: [
      { title: "Audit", desc: "Map data, infrastructure, and product opportunities for AI." },
      { title: "Prototype", desc: "Validate models against real-world performance and business metrics." },
      { title: "Productionize", desc: "Deploy resilient, observable AI services at scale." },
      { title: "Iterate", desc: "Continuously retrain and improve with real usage data." },
    ],
    benefits: ["Production-ready AI, not POCs", "Lower operational costs through automation", "Smarter products and decisions", "Future-proof technology stack"],
    technologies: ["Python", "PyTorch", "TensorFlow", "FastAPI", "Docker", "AWS"],
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    subtitle: "Native-quality apps for iOS, Android and beyond",
    description: "We design and engineer mobile apps people love — from MVPs to enterprise-grade products, with smooth performance and beautiful UX across every device.",
    rotatingWords: ["iOS Apps", "Android Apps", "React Native", "Flutter"],
    tagline: "APPS PEOPLE OPEN EVERY DAY.",
    features: [
      "Native iOS & Android Development",
      "Cross-platform (React Native, Flutter)",
      "UX/UI Design for Mobile",
      "API & Backend Integration",
      "App Store Deployment & ASO",
      "Maintenance, Analytics & Updates",
    ],
    process: [
      { title: "Discovery", desc: "Define users, features, and platform strategy." },
      { title: "Design", desc: "Craft intuitive flows and pixel-perfect mobile UI." },
      { title: "Build", desc: "Engineer fast, reliable apps with clean architecture." },
      { title: "Launch", desc: "Ship to stores, monitor performance, and iterate." },
    ],
    benefits: ["Reach users on their primary device", "Premium UX that drives retention", "Fast time-to-market with cross-platform", "Scalable architecture for growth"],
    technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "GraphQL"],
  },
  "machine-learning": {
    title: "Machine Learning",
    subtitle: "Data-driven models that power smarter decisions",
    description: "From predictive analytics to recommendation engines, we build ML systems that turn raw data into measurable business outcomes.",
    rotatingWords: ["Predictive Models", "Recommendation", "Forecasting", "Classification"],
    tagline: "MODELS THAT MOVE METRICS.",
    features: [
      "Predictive Modeling & Forecasting",
      "Recommendation Systems",
      "Classification & Clustering",
      "Anomaly Detection",
      "Feature Engineering Pipelines",
      "Model Monitoring & Retraining",
    ],
    process: [
      { title: "Data", desc: "Audit data sources, quality, and labeling requirements." },
      { title: "Model", desc: "Train, evaluate, and compare candidate algorithms." },
      { title: "Deploy", desc: "Ship models behind APIs with monitoring and rollback." },
      { title: "Improve", desc: "Continuous retraining on fresh data for sustained accuracy." },
    ],
    benefits: ["Smarter automated decisions", "Higher conversion through personalization", "Reduced risk via early anomaly detection", "Continuous improvement loop"],
    technologies: ["Python", "scikit-learn", "PyTorch", "XGBoost", "MLflow", "Airflow"],
  },
  "data-analytics": {
    title: "Data Analytics",
    subtitle: "Turn raw data into clear, actionable insight",
    description: "We design dashboards, pipelines and analytics platforms that make your data understandable, trustworthy and useful for every team.",
    rotatingWords: ["Dashboards", "Data Pipelines", "BI", "Reporting"],
    tagline: "DECISIONS, POWERED BY DATA.",
    features: [
      "BI Dashboards & Visualization",
      "ETL / ELT Data Pipelines",
      "Data Warehousing",
      "Product & Marketing Analytics",
      "Custom Reporting Automation",
      "Data Governance & Quality",
    ],
    process: [
      { title: "Assess", desc: "Map data sources, stakeholders, and key questions." },
      { title: "Model", desc: "Design warehouse schemas and transformation logic." },
      { title: "Visualize", desc: "Build dashboards tailored to each team's workflow." },
      { title: "Activate", desc: "Embed insights into daily operations and decisions." },
    ],
    benefits: ["Single source of truth", "Faster, more confident decisions", "Self-serve analytics for every team", "Measurable ROI on data investments"],
    technologies: ["Snowflake", "BigQuery", "dbt", "Looker", "Power BI", "Tableau"],
  },
  "web3-development": {
    title: "Web3 Development",
    subtitle: "Smart contracts, dApps and on-chain experiences",
    description: "We build secure, scalable Web3 products — from smart contracts and tokens to fully featured dApps and NFT platforms.",
    rotatingWords: ["Smart Contracts", "dApps", "NFTs", "DeFi"],
    tagline: "ENGINEERING THE DECENTRALIZED FUTURE.",
    features: [
      "Smart Contract Development & Audits",
      "Decentralized App (dApp) Development",
      "NFT Marketplaces & Minting Platforms",
      "DeFi Protocols & Integrations",
      "Token Design & Tokenomics",
      "Wallet & Web3 Integrations",
    ],
    process: [
      { title: "Architect", desc: "Design protocols, contracts, and on-chain data flows." },
      { title: "Develop", desc: "Implement secure smart contracts and front-end dApps." },
      { title: "Audit", desc: "Rigorous testing and security review before launch." },
      { title: "Launch", desc: "Deploy on chain, monitor, and iterate with the community." },
    ],
    benefits: ["Trustless, transparent products", "New revenue and ownership models", "Global, permissionless reach", "Security-first engineering"],
    technologies: ["Solidity", "Ethereum", "Polygon", "Hardhat", "Ethers.js", "IPFS"],
  },
  "digital-transformation": {
    title: "Digital Transformation",
    subtitle: "Modernize operations, unlock new growth",
    description: "We help organizations re-imagine processes, platforms and customer experiences — combining strategy, design and engineering to drive lasting change.",
    rotatingWords: ["Strategy", "Modernization", "Automation", "Cloud"],
    tagline: "TRANSFORMATION THAT STICKS.",
    features: [
      "Digital Strategy & Roadmaps",
      "Legacy System Modernization",
      "Cloud Migration & DevOps",
      "Process Automation",
      "Customer Experience Redesign",
      "Change Management Enablement",
    ],
    process: [
      { title: "Diagnose", desc: "Assess current state, gaps, and transformation priorities." },
      { title: "Design", desc: "Define target architecture, journeys, and operating model." },
      { title: "Deliver", desc: "Implement in agile waves with measurable milestones." },
      { title: "Embed", desc: "Train teams and institutionalize new ways of working." },
    ],
    benefits: ["Lower operational costs", "Faster product and service delivery", "Better customer experience", "Future-ready organization"],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Zapier"],
  },
  "video-production": {
    title: "Video Production",
    subtitle: "Cinematic stories that stop the scroll",
    description: "From concept to final cut, we craft high-impact videos — brand films, product reels, ad creatives, and social edits — engineered to convert.",
    rotatingWords: ["Brand Films", "Ad Creatives", "Product Reels", "Motion Graphics"],
    tagline: "CINEMATIC STORIES THAT STOP THE SCROLL.",
    features: [
      "Brand Films & Corporate Videos",
      "Social Media Reels & Shorts",
      "Product & Explainer Videos",
      "Ad Creatives for Meta & YouTube",
      "Motion Graphics & Animation",
      "Post-Production & Color Grading",
    ],
    process: [
      { title: "Concept", desc: "Story development, script, and storyboards tuned to your goals." },
      { title: "Pre-Production", desc: "Talent, locations, gear, and shot lists locked in." },
      { title: "Production", desc: "Directed shoots with cinematic cameras and lighting." },
      { title: "Post", desc: "Editing, VFX, sound design, and color to deliver a polished final." },
    ],
    benefits: ["Higher engagement across social platforms", "Stronger brand recall", "Purpose-built creatives per channel", "Assets you can reuse for months"],
    technologies: ["RED", "Sony FX", "DaVinci Resolve", "Premiere Pro", "After Effects", "Cinema 4D"],
  },
  "email-marketing": {
    title: "Email & CRM Marketing",
    subtitle: "Inboxes that actually convert",
    description: "Lifecycle campaigns, automation flows, and CRM strategy that turn subscribers into repeat customers — without spamming your list.",
    rotatingWords: ["Automation", "Lifecycle Flows", "Newsletters", "Retention"],
    tagline: "INBOXES THAT ACTUALLY CONVERT.",
    features: [
      "Lifecycle & Drip Automation",
      "Newsletter Design & Copywriting",
      "Segmentation & Personalization",
      "Klaviyo / Mailchimp / HubSpot Setup",
      "A/B Testing & Deliverability",
      "CRM Strategy & Reporting",
    ],
    process: [
      { title: "Audit", desc: "Review list health, current flows, and open/click baselines." },
      { title: "Strategy", desc: "Map segments, journeys, and campaign calendar." },
      { title: "Build", desc: "Design templates, wire automations, and set up tracking." },
      { title: "Optimize", desc: "A/B test subject lines, timing, and content to lift revenue." },
    ],
    benefits: ["Higher repeat purchase rates", "Predictable retention revenue", "Cleaner, healthier lists", "Owned channel — no algorithm risk"],
    technologies: ["Klaviyo", "Mailchimp", "HubSpot", "Brevo", "ActiveCampaign", "Customer.io"],
  },
  "public-relations": {
    title: "Public Relations & Outreach",
    subtitle: "Get your brand in the right conversations",
    description: "Strategic PR, media outreach, and thought-leadership placements that build credibility and put your brand in front of the audiences that matter.",
    rotatingWords: ["Media Relations", "Press Releases", "Thought Leadership", "Crisis Comms"],
    tagline: "GET YOUR BRAND IN THE RIGHT CONVERSATIONS.",
    features: [
      "Media Relations & Press Outreach",
      "Press Release Writing & Distribution",
      "Founder & Executive Thought Leadership",
      "Podcast & Interview Bookings",
      "Crisis Communication",
      "Reputation Management",
    ],
    process: [
      { title: "Positioning", desc: "Clarify the narrative, angles, and target publications." },
      { title: "Outreach", desc: "Pitch journalists, editors, and podcast hosts on your beat." },
      { title: "Coverage", desc: "Secure placements across tier-1 and niche outlets." },
      { title: "Amplify", desc: "Repurpose coverage across social, sales, and site." },
    ],
    benefits: ["Authoritative third-party validation", "Placements in outlets your buyers read", "Stronger founder profile", "Long-lived SEO backlinks"],
  },
};

const allServices = [
  { name: "Branding & Social Media", path: "/services/branding-and-identity" },
  { name: "Search Engine Optimization", path: "/services/digital-marketing" },
  { name: "Web Design & Development", path: "/services/web-design-development" },
  { name: "Social & Google Ads", path: "/services/social-google-ads" },
  { name: "Seller Platforms", path: "/services/ecommerce-solutions" },
  { name: "Influencer Marketing", path: "/services/influencer-marketing" },
  { name: "Creative Content Production", path: "/services/creative-content-production" },
  { name: "Content Creation", path: "/services/content-creation" },
  { name: "UX/UI Design", path: "/services/ux-ui-design" },
  { name: "Generative AI", path: "/services/generative-ai" },
  { name: "AI Development", path: "/services/ai-development" },
  { name: "Mobile App Development", path: "/services/mobile-app-development" },
  { name: "Machine Learning", path: "/services/machine-learning" },
  { name: "Data Analytics", path: "/services/data-analytics" },
  { name: "Web3 Development", path: "/services/web3-development" },
  { name: "Digital Transformation", path: "/services/digital-transformation" },
  { name: "Video Production", path: "/services/video-production" },
  { name: "Email Marketing", path: "/services/email-marketing" },
  { name: "Public Relations", path: "/services/public-relations" },
];

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <Layout>
        <section className="bg-surface-dark py-32 text-center">
          <div className="container mx-auto px-6">
            <h1 className="font-display text-4xl font-bold text-surface-dark-foreground">Service not found</h1>
            <Link to="/" className="mt-6 inline-flex text-primary hover:underline">Go home</Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <HeroSlider
        label="OUR SERVICES"
        title={`${service.title} —`}
        rotatingWords={service.rotatingWords}
        description={service.description}
        ctaText="Get Started"
        ctaLink="/contact"
        backgroundImage={heroServices}
      />

      {/* Tagline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="t-h1 text-gradient-orange">{service.tagline}</h2>
          <p className="t-body-lg text-muted-foreground mt-6 max-w-2xl mx-auto">{service.description}</p>
        </div>
      </section>

      {/* Technologies (if applicable) */}
      {service.technologies && (
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-6">
            <p className="section-label text-center mb-6">TECHNOLOGIES</p>
            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, i) => (
                <span key={i} className="px-6 py-3 rounded-full border border-border t-card-title hover:border-primary/40 hover:text-primary transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Platforms (if applicable) */}
      {service.platforms && (
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-6">
            {service.platforms.map((p, i) => (
              <div key={i} className="mb-6 last:mb-0">
                <p className="section-label text-center mb-4">{p.category.toUpperCase()}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  {p.items.map((item, j) => (
                    <span key={j} className="px-6 py-3 rounded-full border border-border t-card-title hover:border-primary/40 hover:text-primary transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">WHAT WE OFFER</p>
          <h2 className="t-h2 mb-14 max-w-3xl">
            Our <span className="text-gradient-orange">{service.title}</span> services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: 1200 }}>
            {service.features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <TiltCard className="group h-full rounded-2xl" intensity={10} radar>
                  <div className="flex items-start gap-3 p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300 h-full shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] group-hover:shadow-[0_25px_50px_-15px_hsl(24,95%,53%,0.3)]">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="t-card-title">{f}</span>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">OUR PROCESS</p>
          <h2 className="t-h2 mb-16 max-w-3xl">How we <span className="text-gradient-orange">deliver results</span></h2>
          <div className="grid md:grid-cols-4 gap-10">
            {service.process.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div>
                  <span className="t-numeral text-primary/15">0{i + 1}</span>
                  <h3 className="t-h3 mt-3 mb-3">{p.title}</h3>
                  <p className="t-body text-muted-foreground">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-surface-dark">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">BENEFITS</p>
          <h2 className="t-h2 text-surface-dark-foreground mb-14 max-w-3xl">
            Why choose our <span className="text-gradient-orange">{service.title}</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6" style={{ perspective: 1200 }}>
            {service.benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <TiltCard className="group h-full" intensity={8}>
                  <div className="flex items-center gap-4 p-6 rounded-2xl border border-surface-dark-foreground/10 bg-surface-dark/40 h-full transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_20px_50px_-15px_hsl(24,95%,53%,0.4)]">
                    <div className="w-11 h-11 rounded-full bg-gradient-orange flex items-center justify-center shrink-0 font-display font-bold text-primary-foreground text-lg">
                      {i + 1}
                    </div>
                    <span className="t-card-title text-surface-dark-foreground">{b}</span>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">EXPLORE MORE</p>
          <h2 className="t-h2 mb-14 max-w-3xl">Other <span className="text-gradient-orange">services</span></h2>
          <div className="grid md:grid-cols-3 gap-4" style={{ perspective: 1200 }}>
            {allServices.filter(s => s.path !== `/services/${slug}`).map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <TiltCard className="group h-full rounded-2xl" intensity={8} radar>
                  <Link to={s.path} className="flex items-center justify-between p-6 rounded-2xl border border-border bg-card transition-all duration-300 h-full group-hover:border-primary/50 group-hover:shadow-[0_20px_50px_-15px_hsl(24,95%,53%,0.3)]">
                    <span className="t-card-title">{s.name}</span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;
