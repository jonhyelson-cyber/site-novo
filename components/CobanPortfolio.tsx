
import React from 'react';

const CobanPortfolio: React.FC = () => {
  const products = [
    { title: "Capital de Giro", icon: "🏢", desc: "Crédito rápido para empresas crescerem." },
    { title: "Consignados", icon: "📄", desc: "As melhores taxas para servidores e aposentados." },
    { title: "Empréstimos com Garantia", icon: "🏠", desc: "Use seu imóvel ou veículo para taxas menores." },
    { title: "Financiamentos", icon: "🚗", desc: "Soluções para aquisição de bens e veículos." },
    { title: "Energia por Assinatura", icon: "⚡", desc: "Economia garantida na conta de luz sem investimento." },
    { title: "Consórcios", icon: "🤝", desc: "A forma mais inteligente de planejar conquistas." },
    { title: "Seguros", icon: "🛡️", desc: "Proteção completa para vida, auto e residência." },
    { title: "Precatórios", icon: "⚖️", desc: "Antecipação de recebíveis judiciais com agilidade." }
  ];

  return (
    <section className="py-32 bg-[#001B3D] relative overflow-hidden">
      {/* Elementos Decorativos */}
      <div className="absolute top-0 right-0 w-full h-full bg-[#00A89E] opacity-[0.02] -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#00A89E]/20 text-[#00A89E] text-[10px] font-black uppercase tracking-[0.4em] mb-6 border border-[#00A89E]/30">
            Ecossistema Financeiro Completo
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            Muito além da <br/><span className="text-[#00A89E]">Maquininha.</span>
          </h2>
          <p className="mt-8 text-xl text-blue-100/40 max-w-3xl mx-auto font-medium leading-relaxed">
            Como representante ComprePag, você terá em mãos um portfólio completo de <span className="text-white">Correspondente Bancário (COBAN)</span>, permitindo múltiplas fontes de receita recorrente.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00A89E]/50 transition-all duration-500 shadow-xl">
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-500 origin-left">
                {product.icon}
              </div>
              <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight leading-tight group-hover:text-[#00A89E] transition-colors">
                {product.title}
              </h3>
              <p className="text-white/40 font-semibold leading-relaxed text-xs">
                {product.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-r from-[#00A89E]/20 to-transparent border border-white/10 flex flex-col items-center text-center">
          <div className="max-w-2xl">
            <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-2">Potencialize seus Ganhos</h4>
            <p className="text-blue-100/60 font-medium text-sm">Cada produto do mix COBAN gera comissões agressivas e exclusivas para nossa rede de líderes em todo o território nacional.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CobanPortfolio;
