
import React from 'react';
import { BRAND_IMAGES } from '../constants/images.ts';

const Machine3DGenerator: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl flex flex-col items-center">
      {/* Glow de fundo para profundidade */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-tr from-[#00A89E]/25 to-transparent rounded-full blur-[140px] -z-10 animate-pulse"></div>
      
      <div className="relative z-10 w-full flex flex-col items-center group">
        
        {/* Container de Imagem Estilo Lifestyle */}
        <div className="relative w-full aspect-square max-w-[550px] flex items-center justify-center rounded-[4rem] overflow-hidden border-8 border-white/10 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.8)] transform rotate-3 transition-all duration-1000 group-hover:rotate-0 hover:scale-[1.02]">
          <img 
            src={BRAND_IMAGES.PRODUCT_MACHINE} 
            alt="Hardware Profissional ComprePag" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = BRAND_IMAGES.FALLBACK;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001B3D]/60 via-transparent to-transparent"></div>
          
          {/* Legend Overlay */}
          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
             <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-[#00A89E] text-white text-[8px] font-black uppercase tracking-[0.3em] rounded-full">Recurso Premium</span>
                <h4 className="text-white text-3xl font-black tracking-tighter leading-none italic uppercase">Design de Elite</h4>
             </div>
             <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <span className="text-white text-xs font-black">TOUCH HD</span>
             </div>
          </div>
        </div>

        {/* Grid de Diferenciais Técnicos */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full px-6">
          <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem] backdrop-blur-xl transition-all hover:bg-white/10">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 bg-[#00A89E] rounded-2xl flex items-center justify-center font-black text-white">4G</div>
              <h5 className="text-[#00A89E] font-black text-xs uppercase tracking-[0.2em]">Conectividade</h5>
            </div>
            <p className="text-white text-xl font-black tracking-tighter">Chip Ilimitado + Wi-Fi</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem] backdrop-blur-xl transition-all hover:bg-white/10">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 bg-[#FFCC00] rounded-2xl flex items-center justify-center font-black text-[#001B3D]">PAY</div>
              <h5 className="text-[#FFCC00] font-black text-xs uppercase tracking-[0.2em]">Pagamentos</h5>
            </div>
            <p className="text-white text-xl font-black tracking-tighter">NFC, QR & Pix</p>
          </div>
        </div>

        <div className="mt-16 text-center">
           <p className="text-blue-100/40 text-[10px] font-black uppercase tracking-[0.4em] mb-8">Hardware testado e aprovado em campo</p>
           <a 
            href="#contato"
            className="group relative inline-flex items-center px-16 py-8 bg-[#00A89E] rounded-[2.5rem] transition-all hover:scale-105 hover:bg-[#008e85] shadow-[0_30px_70px_-15px_rgba(0,168,158,0.6)]"
          >
            <span className="relative z-10 flex items-center space-x-6">
              <span className="text-white font-black text-lg uppercase tracking-[0.3em]">Credenciar Agora</span>
              <svg className="w-6 h-6 text-white transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Machine3DGenerator;
