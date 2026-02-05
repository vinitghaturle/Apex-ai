'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface FloatingCharacter {
  id: number
  src: string
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export function AnimatedBackground() {
  const [characters, setCharacters] = useState<FloatingCharacter[]>([])

  useEffect(() => {
    const svgs = [
      '/light-blue-among-us.svg',
      '/red-among-us.svg',
      '/orange-among-us.svg',
      '/violet-among-us.svg',
    ]

    const newCharacters: FloatingCharacter[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      src: svgs[i % svgs.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 60 + Math.random() * 80,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }))

    setCharacters(newCharacters)
  }, [])

  return (
    <div className="fixed inset-0 w-screen h-screen pointer-events-none z-0 overflow-hidden">
      {/* Animated sparkle background */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotateZ(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-30px) rotateZ(5deg);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-60px) rotateZ(0deg);
            opacity: 0.7;
          }
          75% {
            transform: translateY(-30px) rotateZ(-5deg);
            opacity: 0.5;
          }
        }

        @keyframes sway {
          0%, 100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(20px);
          }
        }

        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.2));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.6));
          }
        }

        .character {
          animation: float var(--duration)s ease-in-out infinite var(--delay)s,
                    sway calc(var(--duration)s * 1.5) ease-in-out infinite var(--delay)s,
                    glow calc(var(--duration)s * 0.75) ease-in-out infinite var(--delay)s;
        }
      `}</style>

      {characters.map((char) => (
        <div
          key={char.id}
          className="character absolute"
          style={{
            left: `${char.x}%`,
            top: `${char.y}%`,
            width: `${char.size}px`,
            height: `${char.size}px`,
            '--duration': `${char.duration}s`,
            '--delay': `${char.delay}s`,
          } as React.CSSProperties & { '--duration': string; '--delay': string }}
        >
          <Image
            src={char.src}
            alt="floating character"
            width={char.size}
            height={char.size}
            className="w-full h-full"
            priority
          />
        </div>
      ))}
    </div>
  )
}
