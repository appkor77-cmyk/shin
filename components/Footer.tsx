import React from 'react';
import { Youtube, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-gray-400">
      {/* Top Footer Call to Action */}
      <div className="relative bg-slate-900 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-3xl font-black text-white mb-2">All about KIWOOM HEROES</h2>
            <p className="text-gray-400">히어로즈의 다양한 채널과 함께하세요.</p>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <a href="#" className="w-12 h-12 bg-[#ff0000] rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform">
              <Youtube size={24} />
            </a>
            <a href="#" className="w-12 h-12 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform">
              <Instagram size={24} />
            </a>
            <a href="#" className="w-12 h-12 bg-[#1877f2] rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform">
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Sponsors Bar */}
      <div className="bg-white py-6 border-b">
         <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="font-bold text-xl text-blue-900">키움증권</span>
             <span className="font-bold text-xl text-green-600">Herbalife</span>
             <span className="font-bold text-xl text-blue-500">Panasonic</span>
             <span className="font-bold text-xl text-green-500">NAVER</span>
         </div>
      </div>

      {/* Bottom Legal */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 text-sm">
        <div className="flex flex-wrap gap-6 mb-8 text-gray-300 font-medium">
          <a href="#" className="hover:text-white">개인정보처리방침</a>
          <a href="#" className="hover:text-white">이용약관</a>
          <a href="#" className="hover:text-white">이메일무단수집거부</a>
          <a href="#" className="hover:text-white">안내 및 Q&A</a>
          <a href="#" className="hover:text-white">사이트맵</a>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-1 text-xs text-gray-500">
            <p>서울특별시 구로구 경인로 430(고척동, 고척스카이돔구장내) T. 02-3660-1000 F. 02-3660-1099</p>
            <p>Copyright (C) Heroes, All Rights Reserved.</p>
          </div>
          <div className="text-right">
             <div className="text-2xl font-black italic text-gray-600">KIWOOM HEROES BASEBALL CLUB</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;