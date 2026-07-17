import React, { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import ThreeBackground from "@/components/ThreeBackground";
import { Link } from "react-router-dom";
import { ArrowUpRight, Zap, Target, Star, Globe } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = [
  { title: "Digital Branding", desc: "Award-winning identity design that captures attention.", icon: Star },
  { title: "3D Web Experiences", desc: "Immersive websites built with WebGL and React Three Fiber.", icon: Globe },
  { title: "Performance Marketing", desc: "Data-driven campaigns to maximize ROI and reach.", icon: Target },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Scroll Animations
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.fromTo(".hero-title span", 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power4.out", delay: 0.2 }
      );
      gsap.fromTo(".hero-subtitle", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.8 }
      );

      // Scroll Trigger Animations for sections
      const sections = [aboutRef.current, servicesRef.current, contactRef.current];
      sections.forEach((sec) => {
        if (sec) {
          gsap.fromTo(sec.querySelectorAll(".reveal"),
            { y: 50, opacity: 0 },
            {
              y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 80%",
              }
            }
          );
        }
      });
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <Layout>
      <ThreeBackground />
      
      {/* Overlay Content */}
      <div className="relative z-10 w-full">
        
        {/* HERO SECTION */}
        <section ref={heroRef} className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
          <div className="max-w-5xl mx-auto overflow-hidden">
            <h1 className="hero-title font-display text-5xl md:text-8xl font-bold tracking-tighter leading-tight text-white mb-6">
              <span className="block">DESIGNING THE</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">FUTURE OF DIGITAL</span>
            </h1>
          </div>
          <p className="hero-subtitle max-w-2xl text-lg md:text-xl text-white/70 font-body mb-10">
            Award-winning premium web experiences crafted with 3D technologies, smooth animations, and cinematic aesthetics.
          </p>
          <Link to="/contact" className="hero-subtitle group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white font-semibold hover:bg-white hover:text-black transition-all duration-300">
            Start a Project
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </Link>
        </section>

        {/* ABOUT SECTION */}
        <section ref={aboutRef} className="min-h-screen flex items-center py-24 bg-black/40 backdrop-blur-sm border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <p className="text-blue-500 font-display tracking-[0.2em] uppercase text-sm mb-4 font-semibold">About Us</p>
                <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
                  We create <span className="text-purple-500 italic">immersive</span> digital realities.
                </h2>
                <p className="text-white/70 text-lg leading-relaxed font-body mb-8">
                  Pushing the boundaries of what is possible on the web. Our team blends cutting-edge WebGL, sophisticated design, and precise engineering to deliver websites that don't just function—they leave a lasting impression.
                </p>
                <div className="flex gap-12">
                  <div>
                    <h4 className="text-4xl font-display font-bold text-white mb-2">50+</h4>
                    <p className="text-white/50 text-sm">Global Awards</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-display font-bold text-white mb-2">100%</h4>
                    <p className="text-white/50 text-sm">Client Satisfaction</p>
                  </div>
                </div>
              </div>
              <div className="reveal relative h-[500px] w-full rounded-2xl overflow-hidden glass-panel border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]"></div>
                 {/* Abstract representation, could be an image or video */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="w-32 h-32 text-white/20 animate-pulse" />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section ref={servicesRef} className="min-h-screen flex items-center py-24">
          <div className="container mx-auto px-6">
            <div className="reveal text-center max-w-3xl mx-auto mb-20">
              <p className="text-purple-500 font-display tracking-[0.2em] uppercase text-sm mb-4 font-semibold">Expertise</p>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
                Our Digital Services
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {Services.map((service, idx) => (
                <div key={idx} className="reveal group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 overflow-hidden hover:from-blue-500/50 hover:to-purple-500/50 transition-colors duration-500">
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-xl -z-10 m-[1px] rounded-2xl"></div>
                  <div className="p-10 h-full flex flex-col justify-between">
                    <div>
                      <service.icon className="w-12 h-12 text-blue-500 mb-8 group-hover:scale-110 transition-transform duration-500" />
                      <h3 className="text-2xl font-display font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-white/60 font-body leading-relaxed">{service.desc}</p>
                    </div>
                    <div className="mt-8 flex justify-end">
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section ref={contactRef} className="py-32 bg-black/80 backdrop-blur-lg border-t border-white/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="reveal font-display text-5xl md:text-7xl font-bold text-white mb-8">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">innovate?</span>
            </h2>
            <p className="reveal text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Let's create something extraordinary together. Reach out to discuss your next big project.
            </p>
            <Link to="/contact" className="reveal inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-display font-bold text-lg hover:scale-105 transition-transform duration-300">
              Get in Touch <ArrowUpRight className="w-6 h-6" />
            </Link>
          </div>
        </section>
        
      </div>
    </Layout>
  );
};

export default Index;
