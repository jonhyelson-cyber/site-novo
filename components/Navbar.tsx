
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const whatsappNumber = "5592981061163";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20como%20ser%20um%20representante%20ComprePag.`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Se for link externo (WhatsApp), abre em nova aba
    if (id.startsWith('https')) {
      window.open(id, '_blank');
      return;
    }

    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 100; // Altura do navbar + respiro
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    {label: 'Tecnologia', href: '#beneficios'},
    {label: 'Portfólio', href: '#portfolio'},
    {label: 'Liderança', href: '#lideranca'},
    {label: 'Simulador', href: '#calculadora'},
    {label: 'Suporte', href: whatsappLink, external: true}
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-700 ${scrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-2xl shadow-2xl py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center space-x-3 group cursor-pointer" 
          onClick={(e) => { window.scrollTo({top: 0, behavior: 'smooth'}); setMobileMenuOpen(false); }}
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
             <div className="absolute inset-0 bg-[#00A89E] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#00A89E]/30 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
             </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className={`text-2xl sm:text-3xl font-black tracking-tighter uppercase flex items-center`}>
              <span className={scrolled || mobileMenuOpen ? 'text-[#001B3D]' : 'text-white'}>Compre</span>
              <span className="text-[#00A89E]">Pag</span>
            </span>
            <span className={`text-[7px] sm:text-[8px] font-black tracking-[0.5em] uppercase mt-1 ${scrolled || mobileMenuOpen ? 'text-gray-400' : 'text-white/40'}`}>
              Partner Ecosystem
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-10 items-center">
          {navLinks.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`font-black text-[10px] uppercase tracking-[0.25em] transition-all hover:text-[#00A89E] relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-[#00A89E] after:transition-all hover:after:w-full ${scrolled ? 'text-gray-600' : 'text-white/80'}`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contato" 
            onClick={(e) => scrollToSection(e, '#contato')}
            className="bg-[#001B3D] text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#00A89E] hover:text-white transition-all transform hover:scale-105 shadow-2xl shadow-black/20"
          >
            SEJA UM LÍDER
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-3 rounded-xl transition-all ${scrolled || mobileMenuOpen ? 'text-[#001B3D] bg-gray-100' : 'text-white bg-white/10'}`}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[88px] bg-white border-t border-gray-100 shadow-2xl animate-in slide-in-from-top duration-300 overflow-hidden z-[110]">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-[#001B3D] font-black text-xs uppercase tracking-[0.3em] py-4 border-b border-gray-50 flex justify-between items-center group"
              >
                <span>{item.label}</span>
                <svg className="w-4 h-4 text-[#00A89E] opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
              </a>
            ))}
            <a 
              href="#contato" 
              onClick={(e) => scrollToSection(e, '#contato')}
              className="w-full bg-[#001B3D] text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] text-center shadow-xl"
            >
              SEJA UM LÍDER AGORA
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
