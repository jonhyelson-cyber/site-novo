
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* LOGO OFICIAL COMPREPAG */}
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="relative w-10 h-10 flex-shrink-0">
             <div className="absolute inset-0 bg-[#00A89E] rounded-xl flex items-center justify-center shadow-lg shadow-[#00A89E]/20 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
             </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className={`text-2xl font-black tracking-tighter uppercase flex items-center`}>
              <span className={scrolled ? 'text-[#001B3D]' : 'text-white'}>Compre</span>
              <span className="text-[#00A89E]">Pag</span>
            </span>
            <span className={`text-[8px] font-bold tracking-[0.4em] uppercase ${scrolled ? 'text-gray-400' : 'text-white/40'}`}>
              Tecnologia em Pagamentos
            </span>
          </div>
        </div>

        <div className="hidden lg:flex space-x-10 items-center">
          {['Benefícios', 'Calculadora', 'Como Funciona'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}`} 
              className={`font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:text-[#00A89E] ${scrolled ? 'text-gray-600' : 'text-white/80'}`}
            >
              {item}
            </a>
          ))}
          <a href="#contato" className="bg-[#00A89E] text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#008e85] transition-all transform hover:scale-105 shadow-xl shadow-[#00A89E]/30">
            SEJA UM LÍDER
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button className={scrolled ? 'text-[#001B3D]' : 'text-white'}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
