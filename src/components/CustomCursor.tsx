import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./styles/CustomCursor.css";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const ringPos = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      gsap.set(dot, { x: e.clientX, y: e.clientY });
      gsap.to(ringPos, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power3.out",
        onUpdate: () => gsap.set(ring, { x: ringPos.x, y: ringPos.y }),
      });
    };

    const onDown = () => gsap.to(ring, { scale: 0.7, duration: 0.15 });
    const onUp = () => gsap.to(ring, { scale: 1, duration: 0.15 });

    const interactive = 'a, button, [role="button"], input, textarea';
    const onEnter = (e: Event) => {
      if ((e.target as HTMLElement).closest(interactive)) {
        gsap.to(ring, { scale: 1.6, duration: 0.2 });
      }
    };
    const onLeave = (e: Event) => {
      if ((e.target as HTMLElement).closest(interactive)) {
        gsap.to(ring, { scale: 1, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
