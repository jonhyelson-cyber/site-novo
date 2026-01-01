
import React from 'react';

const LeadershipProgram: React.FC = () => {
  return (
    <section className="py-32 bg-[#f8fafc] border-y border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00A89E]/5 -skew-x-12 translate-x-1/4"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#FFCC00] to-[#00A89E] rounded-[4rem] blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white p-10 rounded-[3.5rem] shadow-2xl border border-white">
                <h3 className="text-2xl font-black text-[#001B3D] mb-8 uppercase tracking-tighter italic">Sua Própria Sub-Adquirente</h3>
                <div className="space-y-6">
                  {[
                    { t: "Ganhos sobre o Time", d: "Receba bônus vitalício sobre o faturamento de cada maquininha ativada pela sua equipe." },
                    { t: "Portal Gestor de Rede", d: "Painel exclusivo para cadastrar representantes e acompanhar a produção em tempo real." },
                    { t: "Suporte à Expansão", d: "Treinamentos prontos para você replicar seu sucesso com seus liderados." }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-6 p-6 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
                       <div className="w-12 h-12 bg-[#001B3D] rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-black">
                         {idx + 1}
                       </div>
                       <div>
                         <h4 className="font-black text-[#001B3D] uppercase text-sm mb-1">{benefit.t}</h4>
                         <p className="text-gray-500 text-xs font-semibold leading-relaxed">{benefit.d}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#FFCC00]/10 text-[#001B3D] text-[10px] font-black uppercase tracking-[0.4em]">
              Alavancagem Comercial
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#001B3D] uppercase tracking-tighter leading-[0.9]">
              Forme sua <br/><span className="text-[#00A89E]">Equipe de Elite.</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-lg">
              Na ComprePag, você não é apenas um vendedor, você é um empresário. Monte seu time de representantes e ganhe participação sobre cada transação realizada por eles.
            </p>
            <div className="pt-6">
              <a href="#contato" className="inline-flex items-center space-x-4 bg-[#001B3D] text-white px-10 py-6 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-[#002a5c] transition-all shadow-2xl hover:scale-105">
                <span>HABILITAR MÓDULO LÍDER</span>
                <svg className="w-5 h-5 text-[#00A89E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipProgram;
