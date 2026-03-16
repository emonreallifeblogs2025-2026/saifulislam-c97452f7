import { memo, useMemo } from "react";
import { motion } from "framer-motion";

interface CelestialBody {
  id: number;
  size: number;
  orbitRadius: number;
  duration: number;
  delay: number;
  tiltX: number;
  tiltY: number;
  type: "planet" | "star" | "ring";
  glow: number;
  gradient: string;
}

const OrbitingPlanets = () => {
  const bodies = useMemo<CelestialBody[]>(() => [
    // Large golden planet - slow majestic orbit
    { id: 1, size: 22, orbitRadius: 52, duration: 8, delay: 0, tiltX: 70, tiltY: 15, type: "planet", glow: 20, gradient: "radial-gradient(circle at 35% 35%, hsl(48,95%,75%), hsl(43,85%,55%), hsl(38,80%,35%))" },
    // Medium amber planet - opposite direction feel
    { id: 2, size: 16, orbitRadius: 44, duration: 6.5, delay: -2, tiltX: 55, tiltY: -25, type: "planet", glow: 15, gradient: "radial-gradient(circle at 30% 30%, hsl(40,90%,70%), hsl(35,80%,50%), hsl(30,75%,30%))" },
    // Small fast star
    { id: 3, size: 8, orbitRadius: 48, duration: 4.5, delay: -1, tiltX: 80, tiltY: 40, type: "star", glow: 12, gradient: "radial-gradient(circle at 40% 40%, hsl(50,100%,90%), hsl(45,95%,65%), hsl(40,85%,45%))" },
    // Tiny fast orbiter
    { id: 4, size: 6, orbitRadius: 40, duration: 3.5, delay: -3, tiltX: 60, tiltY: -40, type: "star", glow: 10, gradient: "radial-gradient(circle at 40% 40%, hsl(55,100%,85%), hsl(48,90%,60%), hsl(43,80%,40%))" },
    // Ring planet with shadow
    { id: 5, size: 18, orbitRadius: 56, duration: 10, delay: -4, tiltX: 65, tiltY: 30, type: "ring", glow: 18, gradient: "radial-gradient(circle at 30% 30%, hsl(43,90%,72%), hsl(38,82%,52%), hsl(33,75%,32%))" },
    // Medium star mid-orbit
    { id: 6, size: 10, orbitRadius: 36, duration: 5, delay: -1.5, tiltX: 75, tiltY: -15, type: "star", glow: 12, gradient: "radial-gradient(circle at 35% 35%, hsl(52,100%,80%), hsl(46,90%,58%), hsl(40,80%,38%))" },
    // Distant large planet
    { id: 7, size: 14, orbitRadius: 60, duration: 12, delay: -6, tiltX: 50, tiltY: 20, type: "planet", glow: 16, gradient: "radial-gradient(circle at 32% 32%, hsl(45,88%,68%), hsl(40,78%,48%), hsl(35,70%,28%))" },
    // Tiny comet-like
    { id: 8, size: 5, orbitRadius: 46, duration: 3, delay: -0.5, tiltX: 85, tiltY: -35, type: "star", glow: 8, gradient: "radial-gradient(circle at 45% 45%, hsl(50,100%,92%), hsl(45,95%,70%), hsl(40,85%,50%))" },
    // Extra golden nebula particle
    { id: 9, size: 7, orbitRadius: 50, duration: 7, delay: -3.5, tiltX: 72, tiltY: 45, type: "star", glow: 10, gradient: "radial-gradient(circle at 38% 38%, hsl(48,100%,82%), hsl(43,90%,60%), hsl(38,80%,40%))" },
  ], []);

  return (
    <div className="absolute inset-0 z-[8] pointer-events-none" style={{ perspective: "1200px", perspectiveOrigin: "50% 45%" }}>
      {bodies.map((body) => (
        <div
          key={body.id}
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${body.tiltX}deg) rotateY(${body.tiltY}deg)`,
          }}
        >
          <motion.div
            className="absolute"
            style={{
              width: body.size,
              height: body.size,
              left: "50%",
              top: "50%",
              marginLeft: -body.size / 2,
              marginTop: -body.size / 2,
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateZ: [0, 360],
            }}
            transition={{
              duration: body.duration,
              delay: body.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* The actual planet/star positioned at orbit radius */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: body.size,
                height: body.size,
                left: `${body.orbitRadius}%`,
                top: 0,
                transform: `translateX(-50%) translateZ(${body.size * 2}px)`,
                background: body.gradient,
                boxShadow: `0 0 ${body.glow}px ${body.glow / 2}px hsla(43, 80%, 55%, 0.6), inset 0 -${body.size / 4}px ${body.size / 3}px rgba(0,0,0,0.3)`,
              }}
              animate={{
                scale: [1, 1.15, 1],
                boxShadow: [
                  `0 0 ${body.glow}px ${body.glow / 2}px hsla(43, 80%, 55%, 0.6), inset 0 -${body.size / 4}px ${body.size / 3}px rgba(0,0,0,0.3)`,
                  `0 0 ${body.glow * 1.5}px ${body.glow}px hsla(43, 80%, 55%, 0.8), inset 0 -${body.size / 4}px ${body.size / 3}px rgba(0,0,0,0.3)`,
                  `0 0 ${body.glow}px ${body.glow / 2}px hsla(43, 80%, 55%, 0.6), inset 0 -${body.size / 4}px ${body.size / 3}px rgba(0,0,0,0.3)`,
                ],
              }}
              transition={{
                duration: body.duration / 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Ring for ring-type planets */}
              {body.type === "ring" && (
                <div
                  className="absolute rounded-full border"
                  style={{
                    width: body.size * 2,
                    height: body.size * 0.6,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%) rotateX(75deg)",
                    borderColor: "hsla(43, 80%, 55%, 0.5)",
                    background: "linear-gradient(90deg, transparent, hsla(43, 70%, 50%, 0.15), transparent)",
                  }}
                />
              )}

              {/* Star sparkle effect */}
              {body.type === "star" && (
                <motion.div
                  className="absolute"
                  style={{
                    width: body.size * 3,
                    height: body.size * 3,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "radial-gradient(circle, hsla(45, 100%, 80%, 0.4) 0%, transparent 70%)",
                  }}
                  animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: body.delay }}
                />
              )}
            </motion.div>
          </motion.div>

          {/* Orbit trail ring (subtle) */}
          <div
            className="absolute rounded-full border"
            style={{
              width: `${body.orbitRadius * 2}%`,
              height: `${body.orbitRadius * 2}%`,
              left: `${50 - body.orbitRadius}%`,
              top: `${50 - body.orbitRadius}%`,
              borderColor: "hsla(43, 70%, 50%, 0.06)",
              borderStyle: "dashed",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default memo(OrbitingPlanets);
