import React from 'react';
import { Plus } from 'lucide-react';
import type { NewsItem } from '../types';

const NewsSection: React.FC = () => {
  const news: NewsItem[] = [
    {
      id: '1',
      title: '키움히어로즈 출신 변상권 결혼',
      date: '2025-12-19',
      category: 'NEWS',
      imageUrl: 'https://picsum.photos/400/300?random=1'
    },
    {
      id: '2',
      title: '2026시즌 외국인 선수 구성 완료',
      date: '2025-12-16',
      category: 'TEAM',
      imageUrl: 'https://picsum.photos/400/300?random=2'
    },
    {
      id: '3',
      title: '송성문 키움증권 발행어음 기간형 1호 가입',
      date: '2025-12-16',
      category: 'EVENT',
      imageUrl: 'https://picsum.photos/400/300?random=3'
    },
    {
      id: '4',
      title: '투수 양지율 결혼',
      date: '2025-12-11',
      category: 'NEWS',
      imageUrl: 'https://picsum.photos/400/300?random=4'
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-2xl font-bold text-slate-900">히어로즈 구단 소식</h3>
          <button className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-[#8B0029] transition-colors">
            더보기 <Plus size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#8B0029] text-white text-[10px] font-bold px-2 py-1 rounded">
                  {item.category}
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-gray-900 mb-3 line-clamp-2 leading-snug group-hover:text-[#8B0029] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400 font-medium">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;