import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";

// Reusable 3D tilt card wrapper
export const TiltCard = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      whileHover={{ scale: 1.02 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Floating gradient orbs for section backgrounds
export const FloatingOrbs = ({ colors = ["hsl(var(--primary) / 0.08)", "hsl(var(--gold) / 0.06)"] }: { colors?: string[] }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {colors.map((color, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: `${250 + i * 100}px`,
          height: `${250 + i * 100}px`,
          background: `radial-gradient(circle, ${color}, transparent 70%)`,
          left: `${20 + i * 40}%`,
          top: `${10 + i * 30}%`,
        }}
        animate={{
          y: [0, -40 * (i % 2 === 0 ? 1 : -1), 0],
          x: [0, 30 * (i % 2 === 0 ? -1 : 1), 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}
  </div>
);

// Animated section title with text reveal
export const AnimatedTitle = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);
