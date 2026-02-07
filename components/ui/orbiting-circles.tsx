import React from "react"

import { cn } from "@/lib/utils"

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
  iconSize?: number
  speed?: number
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-white/30 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
  // Calculate delay based on the index to spread them out
  // (Total Duration / Total Icons) * Current Index
  const totalIcons = React.Children.count(children);
  const delay = (duration / totalIcons) * index;
        return (
          <div
      key={index}
      style={
        {
          "--duration": duration,
          "--radius": radius,
          "--delay": -delay, // Negative delay starts them at different points immediately
          "--icon-size": `${iconSize}px`,
        } as React.CSSProperties
      }
      className={cn(
        "animate-orbit absolute flex size-[var(--icon-size)] transform-gpu items-center justify-center rounded-full [animation-delay:calc(var(--delay)*1s)]",
        { "[animation-direction:reverse]": reverse },
        className
      )}
      {...props}
    >
      {child}
    </div>
  );
})}
    </>
  )
}
