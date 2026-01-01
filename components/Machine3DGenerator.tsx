
import React from 'react';
import { BRAND_IMAGES } from '../constants/images.ts';

const Machine3DGenerator: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl flex flex-col items-center group">
      {/* Container de Imagem em Ação */}
      <div className="relative w-full aspect-square rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border border-white/10 bg-[#000814] transition-all duration-700 group-hover:-translate-y-4">
        
        {/* Imagem Real de Pagamento */}
        <img 
          src={BRAND_IMAGES.PAYMENT_ACTION} 
          alt="Operação de pagamento real"
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
        />
        
        {/* Brilho de Fundo e Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001B3D] via-transparent to-transparent opacity-90"></div>
        
        {/* Conteúdo Informativo */}
        <div className="absolute inset-x-12 bottom-12 space-y-6">
          <div className="w-16 h-16 bg-[#00A89E] rounded-2xl flex items-center justify-center shadow-2xl transition-transform group-hover:rotate-12">
             <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
             </svg>
          </div>
          
          <div className="text-left space-y-2">
             <h3 className="text-white font-black text-4xl tracking-tighter italic uppercase leading-none">Lucro Real <br/><span className="text-[#00A89E]">em Cada Venda</span></h3>
             <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Sua equipe transacionando, você lucrando.</p>
          </div>
        </div>
      </div>
      
      {/* Specs Cards */}
      <div className="mt-12 grid grid-cols-2 gap-6 w-full text-left">
        <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-3xl group/card transition-all hover:bg-[#00A89E]/10">
          <div className="text-4xl mb-6">🤝</div>
          <p className="text-white/40 font-black text-[9px] uppercase tracking-[0.3em] mb-2">Parceria</p>
          <p className="text-white font-bold text-sm">Fidelização Real</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-3xl group/card transition-all hover:bg-[#00A89E]/10">
          <div className="text-4xl mb-6">💰</div>
          <p className="text-white/40 font-black text-[9px] uppercase tracking-[0.3em] mb-2">Ganhos</p>
          <p className="text-white font-bold text-sm">Recorrência Diária</p>
        </div>
      </div>
    </div>
  );
};

export default Machine3DGenerator;
