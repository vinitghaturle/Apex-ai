'use client'

import { SparklesCore } from '@/components/ui/sparkles'

export default function Page() {
  return (
    <div className="relative w-full bg-black overflow-x-hidden">
      {/* Fixed Sparkles Background - Full viewport coverage */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none z-0">
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
        <section className="h-screen flex flex-col items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Build Great Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Watch the sparkles effect as you scroll through the page
            </p>
            <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
              Get Started
            </button>
          </div>
        </section>

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

        {/* Section 3 - About */}
        <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              About Us
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The sparkles effect creates a beautiful background that stays fixed as you scroll.
            </p>
            <p className="text-lg text-gray-300">
              Try scrolling down to see how the effect behaves across different sections. The particles remain in place while your content scrolls over them, creating a stunning visual experience.
            </p>
          </div>
        </section>

        {/* Section 4 - CTA */}
        <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Join thousands of users who are already building amazing products
            </p>
            <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
              Start Now
            </button>
          </div>
        </section>

        {/* Section 5 - Footer */}
        <section className="py-20 px-4 text-center border-t border-gray-800">
          <p className="text-gray-400">
            © 2024 Your Company. All rights reserved.
          </p>
        </section>
      </div>
    </div>
  )
}
