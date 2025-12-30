
import React from 'react';
import { BRAND_IMAGES } from '../constants/images';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#001B3D] overflow-hidden pt-20">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#00A89E] opacity-15 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#FFCC00] opacity-10 rounded-full blur-[140px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div className="text-white space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[#FFCC00] text-xs font-black uppercase tracking-[0.3em] mx-auto lg:mx-0">
            <span className="w-2 h-2 rounded-full bg-[#FFCC00] animate-pulse"></span>
            <span>Oportunidade de Carreira 2024</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
            Construa sua <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A89E] to-white">Liberdade Financeira.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100/80 max-w-xl leading-relaxed font-medium mx-auto lg:mx-0">
            Torne-se um representante da tecnologia de pagamentos que mais cresce no Brasil. 
            Venda máquinas, ofereça crédito e lidere equipes com um investimento único.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <a href="#contato" className="px-10 py-5 bg-[#00A89E] rounded-2xl font-black text-xl transition-all hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(0,168,158,0.6)] shadow-xl text-center">
              COMEÇAR AGORA POR R$ 100
            </a>
            <div className="flex items-center space-x-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#001B3D] bg-gray-400 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Partner" />
                  </div>
                ))}
              </div>
              <span className="text-xs font-bold text-blue-200">Mais de 12k parceiros ativos</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center py-12 lg:py-0">
          <div className="relative z-20 transform rotate-2 hover:rotate-0 transition-transform duration-700">
            <div className="relative p-3 bg-gradient-to-br from-white/20 to-transparent rounded-[3.5rem] shadow-2xl backdrop-blur-md border border-white/10">
              <img 
                src={BRAND_IMAGES.HERO_REPRESENTATIVE} 
                alt="Líder ComprePag" 
                className="w-[320px] sm:w-[500px] h-auto rounded-[3rem] shadow-2xl brightness-110 object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null; 
                  e.currentTarget.src = BRAND_IMAGES.FALLBACK;
                }}
              />
              
              {/* Floating Performance Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 animate-bounce-slow">
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Ganhos Médios</p>
                 <p className="text-2xl font-black text-[#001B3D]">R$ 8.450,00</p>
                 <div className="flex items-center text-[#00A89E] text-[10px] font-black mt-1">
                   <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"/></svg>
                   Mês / Recorrência
                 </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[120%] h-[120%] bg-[#00A89E]/10 rounded-full blur-[120px] -z-10"></div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
