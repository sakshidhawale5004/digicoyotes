import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import WebGLHero from "@/components/WebGLHero";
import TiltCard from "@/components/TiltCard";
import { Link } from "react-router-dom";
import { BarChart3, Clock, ShieldCheck, Zap, Server, Lock } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Basic reveal animations for sections
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((elem) => {
        gsap.fromTo(elem, 
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 85%",
            }
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden bg-surface-dark">
        <WebGLHero imageSrc={heroHome} />
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="inline-block border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
            <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase">Digital Agency</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6 max-w-4xl mx-auto">
            Innovative solutions for <span className="text-gradient-orange">Brand Strategy</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body">
            At True Digital Coyotes, we don't just follow the trail—we blaze it. We craft high-impact digital experiences that help your brand lead the pack.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Link to="/contact" className="px-8 py-4 rounded-full bg-gradient-orange text-white font-semibold hover:opacity-90 transition-opacity">
              Get in Touch
            </Link>
            <Link to="/about" className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* WHY RUN WITH US */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <p className="section-label mb-4">WHY CHOOSE US</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Why Run With <span className="text-gradient-orange">The Digital Coyotes?</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Our dedicated team is committed to understanding your unique needs, ensuring innovative strategies that drive results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TiltCard>
              <div className="p-8 h-full bg-card border border-border rounded-2xl flex flex-col items-center text-center shadow-sm">
                <div className="w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="font-display font-bold text-xl mb-4">Data-Driven Hunting</h3>
                <p className="text-muted-foreground">We use cold, hard data to inform every move, ensuring your budget is never wasted.</p>
              </div>
            </TiltCard>
            <TiltCard>
              <div className="p-8 h-full bg-card border border-border rounded-2xl flex flex-col items-center text-center shadow-sm">
                <div className="w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="font-display font-bold text-xl mb-4">Lean & Agile Pricing</h3>
                <p className="text-muted-foreground">Get top-tier agency results without the bloated corporate overhead.</p>
              </div>
            </TiltCard>
            <TiltCard>
              <div className="p-8 h-full bg-card border border-border rounded-2xl flex flex-col items-center text-center shadow-sm">
                <div className="w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="font-display font-bold text-xl mb-4">Pack Integrity</h3>
                <p className="text-muted-foreground">We maintain the highest level of transparency and ethics in every partnership.</p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* PROVEN PROCESS */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 reveal">
          <p className="section-label mb-2 text-center">HOW IT WORKS</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">
            Our proven process for <span className="text-gradient-orange">achieving success</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <span className="font-display text-6xl font-extrabold text-orange-500/20 mb-4 block">01</span>
              <h3 className="font-display font-bold text-xl mb-3">The Scout (Discovery)</h3>
              <p className="text-muted-foreground leading-relaxed">We analyze your brand, your rivals, and your terrain to find the best path forward.</p>
            </div>
            <div>
              <span className="font-display text-6xl font-extrabold text-orange-500/20 mb-4 block">02</span>
              <h3 className="font-display font-bold text-xl mb-3">The Hunt (Implementation)</h3>
              <p className="text-muted-foreground leading-relaxed">Our team deploys custom blueprints across web and social to capture your market.</p>
            </div>
            <div>
              <span className="font-display text-6xl font-extrabold text-orange-500/20 mb-4 block">03</span>
              <h3 className="font-display font-bold text-xl mb-3">Collaboration</h3>
              <p className="text-muted-foreground leading-relaxed">We monitor, optimize, and scale your brand to ensure you stay ahead of the competition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INNOVATIVE FEATURES */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 reveal">
          <p className="section-label mb-2 text-center">FEATURES</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">
            Innovative features for your <span className="text-gradient-orange">digital success</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-surface-dark p-10 rounded-2xl text-white relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Custom Branding Solutions</h3>
              <p className="text-white/60 leading-relaxed">Unique brand identity development, including logos, color palettes, and visual systems designed to make your brand unforgettable.</p>
            </div>
            <div className="bg-surface-dark p-10 rounded-2xl text-white relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Data-Driven Digital Marketing</h3>
              <p className="text-white/60 leading-relaxed">Strategies combining SEO, PPC, content marketing, and analytics to drive measurable growth and maximize your ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVER THE BENEFITS */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 reveal">
          <p className="section-label mb-2">KEY BENEFITS</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">
            Discover the benefits of <span className="text-gradient-orange">choosing us today</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className="font-display text-4xl font-extrabold text-orange-500/30 mb-2 block">01</span>
              <h4 className="font-display font-bold text-lg mb-2">Personalized Approach</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">We customize strategies to fit your brand's specific needs, ensuring alignment.</p>
            </div>
            <div>
              <span className="font-display text-4xl font-extrabold text-orange-500/30 mb-2 block">02</span>
              <h4 className="font-display font-bold text-lg mb-2">Experienced Team</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">8+ years of industry knowledge and creativity to deliver exceptional results.</p>
            </div>
            <div>
              <span className="font-display text-4xl font-extrabold text-orange-500/30 mb-2 block">03</span>
              <h4 className="font-display font-bold text-lg mb-2">Data-Driven Decisions</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">We utilize data insights to refine strategies, optimize and ensure impactful results.</p>
            </div>
            <div>
              <span className="font-display text-4xl font-extrabold text-orange-500/30 mb-2 block">04</span>
              <h4 className="font-display font-bold text-lg mb-2">Ongoing Support</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">We provide continuous support and maintenance to keep your digital assets at their best.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 reveal">
          <p className="section-label mb-2 text-center">TESTIMONIALS</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-16">
            Read what they have to say about <span className="text-gradient-orange">working with us</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 border border-border rounded-2xl bg-card shadow-sm">
              <div className="flex text-orange-500 mb-4">
                {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                "Digital Coyotes transformed our entire online presence. Their SEO strategies increased our organic traffic by 300% in just 6 months. Truly a pack that delivers!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">SS</div>
                <div>
                  <p className="font-bold font-display text-sm">Suraj Sharma</p>
                  <p className="text-xs text-muted-foreground">CEO, TechCore Solutions</p>
                </div>
              </div>
            </div>
            <div className="p-8 border border-border rounded-2xl bg-card shadow-sm">
              <div className="flex text-orange-500 mb-4">
                {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                "Working with Suraj and his team was a game-changer. They understood our brand vision perfectly and delivered a website that exceeded all expectations. Highly recommended!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">PV</div>
                <div>
                  <p className="font-bold font-display text-sm">Priya Verma</p>
                  <p className="text-xs text-muted-foreground">Director, Luxe Boutiques</p>
                </div>
              </div>
            </div>
            <div className="p-8 border border-border rounded-2xl bg-card shadow-sm">
              <div className="flex text-orange-500 mb-4">
                {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                "The team's creativity and attention to detail is unmatched. They managed our social media presence across 5 platforms and our engagement grew by 250%."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">AP</div>
                <div>
                  <p className="font-bold font-display text-sm">Amit Patel</p>
                  <p className="text-xs text-muted-foreground">Founder, Innovate Digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-24 bg-surface-dark text-white">
        <div className="container mx-auto px-6 text-center reveal">
          <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">OUR RESULTS</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Real campaign <span className="text-gradient-orange">performance metrics</span></h2>
          <p className="text-white/60 mb-16 max-w-2xl mx-auto">Data-driven results from our recent ad campaigns across search and social platforms.</p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { num: "88", label: "Leads Generated", sub: "Verified" },
              { num: "290", label: "Messaging Conversations", sub: "High intent prospects" },
              { num: "56,270", label: "Impressions", sub: "Across platforms" },
              { num: "185.00", label: "Reach", sub: "Maximum exposure" },
              { num: "1,677", label: "Unique Clicks", sub: "High CTR" },
              { num: "3.29", label: "Frequency", sub: "Optimal repetition" }
            ].map((metric, idx) => (
              <div key={idx} className="bg-black/40 border border-orange-500/20 rounded-xl p-6 min-w-[160px] flex-1 max-w-[200px] shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                <h3 className="font-display text-4xl font-bold text-orange-500 mb-2">{metric.num}</h3>
                <p className="text-sm font-semibold text-white/90">{metric.label}</p>
                <p className="text-xs text-white/40 mt-1">{metric.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM ICONS */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-6 reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Zap className="w-6 h-6 text-orange-500 mb-3" />
              <h4 className="font-bold text-sm mb-1">Lean Operations</h4>
              <p className="text-xs text-muted-foreground">High efficiency strategies</p>
            </div>
            <div className="flex flex-col items-center">
              <Server className="w-6 h-6 text-orange-500 mb-3" />
              <h4 className="font-bold text-sm mb-1">Open Integration</h4>
              <p className="text-xs text-muted-foreground">Seamless connection</p>
            </div>
            <div className="flex flex-col items-center">
              <Lock className="w-6 h-6 text-orange-500 mb-3" />
              <h4 className="font-bold text-sm mb-1">Secure Security</h4>
              <p className="text-xs text-muted-foreground">Enterprise-grade protection</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-6 h-6 text-orange-500 mb-3" />
              <h4 className="font-bold text-sm mb-1">24/7 Vigilance</h4>
              <p className="text-xs text-muted-foreground">Constant monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 bg-surface-dark text-center">
        <div className="container mx-auto px-6 reveal">
          <p className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-6">LET'S COLLABORATE</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-10 max-w-3xl mx-auto uppercase">
            Ready to lead the pack? <span className="text-gradient-orange">Let's collaborate.</span>
          </h2>
          <Link to="/contact" className="inline-flex px-10 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-colors uppercase tracking-wider text-sm">
            Let's Start
          </Link>
        </div>
      </section>

    </Layout>
  );
};

export default Index;
