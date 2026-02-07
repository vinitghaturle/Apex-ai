"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-24 items-center justify-center rounded-full bg-black p-4 shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function CommunityPartner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const partner1Ref = useRef<HTMLDivElement>(null);
  const partner2Ref = useRef<HTMLDivElement>(null);
  const partner3Ref = useRef<HTMLDivElement>(null);

  return (
    
    <div
      className="relative flex h-[700px] w-full items-center justify-center overflow-hidden rounded-xl  p-20"
      ref={containerRef}
    >
      <div className="flex size-full max-w-4xl flex-row items-stretch justify-between gap-20">
        {/* Left Side: 2 Partners */}
        <div className="flex flex-col justify-center gap-24">
          <Circle ref={partner1Ref}>
            <Icons.partner1 />
          </Circle>
          <Circle ref={partner2Ref}>
            <Icons.partner2 />
          </Circle>
        </div>

        {/* Center: Main Event PNG */}
        <div className="flex flex-col justify-center">
          <Circle ref={centerRef} className="size-48 border-blue-500 border-4 shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)]">
            <img 
              src="/antragini.png" 
              alt="Event Logo" 
              className="size-full object-contain pointer-events-none"
            />
          </Circle>
        </div>

        {/* Right Side: 1 Partner */}
        <div className="flex flex-col justify-center">
          <Circle ref={partner3Ref}>
            <Icons.partner3 />
          </Circle>
        </div>
      </div>

      {/* Top Left Partner to Center */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={partner1Ref}
        toRef={centerRef}
        curvature={-60}
        className="[&_path]:stroke-[6px]"
        duration={3}
        startYOffset={0}
        endYOffset={-20} // Adjusts entry point on the large center circle
      />

      {/* Bottom Left Partner to Center */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={partner2Ref}
        toRef={centerRef}
        curvature={60}
        className="[&_path]:stroke-[6px]"
        duration={3}
        startYOffset={0}
        endYOffset={20} // Adjusts entry point on the large center circle
      />

      {/* Right Partner to Center */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={partner3Ref}
        toRef={centerRef}
        className="[&_path]:stroke-[6px]"
        duration={3}
        startYOffset={0}
        endYOffset={0}
      />
    </div>
  );
}

const Icons = {
  partner1: () => <img src="/gdg.svg" alt="GDG" className="size-full scale-[4.5] object-contain" />,
  partner2: () => <img src="/ieee.svg" alt="SRC" className="size-full scale-[4.5] object-contain" />,
  partner3: () => <img src="/src.svg" alt="IEEE" className="size-full scale-[2] object-contain" />,
};