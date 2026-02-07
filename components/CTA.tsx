'use client'

const CTA = ({ 
  title = "APEX-AI : The AI Hackathon", 
  subtitle = "10 Hours. Hundreds of developers. Infinite possibilities. Join the sprint to build solutions that actually matter.",
  date = "February 18, 2026",
  image = "/bg-team.png"
}) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden font-sans">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt="Hackathon Backdrop" 
          className="w-full h-full object-cover opacity-50 scale-105" // Slight scale to prevent edge gaps
        />
        {/* Gradient Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 backdrop-blur-[1px]"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 px-6 text-center max-w-5xl animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs md:text-sm font-bold tracking-widest text-red-400 uppercase bg-red-950/40 border border-red-500/30 rounded-full backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          {date} • AT GHRCE Nagpur
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
          {title.split(':')[0]}: <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
            {title.split(':')[1]}
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="group relative px-10 py-5 bg-white hover:bg-gray-600 text-black font-extrabold rounded-xl transition-all duration-300 transform hover:-translate-y-1 ">
            Register Now
          </button>
        </div>
        
        <div className="mt-12 flex items-center justify-center gap-8 opacity-60">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">$400+</p>
            <p className="text-xs uppercase tracking-widest text-gray-400">Prizes</p>
          </div>
          <div className="h-8 w-[1px] bg-gray-700"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">25+</p>
            <p className="text-xs uppercase tracking-widest text-gray-400">Teams</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;