import { useRef, useState, type ReactNode, type CSSProperties, type MouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps children in a lightweight 3D tilt effect: the card rotates toward
 * the cursor and lifts slightly, then eases back to flat on mouse leave.
 */
export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(800px) rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 12).toFixed(2)}deg) translateY(-4px)`,
    });
  };

  const reset = () =>
    setStyle({ transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)" });

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </div>
  );
}
