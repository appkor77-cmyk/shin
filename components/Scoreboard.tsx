import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Scoreboard: React.FC = () => {
  return (
    <div className="relative -mt-16 z-30 max-w-7xl mx-auto px-4 md:px-6">
      <div className="bg-[#1a1a1a] text-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left: Ranking Status */}
        <div className="bg-gradient-to-br from-[#c89b3c] to-[#a07a2b] p-6 md:w-64 flex flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <span className="text-xs font-bold uppercase tracking-widest text-yellow-100 mb-1">Season Ranking</span>
          <div className="text-5xl font-black text-white leading-none mb-2 drop-shadow-md">10</div>
          <p className="text-sm font-medium text-white/90">47승 93패 4무</p>
          <p className="text-xs text-white/70 mt-1">승률 0.336</p>
        </div>

        {/* Right: Match Status */}
        <div className="flex-1 p-4 md:p-0 flex items-center justify-between relative bg-neutral-900">
           {/* Background subtle pattern */}
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 to-transparent opacity-40 pointer-events-none"></div>

           <button className="p-4 hover:text-[#8B0029] transition-colors z-10 hidden md:block">
             <ChevronLeft size={32} />
           </button>

           <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 py-6 z-10">
              <div className="text-center">
                 <div className="text-xs text-gray-400 mb-2">09/30 (화) 고척 <span className="text-red-500 font-bold ml-1">경기 종료</span></div>
                 
                 <div className="flex items-center gap-8 md:gap-12">
                    {/* Home Team */}
                    <div className="text-center">
                       <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full p-2 flex items-center justify-center shadow-lg mx-auto mb-2">
                          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/82/SSG_Landers.png/200px-SSG_Landers.png" alt="SSG" className="w-full h-full object-contain" />
                       </div>
                       <div className="font-bold text-lg">SSG</div>
                       <div className="text-xs text-gray-500">선발 김건우</div>
                    </div>

                    {/* Score */}
                    <div className="flex items-center gap-4">
                       <span className="text-4xl md:text-6xl font-black font-mono">4</span>
                       <span className="text-gray-600 text-2xl font-light">:</span>
                       <span className="text-4xl md:text-6xl font-black font-mono text-[#e31b53]">3</span>
                    </div>

                    {/* Away Team (Heroes) */}
                    <div className="text-center">
                       <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full p-2 flex items-center justify-center shadow-lg mx-auto mb-2 ring-2 ring-[#8B0029]">
                          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Kiwoom_Heroes_logo.svg/1200px-Kiwoom_Heroes_logo.svg.png" alt="Heroes" className="w-full h-full object-contain" />
                       </div>
                       <div className="font-bold text-lg text-[#e31b53]">HEROES</div>
                       <div className="text-xs text-gray-500">선발 알칸타라</div>
                    </div>
                 </div>
              </div>
           </div>

           <button className="p-4 hover:text-[#8B0029] transition-colors z-10 hidden md:block">
             <ChevronRight size={32} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;