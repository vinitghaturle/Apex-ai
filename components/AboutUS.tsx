'use client'

const AboutUS = ({ 
  title = "APEX-AI : The AI Hackathon", 
  subtitle = "10 Hours. Hundreds of developers. Infinite possibilities. Join the sprint to build solutions that actually matter.",
  date = "February 18, 2026",
  image = "/about.svg"
}) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans p-6">
      
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt="Hackathon Background" 
          className="w-full h-full object-cover scale-105 opacity-65 blur-[0.9px] "
        />
        <img 
          src={image} 
          alt="Hackathon Background" 
          className="w-full h-full object-cover scale-105 "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-94"></div>
        {/* Dark overlay to make the glass pop */}
        
        
      </div>

      {/* 2. The Glass Terminal Container */}
      <div className="relative z-10 w-full max-w-5xl animate-in fade-in zoom-in duration-700">
        
        {/* Terminal Header (The Border & Controls) */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/10 border-t border-l border-r border-white/20 rounded-t-2xl backdrop-blur-xl">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <img 
          src="ABOUT.png" 
          alt="Hackathon Background" 
          className="h-[4rem] w-auto object-contain opacity-80 py-3"
        />
          <div className="w-12"></div> {/* Spacer to keep title centered */}
        </div>

        {/* Terminal Body (The Glass Effect) */}
        <div className="relative p-8 md:p-12 bg-white/5 border border-white/30 rounded-b-2xl backdrop-blur-md shadow-2xl opacity-85">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] md:text-xs font-bold tracking-widest text-red-400 uppercase bg-red-500/10 border border-red-500/20 rounded-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            LIVE: {date} • GHRCE NAGPUR
          </div>

          {/* Text Content */}
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
            {title.split(':')[0]} <br/>
            <span className="text-red-500">
              {title.split(':')[1]}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
            <span className="text-green-500 font-mono mr-2">&gt;</span>
            {subtitle}
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUS;