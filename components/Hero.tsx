
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#001B3D] overflow-hidden pt-20">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#00A89E] opacity-15 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#FFCC00] opacity-10 rounded-full blur-[140px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div className="text-white space-y-10 text-center lg:text-left">
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
            Venda soluções, ofereça crédito e lidere equipes com um investimento único de R$ 100.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center lg:justify-start">
            <a href="#contato" className="px-12 py-6 bg-[#00A89E] rounded-2xl font-black text-xl transition-all hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(0,168,158,0.6)] shadow-xl text-center">
              COMEÇAR AGORA POR R$ 100
            </a>
            <div className="flex items-center space-x-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#001B3D] bg-gray-600 flex items-center justify-center overflow-hidden">
                    <span className="text-[10px] font-bold">CP</span>
                  </div>
                ))}
              </div>
              <span className="text-xs font-bold text-blue-200 tracking-tight">+12k parceiros ativos</span>
            </div>
          </div>
        </div>

        {/* Removed Image and replaced with an abstract interactive visual card */}
        <div className="relative flex justify-center items-center py-12 lg:py-0">
          <div className="relative z-20 w-full max-w-md aspect-square bg-gradient-to-br from-white/10 to-transparent rounded-[4rem] border border-white/10 backdrop-blur-3xl shadow-2xl p-12 flex flex-col justify-center items-center text-center">
             <div className="w-24 h-24 bg-[#00A89E] rounded-3xl flex items-center justify-center shadow-2xl mb-8 animate-float">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
             </div>
             <h3 className="text-white text-3xl font-black uppercase tracking-tighter mb-4">Plataforma de Alta Performance</h3>
             <p className="text-blue-100/50 font-medium">Gestão de comissões, rede de parceiros e carteira de clientes em um só lugar.</p>
             
             <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                   <p className="text-[10px] font-black text-[#00A89E] uppercase tracking-widest">Recorrência</p>
                   <p className="text-xl font-bold text-white">Mensal</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                   <p className="text-[10px] font-black text-[#FFCC00] uppercase tracking-widest">Taxa</p>
                   <p className="text-xl font-bold text-white">R$ 100,00</p>
                </div>
             </div>
          </div>
          <div className="absolute w-[130%] h-[130%] bg-[#00A89E]/10 rounded-full blur-[140px] -z-10 animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
