import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function Marquee({ text, baseVelocity = 2 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="marquee-container" style={{ overflow: "hidden", whiteSpace: "nowrap", display: "flex", flexWrap: "nowrap", padding: "2rem 0", background: "var(--bg-elevated)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <motion.div className="scroller" style={{ x, display: "flex", whiteSpace: "nowrap", gap: "2rem" }}>
        {[...Array(6)].map((_, i) => (
          <span key={i} style={{ 
            display: "block", 
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 8vw, 6rem)", 
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            color: i % 2 === 0 ? "var(--text-primary)" : "transparent",
            WebkitTextStroke: i % 2 !== 0 ? "1px var(--text-secondary)" : "none",
            marginRight: "2rem"
          }}>
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
