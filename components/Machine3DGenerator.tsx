
import React from 'react';

const Machine3DGenerator: React.FC = () => {
  // Now displaying a stylized tech core instead of the machine image

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
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#00A89E]/10 rounded-full blur-[150px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-[#00A89E]/40 blur-[80px] -z-10"></div>
      
      <div className="relative z-10 w-full flex flex-col items-center group">
        
        {/* Main Showcase Stage */}
        <div className="relative w-full aspect-square max-w-[550px] flex items-center justify-center">
          
          {/* Tech Spec Badges */}
          <TechBadge label="4G Ilimitado" icon="📶" position="top-[15%] -left-[5%]" />
          <TechBadge label="NFC / Aproximação" icon="💳" position="top-[45%] -right-[8%]" />
          <TechBadge label="Bateria 48h" icon="⚡" position="bottom-[20%] -left-[10%]" />
          <TechBadge label="Relatórios IA" icon="📊" position="bottom-[5%] right-[5%]" />

          {/* Central Tech Core Animation instead of Image */}
          <div className="relative w-64 h-64 bg-gradient-to-br from-[#00A89E] to-[#001B3D] rounded-full p-1 shadow-[0_0_100px_rgba(0,168,158,0.4)] animate-float flex items-center justify-center">
             <div className="w-full h-full bg-[#001B3D] rounded-full flex flex-col items-center justify-center border-4 border-[#00A89E]/30 relative overflow-hidden">
                {/* Internal dynamic rings */}
                <div className="absolute inset-4 border border-[#00A89E]/20 rounded-full animate-spin [animation-duration:10s]"></div>
                <div className="absolute inset-8 border border-[#FFCC00]/10 rounded-full animate-spin [animation-duration:15s] direction-reverse"></div>
                
                <svg className="w-24 h-24 text-[#00A89E] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <span className="text-white font-black text-xs uppercase tracking-[0.4em] opacity-50">COMPREPAG OS</span>
             </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 w-full px-4">
          <div className="bg-white/5 border border-white/10 p-6 rounded-[2.5rem] backdrop-blur-sm hover:bg-white/10 transition-colors">
            <h5 className="text-[#00A89E] font-black text-[11px] uppercase tracking-widest mb-2">Processamento</h5>
            <p className="text-white text-lg font-black tracking-tighter">Quad-Core ARM v8</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-[2.5rem] backdrop-blur-sm hover:bg-white/10 transition-colors">
            <h5 className="text-[#FFCC00] font-black text-[11px] uppercase tracking-widest mb-2">Conectividade</h5>
            <p className="text-white text-lg font-black tracking-tighter">Wi-Fi + 4G + BT</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-12">
          <a 
            href="#contato"
            className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-[#00A89E] to-[#008e85] rounded-[2.5rem] overflow-hidden transition-all hover:scale-110 shadow-[0_25px_60px_-15px_rgba(0,168,158,0.5)]"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <span className="relative z-10 flex items-center space-x-4">
              <span className="text-white font-black text-sm uppercase tracking-[0.3em]">Seja um Parceiro</span>
              <svg className="w-5 h-5 text-white animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
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
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-bounce-horizontal { animation: bounce-horizontal 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Machine3DGenerator;
