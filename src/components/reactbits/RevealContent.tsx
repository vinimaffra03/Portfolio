import { PropsWithChildren } from "react";
import { motion } from "motion/react";

interface RevealContentProps extends PropsWithChildren {
  className?: string;
  delay?: number;
}

const RevealContent = ({ children, className = "", delay = 0 }: RevealContentProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default RevealContent;
