'use client'
import React from "react"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"

// Define the interface for the data object
interface FacultyData {
  imageSrc: string;
  name: string;
  role: string;
}

interface FacultyProfileProps {
  data: FacultyData;
}

export const Imposter = ({ data }: FacultyProfileProps) => {
  // Destructure the data for easier use inside the component
  const { imageSrc, name, role } = data;

  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden">
      
      {/* 2. Central Image: Wrapped in an absolute div to lock it to the middle */}
      
      <div className="absolute z-20 flex items-center justify-center">
        <div className="h-[12rem] w-[12rem] overflow-hidden rounded-full border-4 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
           <img 
            src={imageSrc} 
            alt={name} 
            className="h-full w-full flex items-center justify-center object-cover"
          />
        </div>
      </div>

      {/* 3. The Orbits: They will now rotate around that absolute center */}
      <OrbitingCircles radius={120} duration={25}>
          <img src="/ico-purple-player.svg" className="h-8 w-8" />
          <img src="/ico-green-player.svg" className="h-8 w-8" />
          <img src="/ico-red-player.svg" className="h-8 w-8" />
          <img src="/ico-yellow-player.svg" className="h-8 w-8" />
      </OrbitingCircles>

      <OrbitingCircles radius={160} duration={25} reverse>
          <img src="/ico-purple-player.svg" className="h-8 w-8" />
          <img src="/ico-green-player.svg" className="h-8 w-8" />
          <img src="/ico-red-player.svg" className="h-8 w-8" />
          <img src="/ico-yellow-player.svg" className="h-8 w-8" />
      </OrbitingCircles>

      {/* 4. Bottom Info: Absolute position at the bottom so it doesn't move with the orbits */}
      <div className="absolute bottom-12 z-30 text-center">
        <h3 className="text-4xl font-black text-white uppercase tracking-tighter italic">
          {name}
        </h3>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
          {role}
        </p>
      </div>
    </div>
  )
}