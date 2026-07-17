import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glow?: boolean;
  radar?: boolean;
}

const TiltCard = ({ children, className = "", intensity = 14, glow = true, radar = false }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-intensity, intensity]);
  const glowX = useTransform(sx, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(sy, [-0.5, 0.5], ["0%", "100%"]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };

  const handleEnter = () => setHovering(true);
  const handleLeave = () => {
    x.set(0);
    y.set(0);
    setHovering(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.03, z: 30 }}
      transition={{ scale: { duration: 0.3 } }}
      className={`relative ${className}`}
    >
      {glow && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [glowX, glowY] as never,
              ([gx, gy]: string[]) =>
                `radial-gradient(420px circle at ${gx} ${gy}, hsl(24 95% 53% / 0.18), transparent 60%)`
            ),
          }}
        />
      )}

      <div style={{ transform: "translateZ(40px)" }} className="relative h-full w-full">
        {children}

        {/* Coyote Radar highlight overlay */}
        {radar && (
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">

            {/* Concentric radar rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-[60%] h-[60%] rounded-full border border-primary/10" />
              <div className="absolute w-[40%] h-[40%] rounded-full border border-primary/10" />
              <div className="absolute w-[20%] h-[20%] rounded-full border border-primary/15" />
            </div>

            {/* Corner sweep marks */}
            <div className="absolute inset-0 opacity-30" style={{
              background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, hsl(24 95% 53% / 0.03) 60deg, transparent 120deg, transparent 180deg, hsl(24 95% 53% / 0.03) 240deg, transparent 300deg, transparent 360deg)`
            }} />

            {/* Subtle pulse at center */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-primary/40 -translate-x-1/2 -translate-y-1/2"
              animate={hovering ? { scale: [1, 2.5, 1], opacity: [0.6, 0.2, 0.6] } : { scale: 1, opacity: 0.6 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );

};

export default TiltCard;

