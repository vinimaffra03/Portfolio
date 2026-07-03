import { CSSProperties, useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "motion/react";

interface ShinyTextProps {
  text: string;
  className?: string;
  color?: string;
  shineColor?: string;
  speed?: number;
  spread?: number;
}

const ShinyText = ({
  text,
  className = "",
  color = "hsl(220 10% 60%)",
  shineColor = "hsl(190 80% 72%)",
  speed = 4.5,
  spread = 115,
}: ShinyTextProps) => {
  const progress = useMotionValue(0);
  const lastTime = useRef<number | null>(null);

  useAnimationFrame((time) => {
    if (lastTime.current === null) {
      lastTime.current = time;
      return;
    }

    const delta = time - lastTime.current;
    lastTime.current = time;
    progress.set((progress.get() + delta / (speed * 10)) % 100);
  });

  const backgroundPosition = useTransform(
    progress,
    (value) => `${150 - value * 2}% center`,
  );

  const gradientStyle: CSSProperties = {
    backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 38%, ${shineColor} 50%, ${color} 62%, ${color} 100%)`,
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      style={{ ...gradientStyle, backgroundPosition }}
    >
      {text}
    </motion.span>
  );
};

export default ShinyText;
