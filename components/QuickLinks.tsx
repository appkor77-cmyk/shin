import React from 'react';
import { Ticket, Instagram, MapPin, ArrowRight } from 'lucide-react';

const QuickLinks: React.FC = () => {
  const links = [
    {
      title: '티켓 예매',
      subtitle: 'RESERVATION',
      icon: <Ticket className="w-8 h-8" />,
      color: 'from-gray-800 to-gray-900',
      textColor: 'text-gray-100',
      image: 'https://images.unsplash.com/photo-1516284898687-0b6158580628?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: '인스타그램',
      subtitle: 'INSTAGRAM',
      icon: <Instagram className="w-8 h-8" />,
      color: 'from-purple-600 to-pink-500',
      textColor: 'text-white',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: '구장 찾아오시는길',
      subtitle: 'LOCATION',
      icon: <MapPin className="w-8 h-8" />,
      color: 'from-green-700 to-green-600',
      textColor: 'text-white',
      image: 'https://images.unsplash.com/photo-1574602305317-64b58e65f3a0?auto=format&fit=crop&q=80&w=600',
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      <h3 className="text-2xl font-bold mb-8 text-center md:text-left">히어로즈 바로가기</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {links.map((link, index) => (
          <div 
            key={index}
            className={`group relative overflow-hidden rounded-2xl h-48 shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-2`}
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
               <img src={link.image} alt={link.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-90 transition-opacity duration-300 group-hover:opacity-80`}></div>
            </div>

            <div className="relative h-full p-6 flex flex-col justify-between z-10">
              <div className="flex justify-between items-start">
                <div>
                   <h4 className={`text-2xl font-bold ${link.textColor}`}>{link.title}</h4>
                   <p className={`text-xs font-medium tracking-widest mt-1 opacity-70 ${link.textColor}`}>{link.subtitle}</p>
                </div>
                <div className={`p-2 rounded-lg bg-white/20 backdrop-blur-sm ${link.textColor}`}>
                   {link.icon}
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm font-bold text-white opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                바로가기 <ArrowRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;