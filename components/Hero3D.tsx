import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero3D: React.FC = () => {
  return (
    <div className="relative w-full h-[85vh] overflow-hidden bg-slate-900">
      {/* 3D Container */}
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe 
          src='https://my.spline.design/webdiagram-jIy8lJkKoTC4lsYc71pJ9J0b/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full scale-105"
          title="Spline 3D"
        ></iframe>
      </div>

      {/* Overlay Gradient for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent z-10 pointer-events-none"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="max-w-xl text-white space-y-6">
            <div className="flex items-center gap-2">
              <span className="bg-[#8B0029] text-white px-3 py-1 text-xs font-bold rounded-full uppercase tracking-widest">
                Official Season 2025
              </span>
              <span className="text-sm font-medium tracking-wide text-gray-300">
                WIN THE CHAMPIONSHIP
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight italic tracking-tighter drop-shadow-lg">
              BE THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e31b53] to-white">
                HEROES
              </span>
            </h1>
            
            <p className="text-lg text-gray-200 font-light leading-relaxed">
              Experience the passion of baseball. Join us at the stadium and feel the energy of victory.
            </p>

            <div className="flex gap-4 pt-4 pointer-events-auto">
              <button className="bg-[#8B0029] hover:bg-[#a60031] text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-red-900/20">
                예매하기 <ArrowRight size={18} />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-bold transition-all">
                일정 확인
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent z-20 pointer-events-none"></div>
    </div>
  );
};

export default Hero3D;