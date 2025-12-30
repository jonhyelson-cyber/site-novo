
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EarningCalculator from './components/EarningCalculator';
import ContactForm from './components/ContactForm';
import AIChatBot from './components/AIChatBot';
import { BRAND_IMAGES } from './constants/images';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Seção Diferenciais */}
        <section id="beneficios" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-[#001B3D] uppercase tracking-tighter">O Ecossistema <span className="text-[#00A89E]">Mais Completo</span> do Brasil</h2>
              <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">Tudo o que você precisa para gerir sua carteira e expandir seus negócios em um só lugar.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Tecnologia 4G Grátis", desc: "Todas as nossas máquinas vêm com chip e dados inclusos.", icon: "📡", color: "bg-blue-50" },
                { title: "Liquidez D+0", desc: "Receba suas comissões no mesmo dia via PIX ou conta digital.", icon: "⚡", color: "bg-[#00A89E]/10" },
                { title: "App de Gestão", desc: "Acompanhe cada venda da sua rede pelo celular em tempo real.", icon: "📱", color: "bg-[#FFCC00]/10" }
              ].map((item, i) => (
                <div key={i} className={`p-10 rounded-[2.5rem] ${item.color} border border-transparent hover:border-gray-200 transition-all group`}>
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-2xl font-black text-[#001B3D] mb-4 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Como Funciona */}
        <section id="como-funciona" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#001B3D] rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-1/3 h-full bg-[#00A89E] opacity-5 -skew-x-12 translate-x-20"></div>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-8">Comece seu negócio em <span className="text-[#FFCC00]">3 Passos.</span></h2>
                    <div className="space-y-12">
                      {[
                        {step: "01", t: "Cadastro e Ativação", d: "Preencha seus dados e pague a taxa única de R$ 100,00 para liberar sua plataforma."},
                        {step: "02", t: "Treinamento Exclusivo", d: "Acesse nossa universidade corporativa e aprenda as estratégias dos Top 1% Líderes."},
                        {step: "03", t: "Expanda e Lucre", d: "Comece a credenciar lojistas e montar sua equipe. Receba bônus de liderança diários."}
                      ].map((s, i) => (
                        <div key={i} className="flex items-start space-x-6">
                          <span className="text-5xl font-black text-[#00A89E] leading-none opacity-50">{s.step}</span>
                          <div>
                            <h4 className="text-xl font-black uppercase mb-2 tracking-tight">{s.t}</h4>
                            <p className="text-blue-100/70 font-medium">{s.d}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                 </div>
                 <div className="flex justify-center">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-[#00A89E] blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      <img 
                        src={BRAND_IMAGES.PRODUCT_MACHINE} 
                        alt="Maquininha ComprePag" 
                        className="w-[300px] md:w-[450px] drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)] relative z-10" 
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = BRAND_IMAGES.FALLBACK; }}
                      />
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        <EarningCalculator />
        <ContactForm />
      </main>

      <footer className="bg-[#001B3D] text-gray-400 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="w-10 h-10 bg-[#00A89E] rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-3xl font-black text-white tracking-tighter uppercase">Compre<span className="text-[#00A89E]">Pag</span></span>
              </div>
              <p className="text-lg max-w-sm leading-relaxed mx-auto md:mx-0">A maior oportunidade de renda recorrente no Brasil. Junte-se a nós hoje.</p>
            </div>
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-6">Explore</h4>
              <ul className="space-y-4 text-sm font-bold">
                <li><a href="#beneficios" className="hover:text-[#00A89E] transition-colors">Benefícios</a></li>
                <li><a href="#calculadora" className="hover:text-[#00A89E] transition-colors">Simular Ganhos</a></li>
                <li><a href="#contato" className="hover:text-[#00A89E] transition-colors">Seja Parceiro</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-6">Contato</h4>
              <p className="text-white font-black text-2xl mb-2">0800 591 6142</p>
              <p className="text-sm opacity-60">Suporte ao Representante</p>
            </div>
          </div>
        </div>
      </footer>

      <AIChatBot />
    </div>
  );
};

export default App;
