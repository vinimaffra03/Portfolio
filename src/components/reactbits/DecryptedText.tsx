import { useEffect, useMemo, useRef, useState } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  iterations?: number;
  animateOn?: "view" | "hover";
  className?: string;
  encryptedClassName?: string;
  characters?: string;
}

const DecryptedText = ({
  text,
  speed = 34,
  iterations = 9,
  animateOn = "hover",
  className = "",
  encryptedClassName = "text-muted-foreground",
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_/$>",
}: DecryptedTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const chars = useMemo(() => characters.split(""), [characters]);

  const scramble = () =>
    text
      .split("")
      .map((char) => {
        if (char === " ") return " ";
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

  const run = () => {
    if (hasAnimated && animateOn === "view") return;

    let frame = 0;
    setHasAnimated(true);

    const interval = window.setInterval(() => {
      frame += 1;
      const progress = frame / iterations;

      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index / text.length < progress) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );

      if (frame >= iterations) {
        window.clearInterval(interval);
        setDisplayText(text);
      }
    }, speed);
  };

  useEffect(() => {
    setDisplayText(animateOn === "view" ? scramble() : text);
    setHasAnimated(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, animateOn]);

  useEffect(() => {
    if (animateOn !== "view" || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) run();
      },
      { threshold: 0.35 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animateOn, hasAnimated]);

  return (
    <span
      ref={ref}
      className={className}
      onMouseEnter={animateOn === "hover" ? run : undefined}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {displayText.split("").map((char, index) => (
          <span
            key={`${char}-${index}`}
            className={char === text[index] ? undefined : encryptedClassName}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
};

export default DecryptedText;
