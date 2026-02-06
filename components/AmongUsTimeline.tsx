"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

gsap.registerPlugin(ScrollTrigger);

export const HorizontalTimeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null); // Ref for the moving image

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".horizontal-card");
      if (!trackRef.current || !containerRef.current) return;

      const totalWidth = trackRef.current.scrollWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          end: () => `+=${totalWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Flip logic: self.direction is 1 (forward) or -1 (backward)
            if (self.direction === 1) {
              gsap.to(characterRef.current, { scaleX: 1, duration: 0.2 });
            } else if (self.direction === -1) {
              gsap.to(characterRef.current, { scaleX: -1, duration: 0.2 });
            }
          }
        },
      });

      // 1. Move the cards
      tl.to(sections, {
        x: () => -(totalWidth - window.innerWidth),
        ease: "none",
      }, 0);

      // 2. Scale the progress bar
      tl.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
      }, 0);

      // 3. Move the character along the bar
      // Since the bar is 2/3 width of screen, we move the character across that same distance
      tl.to(characterRef.current, {
        left: "100%",
        ease: "none",
      }, 0);

    }, containerRef);

    return () => ctx.revert();
  }, [data]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Fixed Header */}
      <div className="absolute top-0 left-0 w-full pt-12 z-10 pointer-events-none mt-[4rem]">
         <h2 className="flex items-center w-full text-4xl font-joffrey font-bold text-white mb-12">
             <span className="flex-grow h-1 bg-gray-100"></span>
             <span className="mx-6 text-6xl">TIMELINE</span>
             <span className="flex-grow h-1 bg-gray-100"></span>
             </h2>
      </div>

      {/* Sliding Track */}
      <div ref={trackRef} className="flex h-full items-center">
        {data.map((item, index) => (
          <div key={index} className="horizontal-card min-w-full flex-shrink-0 px-24">
             <h3 className="text-5xl font-bold text-white mb-4 uppercase italic">{item.title}</h3>
             <div className="text-xl text-neutral-400 max-w-2xl whitespace-normal leading-relaxed">
               {item.content}
             </div>
          </div>
        ))}
      </div>

      {/* Progress Bar & Character Container */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-white/10">
        
        {/* The Character (WebP/GIF) */}
        <div 
          ref={characterRef}
          className="absolute bottom-full mb-2 -ml-6 w-12 h-12 flex items-center justify-center z-20"
          style={{ left: "0%" }} // Controlled by GSAP
        >
          <img 
            src="/charwalk.webp" 
            alt="walking mascot" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Progress Fill */}
        <div 
          ref={progressRef} 
          className="h-full bg-red-500 w-full origin-left scale-x-0" 
        />
      </div>
    </section>
  );
};