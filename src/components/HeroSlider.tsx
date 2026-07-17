import { useState, useEffect, forwardRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

interface HeroSliderProps {
  label: string;
  title: string;
  rotatingWords: string[];
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

const HeroSlider = forwardRef<HTMLElement, HeroSliderProps>(({
  label,
  title,
  rotatingWords,
  description,
  ctaText,
  ctaLink,
  backgroundImage,
}, ref) => {
  const [currentWord, setCurrentWord] = useState(0);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 160]);
  const contentY = useTransform(scrollY, [0, 600], [0, -60]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const gridY = useTransform(scrollY, [0, 600], [0, -80]);

  useEffect(() => {
    const id = setInterval(() => setCurrentWord((p) => (p + 1) % rotatingWords.length), 3000);
    return () => clearInterval(id);
  }, [rotatingWords.length]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100vh] flex items-center overflow-hidden noise-overlay"
    >
      {/* Parallax photo */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url(${backgroundImage})`, y: bgY }}
      />
      {/* Depth overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/70 via-surface-dark/85 to-surface-dark" />

      {/* 3D perspective grid floor */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[70%] bg-grid-perspective opacity-70"
        style={{ y: gridY }}
      />

      {/* Glow orbs */}
      <div className="orb orb-primary w-[520px] h-[520px] -top-40 -left-32 animate-float-y" />
      <div className="orb orb-warm w-[460px] h-[460px] -bottom-40 -right-24 animate-drift-x" style={{ animationDelay: "-4s" }} />
      <div className="orb orb-primary w-[240px] h-[240px] top-1/3 right-1/4 opacity-30" />

      {/* Content */}
      <motion.div
        className="container mx-auto px-6 relative z-10 text-center"
        style={{ y: contentY, opacity }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary/40 bg-primary/10 backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-primary-foreground/90">
              {label}
            </span>
          </motion.div>

          <motion.h1
            className="font-display font-bold text-primary-foreground leading-[1.05] tracking-[-0.03em] text-balance text-4xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ textShadow: "0 6px 30px hsl(0 0% 0% / 0.5)" }}
          >
            {title}{" "}
            <span className="relative inline-block align-baseline">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[currentWord]}
                  className="inline-block numeral-3d"
                  initial={{ opacity: 0, y: 20, rotateX: -30 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: 30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {rotatingWords[currentWord]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            className="mt-8 text-primary-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <Link to={ctaLink} className="btn-3d text-base">
              {ctaText} <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              to="/clients"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-primary-foreground/25 text-primary-foreground/90 backdrop-blur hover:bg-primary-foreground/10 transition"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
});

HeroSlider.displayName = "HeroSlider";
export default HeroSlider;
