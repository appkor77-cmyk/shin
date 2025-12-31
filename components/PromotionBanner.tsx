import React from 'react';

const PromotionBanner: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-pink-200 to-red-100 h-64 md:h-80 shadow-lg group cursor-pointer">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paw-prints.png')] opacity-10"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 transition-transform duration-500 group-hover:scale-105">
           <div className="bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-pink-600 font-bold text-sm mb-4 shadow-sm">
             키움히어로즈 X 춘배와 친구들
           </div>
           <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-2">
             춘배와 친구들 <span className="text-[#8B0029]">온라인 판매 OPEN</span>
           </h2>
           <p className="text-gray-600 mb-8 max-w-lg mx-auto">
             귀여운 춘배 에디션 유니폼과 굿즈를 지금 바로 만나보세요.
             한정판 굿즈를 놓치지 마세요!
           </p>
           
           <div className="flex gap-2 justify-center">
             <div className="w-2 h-2 rounded-full bg-white"></div>
             <div className="w-2 h-2 rounded-full bg-white/50"></div>
             <div className="w-2 h-2 rounded-full bg-white/50"></div>
           </div>
        </div>

        {/* Decorative Floating Elements (Simulated) */}
        <div className="absolute -left-10 top-10 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -right-10 bottom-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default PromotionBanner;