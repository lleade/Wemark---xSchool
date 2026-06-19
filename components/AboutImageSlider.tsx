"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface AboutImageSliderProps {
  images: { image: string }[];
}

export default function AboutImageSlider({ images }: AboutImageSliderProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationId = 0;
    let position = 0;

    const tick = () => {
      position -= 0.35;
      const width = scroller.scrollWidth / 2;

      if (Math.abs(position) >= width) {
        position = 0;
      }

      scroller.style.transform = `translateX(${position}px) translateZ(0)`;
      animationId = requestAnimationFrame(tick);
    };

    animationId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationId);
  }, [images.length]);

  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="about-slider">
      <div className="about-slider__viewport">
        <div className="about-slider__track" ref={scrollerRef}>
          {duplicatedImages.map((item, index) => (
            <div className="about-slider__item" key={`${item.image}-${index}`}>
              <Image
                src={item.image}
                alt="About xSchool"
                fill
                sizes="(max-width: 650px) 44.6rem, 86.5rem"
                className="about-slider__image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
