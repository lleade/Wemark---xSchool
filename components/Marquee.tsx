"use client";

import { useEffect, useRef } from "react";
import type { TextSlider } from "@/lib/api";

interface MarqueeProps {
  textSlider: TextSlider;
}

function MarqueeRow({
  lines,
  direction,
}: {
  lines: string[];
  direction: "left" | "right";
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const velocityRef = useRef(0);
  const animationId = useRef(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const width = () => scroller.scrollWidth / 3;

    if (direction === "right") {
      positionRef.current = -width();
    }

const tick = () => {
  velocityRef.current *= 0.95;

  const effectiveVelocity =
    Math.abs(velocityRef.current) < 0.1
      ? direction === "left"
        ? -0.5
        : 0.5
      : velocityRef.current;

  positionRef.current += effectiveVelocity;

  const w = width();
  if (positionRef.current <= -w) positionRef.current += w;
  if (positionRef.current > 0) positionRef.current -= w;

  scroller.style.transform = `translateX(${positionRef.current}px) translateZ(0)`;
  animationId.current = requestAnimationFrame(tick);
};

    animationId.current = requestAnimationFrame(tick);

    const handleWheel = (e: WheelEvent) => {
      const delta = e.deltaY * 0.1;
      velocityRef.current = direction === "left" ? -delta : delta;
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      cancelAnimationFrame(animationId.current);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [direction, lines]);

  const content = (
    <>
      {lines.map((line, index) => (
        <span className="marquee__segment" key={`${line}-${index}`}>
          <span className="marquee__asterisk">*</span>
          {line}
        </span>
      ))}
    </>
  );

  return (
    <div className="marquee__row">
      <div className="marquee__scroller" ref={scrollerRef}>
        <span className="marquee__item">{content}</span>
        <span className="marquee__item">{content}</span>
        <span className="marquee__item">{content}</span>
      </div>
    </div>
  );
}

export default function Marquee({ textSlider }: MarqueeProps) {
  const lines = [textSlider.xline1, textSlider.xline2, textSlider.xline3];

  return (
    <section className="marquee section-gap">
      <div className="container">
        <div className="marquee__wrapper">
          <MarqueeRow lines={lines} direction="left" />
          <MarqueeRow lines={lines} direction="right" />
        </div>
      </div>
    </section>
  );
}