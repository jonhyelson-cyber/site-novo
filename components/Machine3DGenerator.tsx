
import React from 'react';
import { BRAND_IMAGES } from '../constants/images.ts';

const Machine3DGenerator: React.FC = () => {
  const TechBadge = ({ label, icon, position }: { label: string, icon: string, position: string }) => (
    <div className={`absolute ${position} z-30 animate-float-slow`}>
      <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl flex items-center space-x-2 shadow-2xl group hover:scale-110 transition-transform cursor-default">
        <span className="text-xl">{icon}</span>
        <span className="text-[10px] font-black text-white uppercase tracking-widest">{label}</span>
      </div>
    </div>
  );

  return (
    <div className="relative w-full max-w-2xl flex flex-col items-center">
      {/* Luz de Fundo e Brilhos Dinâmicos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-[#00A89E]/20 to-transparent rounded-full blur-[120px] -z-10 animate-pulse"></div>
      
      <div className="relative z-10 w-full flex flex-col items-center group">
        
        {/* Palco de Exibição da Maquininha */}
        <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center perspective-1000">
          
          {/* Selos de Especificação Técnica */}
          <TechBadge label="4G Ilimitado" icon="📶" position="top-[10%] -left-[5%]" />
          <TechBadge label="NFC / Aproximação" icon="💳" position="top-[40%] -right-[10%]" />
          <TechBadge label="Bateria 48h" icon="⚡" position="bottom-[25%] -left-[12%]" />
          <TechBadge label="Relatórios IA" icon="📊" position="bottom-[5%] right-[0%]" />

          {/* Sombra da Máquina */}
          <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[60%] h-12 bg-black/40 blur-[40px] rounded-full scale-y-50 z-0 animate-shadow"></div>

          {/* Container da Imagem com Efeito 3D */}
          <div className="relative z-10 w-full h-full flex items-center justify-center animate-machine-float">
            <div className="relative group/machine transition-transform duration-700 hover:rotate-y-12">
               {/* Reflexo de Vidro/Brilho Superior */}
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover/machine:opacity-100 transition-opacity duration-700 rounded-[3rem] z-20 pointer-events-none"></div>
               
               <img 
                 src={BRAND_IMAGES.PRODUCT_MACHINE} 
                 alt="Maquininha ComprePag Profissional" 
                 className="w-auto h-[450px] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] transform -rotate-3 transition-transform duration-700 group-hover/machine:rotate-0"
               />
            </div>
          </div>
        </div>

        {/* Grade de Destaques de Hardware */}
        <div className="mt-8 grid grid-cols-2 gap-4 w-full px-4">
          <div className="bg-white/5 border border-white/10 p-6 rounded-[2.5rem] backdrop-blur-sm hover:bg-white/10 transition-colors">
            <h5 className="text-[#00A89E] font-black text-[11px] uppercase tracking-widest mb-2">Display</h5>
            <p className="text-white text-lg font-black tracking-tighter">HD Touchscreen</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[2.5rem] backdrop-blur-sm hover:bg-white/10 transition-colors">
            <h5 className="text-[#FFCC00] font-black text-[11px] uppercase tracking-widest mb-2">Impressão</h5>
            <p className="text-white text-lg font-black tracking-tighter">Térmica Ultra-Fast</p>
          </div>
        </div>

        {/* Botão de Chamada para Ação */}
        <div className="mt-12">
          <a 
            href="#contato"
            className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-[#00A89E] to-[#008e85] rounded-[2.5rem] overflow-hidden transition-all hover:scale-110 shadow-[0_25px_60px_-15px_rgba(0,168,158,0.5)]"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <span className="relative z-10 flex items-center space-x-4">
              <span className="text-white font-black text-sm uppercase tracking-[0.3em]">Solicitar esta Máquina</span>
              <svg className="w-5 h-5 text-white animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </span>
          </a>
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .rotate-y-12 { transform: rotateY(12deg); }

        @keyframes machine-float {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-30px) rotate(0deg); }
        }
        
        @keyframes shadow-shrink {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.4; }
          50% { transform: translateX(-50%) scale(0.8); opacity: 0.2; }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-10px) translateX(5px); }
          66% { transform: translateY(5px) translateX(-5px); }
        }

        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }

        .animate-machine-float { animation: machine-float 6s ease-in-out infinite; }
        .animate-shadow { animation: shadow-shrink 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-bounce-horizontal { animation: bounce-horizontal 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Machine3DGenerator;
