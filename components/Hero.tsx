
import React from 'react';
import { BRAND_IMAGES } from '../constants/images.ts';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#001B3D] overflow-hidden pt-20">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#00A89E] opacity-15 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#FFCC00] opacity-10 rounded-full blur-[140px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        <div className="text-white space-y-10 text-center lg:text-left">
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[#FFCC00] text-xs font-black uppercase tracking-[0.3em] mx-auto lg:mx-0">
            <span className="w-2 h-2 rounded-full bg-[#FFCC00] animate-pulse"></span>
            <span>Programa Oficial de Representantes</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
            Construa sua <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A89E] to-white">Liberdade Financeira.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100/80 max-w-xl leading-relaxed font-medium mx-auto lg:mx-0">
            Torne-se o braço direito de milhares de estabelecimentos. Ofereça a tecnologia ComprePag, garanta taxas imbatíveis e construa uma renda recorrente vitalícia.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center lg:justify-start">
            <a href="#contato" className="px-12 py-6 bg-[#00A89E] rounded-2xl font-black text-xl transition-all hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(0,168,158,0.6)] shadow-xl text-center">
              QUERO SER UM LÍDER
            </a>
            <div className="flex items-center space-x-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
               <div className="w-10 h-10 bg-[#00A89E]/20 rounded-full flex items-center justify-center">
                 <svg className="w-5 h-5 text-[#00A89E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
               </div>
              <span className="text-xs font-bold text-blue-200 tracking-tight">Comissão recorrente vitalícia</span>
            </div>
          </div>
        </div>

        {/* Maquininha ComprePag - Lifestyle Showcase */}
        <div className="relative flex justify-center items-center py-12 lg:py-0">
          <div className="relative z-20 w-full max-w-lg group">
             {/* Efeito de brilho de fundo */}
             <div className="absolute inset-0 bg-gradient-to-tr from-[#00A89E]/20 to-transparent rounded-full blur-[100px] animate-pulse"></div>
             
             {/* Contêiner da Imagem Lifestyle */}
             <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border-8 border-white/10 backdrop-blur-sm transform -rotate-2 group-hover:rotate-0 transition-all duration-700 hover:scale-[1.02]">
               <img 
                 src={BRAND_IMAGES.PRODUCT_MACHINE} 
                 alt="ComprePag Terminal em Uso"
                 className="w-full h-auto object-cover"
                 onError={(e) => {
                   const target = e.target as HTMLImageElement;
                   target.src = BRAND_IMAGES.FALLBACK;
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#001B3D]/40 to-transparent"></div>
             </div>
             
             {/* Selo Promocional: Receba na Hora */}
             <div className="absolute -top-10 -right-4 bg-[#FFCC00] px-10 py-8 rounded-[3rem] shadow-2xl rotate-12 animate-bounce-slow border-4 border-[#001B3D] z-30">
                <p className="text-[#001B3D] font-black text-2xl tracking-tighter uppercase italic leading-none text-center">
                  Receba<br/><span className="text-4xl">na Hora</span>
                </p>
             </div>

             {/* Badge Flutuante Inferior */}
             <div className="absolute -bottom-8 -left-4 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl hidden md:block animate-float-delayed z-30">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#00A89E] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-white font-black text-sm tracking-tight leading-none">TECNOLOGIA 4G</p>
                    <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest mt-1">Conexão Ininterrupta</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 6s ease-in-out infinite 1.5s; }
      `}</style>
    </section>
  );
};

export default Hero;
