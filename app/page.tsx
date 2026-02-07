'use client'
import { useState } from "react";
import IntroLoader from "@/components/IntroLoader";
import { SparklesCore } from '@/components/ui/sparkles'
import { Hero } from '@/components/hero'
import Navbar from "@/components/nav"
import Tracks from '@/components/tracks'
import { Time } from "@/components/time";
import { HorizontalTimeline } from "@/components/AmongUsTimeline";
import { Imposter } from "@/components/imposter";
import { Crew } from "@/components/crew";
import { CommunityPartner } from "@/components/communityPartner";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import AboutUS from "@/components/AboutUS";

const timelineData = [
  {
    title: "DAY 1 – INAUGURATION",
    date: "NOVEMBER 28, 2025 · 9:00 AM",
    content: (
      <p>
        Opening ceremony with keynote speeches from industry leaders,
        introduction to the event agenda, and official kickoff.
      </p>
    ),
  },
  {
    title: "HACKATHON KICKOFF",
    date: "NOVEMBER 28, 2025 · 10:30 AM",
    content: (
      <p>
        Teams begin working on problem statements. Mentors will be available
        throughout the day to guide participants.
      </p>
    ),
  },
  {
    title: "WORKSHOPS & TECH TALKS",
    date: "NOVEMBER 28, 2025 · 2:00 PM",
    content: (
      <p>
        Hands-on workshops and expert tech talks covering AI, Web3, Cloud,
        and modern development practices.
      </p>
    ),
  },
  {
    title: "EVENING REVIEW & NETWORKING",
    date: "NOVEMBER 28, 2025 · 6:00 PM",
    content: (
      <p>
        Progress review sessions followed by networking with mentors,
        sponsors, and fellow participants.
      </p>
    ),
  },
];
const facultyMembers = [
  {
  imageSrc: "/Removal-803.png",
  name: "Pranay sir",
  role: "Lead Researcher"
},

{
  imageSrc: "/Removal-803.png",
  name: "Dr. Alan Turing",
  role: "Lead Researcher"
}
];
const teamMembers = [
  {
  imageSrc: "/Removal-803.png",
  name: "Soham Kale",
  role: "Technorian President"
},
{
  imageSrc: "/Removal-803.png",
  name: "Karan Dubey",
  role: "APEX - AI Lead"
},
{
  imageSrc: "/Nandini.jpeg",
  name: "Nandini Jaiswal",
  role: "Organizer - GDGoC GHRCE"
},
{
  imageSrc: "/prince.jpeg",
  name: "Prince Rayamwar",
  role: "Chair, IEEE CS SB"
}
];
export default function Page() {
  const [done, setDone] = useState(false);
  return (
    <>
    {!done && <IntroLoader onFinish={() => setDone(true)} />}

      {done && (
    <div className="relative w-full bg-black overflow-x-hidden">
      {/* Fixed Sparkles Background - Full viewport coverage */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none z-5">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Section 1 - Hero */}
        <Navbar />
        <Hero />
        <AboutUS />
        <Tracks />
        {/* <Time data={timelineData} /> */}
        <HorizontalTimeline data={timelineData} />
        <div className="relative min-h-screen">
        <div className="absolute top-[9rem] left-1/2 -translate-x-1/2 z-50">
        <img 
          loading="lazy" 
          src="impofac.png" 
          className="w-[25vw] h-auto object-contain opacity-80" 
          alt="The Faculty Header" 
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10 pt-[9.5rem] px-10 scale-90 ">
        {facultyMembers.map((member, index) => (
          <div key={index} className="w-full lg:w-[30%] max-w-md flex justify-center ">
             <Imposter data={member} />
          </div>
        ))}
      </div>
      </div>
      

      <div className="relative min-h-screen">
        <div className="absolute top-[9rem] left-1/2 -translate-x-1/2 z-50">
        <img 
          loading="lazy" 
          src="crewteam.png" 
          className="w-[25vw] h-auto object-contain opacity-85" 
          alt="The team Header" 
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2 pt-[9.5rem] px-10 scale-75 ">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-full lg:w-[30%] max-w-md flex justify-center ">
             <Crew data={member} />
          </div>
        ))}
      </div>
      </div>
      <div className="relative ">
       <div className="absolute top-8 w-full text-center animate-bounce">
      {/* Title with Custom Text Stroke */}
      <h2 
        className="font-display text-4xl md:text-6xl text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] mb-2 [text-stroke:1px_black] [-webkit-text-stroke:1px_black]"
      >
        THE ALLIANCE
      </h2>

      {/* Subtitle Badge */}
      <p className="inline-block rounded-full border border-gray-600 bg-black/50 px-4 py-1 text-lg font-bold tracking-wide text-gray-300 backdrop-blur-sm md:text-xl">
        Community Partners
      </p>
    </div>    

           
            
                 <CommunityPartner />
            
          </div>  



        {/* Section 2 - Features */}
        <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
            {[1, 2, 3].map((feature) => (
              <div
                key={feature}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 hover:border-gray-500 transition"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Feature {feature}
                </h3>
                <p className="text-gray-400">
                  This is a description of feature {feature}. Watch how the sparkles background stays fixed while you scroll.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 - CTA */}
        <CTA />

        {/* Section 5 - Footer */}
        <Footer />
      </div>
    </div>
    )}
    </>
  )
}
