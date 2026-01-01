
import React from 'react';
import MachineVideoShowcase from './MachineVideoShowcase.tsx';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#001B3D] overflow-hidden pt-20">
      {/* Background Decorativo */}
      <div className="absolute inset-0 z-0 text-white/5">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#00A89E]/15 via-transparent to-transparent"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-[#00A89E]/20 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 py-12 md:py-20">
        <div className="text-white space-y-10 text-center lg:text-left">
          <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-white/5 border border-[#FFD700]/30 backdrop-blur-xl text-[#FFD700] text-[10px] font-black uppercase tracking-[0.4em] mx-auto lg:mx-0 shadow-[0_0_20px_rgba(255,215,0,0.1)]">
            <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
            <span>Programa Oficial de Representantes 2026</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter italic uppercase">
            Construa sua <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A89E] to-blue-400">Liberdade</span> <br/>
            Financeira.
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100/60 max-w-xl leading-relaxed font-medium mx-auto lg:mx-0">
            A tecnologia ComprePag está em suas mãos. Torne-se um <span className="text-white font-bold">Líder de Expansão</span>, monte sua rede de representantes e lucre com recorrência real.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-6 justify-center lg:justify-start">
            <a href="#contato" className="px-10 py-6 bg-[#00A89E] text-white rounded-[2.5rem] font-black text-lg transition-all hover:scale-105 shadow-[0_25px_50px_-12px_rgba(0,168,158,0.5)] text-center uppercase tracking-widest active:scale-95">
              Começar Agora
            </a>
            <div className="flex items-center space-x-4 px-8 py-6 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md">
               <svg className="w-6 h-6 text-[#00A89E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
               <div className="flex flex-col text-left">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/90 leading-none">Adesão Única</span>
                  <span className="text-sm font-bold text-white/50">R$ 100,00</span>
               </div>
            </div>
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right-12 duration-1000 delay-300">
          <MachineVideoShowcase />
        </div>
      </div>
    </section>
  );
};

export default Hero;
