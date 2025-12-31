import React from 'react';
import { Play, Plus } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-2xl font-bold text-slate-900">히어로즈 영상</h3>
          <button className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-[#8B0029] transition-colors">
            더보기 <Plus size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Video 1 */}
          <div className="group cursor-pointer">
             <div className="relative rounded-xl overflow-hidden shadow-md aspect-video mb-4">
                <img src="https://picsum.photos/600/340?random=10" alt="Video Thumb" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    <Play fill="white" size={20} />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">12:30</div>
             </div>
             <p className="font-bold text-lg leading-tight group-hover:text-[#8B0029] transition-colors">미션: 힘을 모아 크리스마스 콘텐츠 만들기 🎅</p>
          </div>

          {/* Video 2 */}
          <div className="group cursor-pointer">
             <div className="relative rounded-xl overflow-hidden shadow-md aspect-video mb-4">
                <img src="https://picsum.photos/600/340?random=11" alt="Video Thumb" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    <Play fill="white" size={20} />
                  </div>
                </div>
                 <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">08:45</div>
             </div>
             <p className="font-bold text-lg leading-tight group-hover:text-[#8B0029] transition-colors">AI로 시작했다가 억지로 끝나는 밸런스 게임 VS</p>
          </div>

          {/* Video 3 */}
          <div className="group cursor-pointer">
             <div className="relative rounded-xl overflow-hidden shadow-md aspect-video mb-4">
                <img src="https://picsum.photos/600/340?random=12" alt="Video Thumb" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    <Play fill="white" size={20} />
                  </div>
                </div>
                 <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">15:20</div>
             </div>
             <p className="font-bold text-lg leading-tight group-hover:text-[#8B0029] transition-colors">[오석주의 책책책 📚] 책 안 읽고 쓴 독후감 "나 널 좋아했어...💗"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;