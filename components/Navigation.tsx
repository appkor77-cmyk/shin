import React, { useState, useEffect } from 'react';
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HEROES', href: '#' },
    { name: 'PLAYERS', href: '#' },
    { name: 'GAMES', href: '#' },
    { name: 'STATS', href: '#' },
    { name: 'STORY', href: '#' },
    { name: 'FANS', href: '#' },
    { name: 'TICKET', href: '#' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-3 text-slate-900'
          : 'bg-gradient-to-b from-black/60 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-black text-2xl tracking-tighter italic">
          <span className="text-burgundy-600">KIWOOM</span>
          <span>HEROES</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold tracking-wide hover:text-[#8B0029] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B0029] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Icons */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="flex items-center gap-4 text-xs font-medium opacity-80">
            <a href="#" className="hover:underline">LOGIN</a>
            <span className="w-px h-3 bg-current"></span>
            <a href="#" className="hover:underline">JOIN</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <ShoppingBag size={20} />
            </button>
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 text-slate-900 border-t">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-bold border-b pb-2 border-gray-100">
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 mt-4 text-sm font-medium text-gray-500">
             <a href="#">로그인</a>
             <a href="#">회원가입</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;