"use client";
import { useEffect, useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => {
      // rAF ensures the initial hidden paint happens before we animate,
      // which is necessary for elements already visible on mobile load
      requestAnimationFrame(() => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          delay ? setTimeout(show, delay) : show();
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: "0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const initialTransform: Record<string, string> = {
    up: "translateY(1.75rem)",
    left: "translateX(-1.75rem)",
    right: "translateX(1.75rem)",
    fade: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: initialTransform[direction],
        transition: "opacity 0.75s ease-out, transform 0.75s ease-out",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
