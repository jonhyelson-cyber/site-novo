
import React from 'react';
import { BRAND_IMAGES } from '../constants/images.ts';

const MachineVideoShowcase: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto group">
      {/* Moldura da Imagem Real */}
      <div className="relative aspect-[4/3] rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-[#000814] border-4 border-white/10 transition-all duration-700 hover:scale-[1.02]">
        
        {/* Imagem de Parceria */}
        <img 
          src={BRAND_IMAGES.USER_ATTACHED_IMAGE} 
          alt="Representante ComprePag em ação"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        
        {/* Overlay de Gradiente para Profundidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001B3D]/80 via-transparent to-transparent opacity-60"></div>

        {/* Tag de "Em Campo" */}
        <div className="absolute top-8 left-8">
          <div className="bg-[#00A89E] text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">
            Cenário Real
          </div>
        </div>
      </div>

      {/* Card Flutuante de Credibilidade */}
      <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 max-w-xs hidden md:block animate-in slide-in-from-right-8 duration-1000">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-10 h-10 bg-[#FFD700] rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-[#001B3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-[10px] font-black text-[#001B3D] uppercase tracking-widest">Tecnologia Aprovada</span>
        </div>
        <p className="text-gray-500 text-xs font-bold leading-relaxed">
          "A facilidade da ComprePag me permitiu focar no que importa: o atendimento ao meu cliente."
        </p>
      </div>

      {/* Info Tag inferior */}
      <div className="absolute -bottom-6 left-8 bg-[#001B3D] px-8 py-4 rounded-2xl shadow-2xl flex items-center space-x-4 border border-white/10 whitespace-nowrap z-20 transition-all hover:-translate-y-1">
        <div className="relative flex">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-[#00A89E] uppercase tracking-widest leading-none">Expansão Ativa</span>
          <span className="text-[9px] font-bold text-white/50 uppercase tracking-tighter mt-1">Sua Rede Começa Aqui</span>
        </div>
      </div>
    </div>
  );
};

export default MachineVideoShowcase;
