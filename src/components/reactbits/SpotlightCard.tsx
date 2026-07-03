import { AnchorHTMLAttributes, MouseEventHandler, PropsWithChildren, useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps
  extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> {
  spotlightColor?: string;
}

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(103, 232, 249, 0.18)",
  ...props
}: SpotlightCardProps) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  return (
    <a
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      onFocus={() => setOpacity(1)}
      onBlur={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 58%)`,
        }}
      />
      {children}
    </a>
  );
};

export default SpotlightCard;
