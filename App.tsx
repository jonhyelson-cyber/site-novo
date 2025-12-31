
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EarningCalculator from './components/EarningCalculator';
import ContactForm from './components/ContactForm';
import AIChatBot from './components/AIChatBot';
import Machine3DGenerator from './components/Machine3DGenerator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-[#00A89E] selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Seção Diferenciais */}
        <section id="beneficios" className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#00A89E]/10 text-[#00A89E] text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                Liderança & Tecnologia
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-[#001B3D] uppercase tracking-tighter leading-none mb-8">
                O Ecossistema <br className="hidden md:block"/><span className="text-[#00A89E]">Mais Robusto</span> do Mercado
              </h2>
              <p className="mt-8 text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
                Equipamentos de ponta com a maior rentabilidade para quem decide liderar o mercado de pagamentos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { title: "Hardware de Elite", desc: "Terminais ultrarrápidos com tecnologia de chip 4G ilimitado e bateria de alto ciclo.", icon: "🔋", color: "bg-blue-50/50" },
                { title: "Comissão Instantânea", desc: "Seus ganhos são creditados na sua conta digital ComprePag em tempo real, sem carência.", icon: "💰", color: "bg-[#00A89E]/5" },
                { title: "Gestão Inteligente", desc: "App white-label completo para gerenciar suas vendas e sua equipe em qualquer lugar.", icon: "📊", color: "bg-[#FFCC00]/5" }
              ].map((item, i) => (
                <div key={i} className={`p-14 rounded-[4rem] ${item.color} border border-transparent hover:border-gray-100 transition-all group shadow-sm hover:shadow-2xl hover:-translate-y-2 duration-500`}>
                  <div className="text-6xl mb-10 group-hover:scale-110 transition-transform duration-500 origin-left">{item.icon}</div>
                  <h3 className="text-2xl font-black text-[#001B3D] mb-6 uppercase tracking-tight leading-tight">{item.title}</h3>
                  <p className="text-gray-500 font-semibold leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Showcase Premium (Now Static) */}
        <section id="como-funciona" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#001B3D] rounded-[5rem] lg:rounded-[8rem] p-12 lg:p-32 text-white relative overflow-hidden shadow-[0_80px_150px_-30px_rgba(0,0,0,0.6)]">
               {/* Decorative elements */}
               <div className="absolute top-0 right-0 w-full h-full bg-[#00A89E] opacity-[0.03] -skew-x-12 translate-x-1/2"></div>
               <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFCC00] blur-[150px] opacity-10"></div>
               
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                 <div className="space-y-16">
                    <div className="space-y-6">
                      <div className="inline-block px-4 py-1 rounded-full border border-[#00A89E]/30 text-[#00A89E] text-[10px] font-black uppercase tracking-[0.4em]">
                        Product Design
                      </div>
                      <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]">
                        Hardware <br/>
                        <span className="text-[#00A89E]">Premium.</span>
                      </h2>
                    </div>

                    <p className="text-xl text-blue-100/50 font-medium max-w-lg leading-relaxed">
                      Nosso terminal ComprePag foi projetado para alta performance sob demanda. Explore a tecnologia que seus clientes vão amar usar.
                    </p>
                    
                    <div className="grid grid-cols-1 gap-12">
                      {[
                        {step: "01", t: "Ativação Digital", d: "Liberação imediata do seu painel de parceiro após a adesão simbólica de R$ 100."},
                        {step: "02", t: "Logística Express", d: "Entrega prioritária de terminais em todo o território nacional."},
                        {step: "03", t: "Recorrência Infinita", d: "Construa uma carteira sólida e ganhe sobre cada transação realizada."}
                      ].map((s, i) => (
                        <div key={i} className="flex items-start space-x-8 group">
                          <span className="text-7xl font-black text-white/5 group-hover:text-[#00A89E]/20 transition-colors leading-none select-none">{s.step}</span>
                          <div className="pt-2">
                            <h4 className="text-xl font-black uppercase mb-3 tracking-tight text-white group-hover:text-[#00A89E] transition-colors">{s.t}</h4>
                            <p className="text-blue-100/40 font-medium text-sm leading-relaxed">{s.d}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                 </div>

                 {/* Premium Machine Showcase */}
                 <div className="flex flex-col items-center justify-center">
                    <div className="w-full h-full min-h-[500px] flex items-center justify-center">
                      <Machine3DGenerator />
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        <EarningCalculator />
        <ContactForm />
      </main>

      <footer className="bg-[#001B3D] text-gray-500 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
            <div className="col-span-1 md:col-span-2 space-y-12">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-[#00A89E] rounded-2xl flex items-center justify-center shadow-2xl shadow-[#00A89E]/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none">Compre<span className="text-[#00A89E]">Pag</span></span>
                  <span className="text-[10px] text-white/30 font-black uppercase tracking-[0.4em] mt-1">Partners Portal</span>
                </div>
              </div>
              <p className="text-xl max-w-sm leading-relaxed font-medium text-gray-400">
                Liderando a revolução nos meios de pagamento através de parceiros estrategicamente posicionados.
              </p>
              <div className="flex space-x-6">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 bg-white/5 rounded-2xl border border-white/10 hover:border-[#00A89E] hover:bg-[#00A89E]/10 transition-all cursor-pointer flex items-center justify-center group">
                    <div className="w-2 h-2 bg-white/20 rounded-full group-hover:bg-[#00A89E]"></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10">Mapa do Portal</h4>
              <ul className="space-y-6 text-sm font-bold">
                <li><a href="#beneficios" className="hover:text-[#00A89E] transition-all flex items-center group"><span className="w-0 group-hover:w-4 transition-all h-[2px] bg-[#00A89E] mr-0 group-hover:mr-2"></span>Diferenciais</a></li>
                <li><a href="#calculadora" className="hover:text-[#00A89E] transition-all flex items-center group"><span className="w-0 group-hover:w-4 transition-all h-[2px] bg-[#00A89E] mr-0 group-hover:mr-2"></span>Simulador de Lucros</a></li>
                <li><a href="#como-funciona" className="hover:text-[#00A89E] transition-all flex items-center group"><span className="w-0 group-hover:w-4 transition-all h-[2px] bg-[#00A89E] mr-0 group-hover:mr-2"></span>Tecnologia</a></li>
                <li><a href="#contato" className="hover:text-[#00A89E] transition-all flex items-center group"><span className="w-0 group-hover:w-4 transition-all h-[2px] bg-[#00A89E] mr-0 group-hover:mr-2"></span>Seja Parceiro</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10">Suporte ao Líder</h4>
              <div>
                <p className="text-white font-black text-3xl mb-1 tracking-tighter">0800 591 6142</p>
                <p className="text-[10px] uppercase tracking-widest font-black text-white/30">Linha Direta Expansão</p>
              </div>
              <div className="pt-8">
                <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem]">
                  <p className="text-[10px] font-black uppercase text-white/40 mb-3 tracking-widest">Status da Rede</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-black text-white uppercase tracking-widest">Sistemas Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] opacity-40 gap-8">
            <p>© 2024 COMPREPAG PAGAMENTOS LTDA.</p>
            <div className="flex items-center space-x-8">
              <p>POLÍTICA DE PRIVACIDADE</p>
              <p>TERMOS DE PARCERIA</p>
            </div>
            <p className="text-[#00A89E]">SISTEMA OFICIAL DE EXPANSAO</p>
          </div>
        </div>
      </footer>

      <AIChatBot />
    </div>
  );
};

export default App;
