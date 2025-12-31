
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import EarningCalculator from './components/EarningCalculator.tsx';
import ContactForm from './components/ContactForm.tsx';
import Machine3DGenerator from './components/Machine3DGenerator.tsx';
import CookieConsent from './components/CookieConsent.tsx';
import LegalModals from './components/LegalModals.tsx';

const App: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const whatsappNumber = "5592981061163";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20como%20ser%20um%20representante%20ComprePag.`;

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
                Equipamentos de ponta e um portfólio completo de serviços financeiros para maximizar seus lucros.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Hardware de Elite", desc: "Terminais ultrarrápidos com tecnologia de chip 4G ilimitado.", icon: "🔋", color: "bg-blue-50/50" },
                { title: "Comissão Recorrente", desc: "Ganhos sobre cada transação realizada mensalmente.", icon: "💰", color: "bg-[#00A89E]/5" },
                { title: "Produtos COBAN", desc: "Acesso a crédito, consórcios e seguros para sua rede.", icon: "🏛️", color: "bg-[#FFCC00]/5" },
                { title: "Gestão Inteligente", desc: "Plataforma para gerenciar vendas e equipe em tempo real.", icon: "📊", color: "bg-blue-50/50" }
              ].map((item, i) => (
                <div key={i} className={`p-10 rounded-[3rem] ${item.color} border border-transparent hover:border-gray-100 transition-all group shadow-sm hover:shadow-2xl hover:-translate-y-2 duration-500`}>
                  <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">{item.icon}</div>
                  <h3 className="text-xl font-black text-[#001B3D] mb-4 uppercase tracking-tight leading-tight">{item.title}</h3>
                  <p className="text-gray-500 font-semibold leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Showcase Premium */}
        <section id="como-funciona" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#001B3D] rounded-[5rem] lg:rounded-[8rem] p-12 lg:p-32 text-white relative overflow-hidden shadow-[0_80px_150px_-30px_rgba(0,0,0,0.6)]">
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
                        {step: "02", t: "Ecossistema COBAN", d: "Expanda seus ganhos oferecendo crédito, consórcios e seguros além das máquinas."},
                        {step: "03", t: "Comissão Recorrente", d: "Construa uma carteira sólida e ganhe sobre cada transação realizada mensalmente."}
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

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all transform hover:scale-110 flex items-center group border-4 border-white"
        title="Atendimento WhatsApp"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-black uppercase text-xs px-0 group-hover:pr-4 tracking-widest order-first">Atendimento WhatsApp</span>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.174c1.511.886 3.356 1.352 5.223 1.352 5.352 0 9.706-4.354 9.709-9.707.001-2.596-1.011-5.036-2.85-6.875-1.839-1.838-4.278-2.848-6.873-2.848-5.353 0-9.706 4.353-9.709 9.707-.001 1.832.518 3.619 1.5 5.16l-.979 3.57 3.656-.959zm9.932-6.684c-.267-.134-1.579-.779-1.824-.867-.245-.089-.423-.134-.601.134-.178.267-.69.867-.846 1.045-.156.178-.312.2-.579.067-.267-.134-1.127-.416-2.146-1.326-.792-.706-1.327-1.579-1.482-1.846-.156-.267-.017-.411.117-.544.121-.12.267-.312.4-.467.134-.156.178-.267.267-.445.089-.178.045-.334-.022-.467-.067-.134-.601-1.446-.824-1.981-.218-.523-.438-.452-.601-.461-.153-.008-.329-.01-.505-.01-.178 0-.467.067-.712.334-.245.267-.935.913-.935 2.226 0 1.313.957 2.582 1.091 2.76.134.178 1.884 2.876 4.564 4.034.638.276 1.136.441 1.524.564.641.204 1.224.175 1.685.107.514-.077 1.579-.645 1.801-1.268.222-.623.222-1.157.156-1.268-.067-.111-.245-.178-.512-.312z"/>
        </svg>
      </a>

      <footer className="bg-[#001B3D] text-gray-500 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 text-center md:text-left">
            <div className="col-span-1 md:col-span-2 space-y-12">
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="w-14 h-14 bg-[#00A89E] rounded-2xl flex items-center justify-center shadow-2xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none">Compre<span className="text-[#00A89E]">Pag</span></span>
                  <span className="text-[10px] text-white/30 font-black uppercase tracking-[0.4em] mt-1">Partners Portal</span>
                </div>
              </div>
              <p className="text-xl max-w-sm leading-relaxed font-medium text-gray-400 mx-auto md:mx-0">
                Liderando a revolução nos meios de pagamento através de parceiros estrategicamente posicionados.
              </p>
            </div>

            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10">Mapa do Portal</h4>
              <ul className="space-y-6 text-sm font-bold">
                <li><a href="#beneficios" className="hover:text-[#00A89E] transition-colors">Diferenciais</a></li>
                <li><a href="#calculadora" className="hover:text-[#00A89E] transition-colors">Simulador</a></li>
                <li><a href="#contato" className="hover:text-[#00A89E] transition-colors">Seja Parceiro</a></li>
              </ul>
            </div>

            <div className="space-y-12">
              <div className="space-y-4">
                <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Atendimento</h4>
                <p className="text-white font-black text-2xl">92 98106-1163</p>
                <p className="text-white/40 font-bold text-xs uppercase tracking-widest leading-none">WhatsApp Oficial</p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Jurídico</h4>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                  <li><button onClick={() => setLegalModal('privacy')} className="hover:text-[#00A89E] transition-colors">Privacidade</button></li>
                  <li><button onClick={() => setLegalModal('terms')} className="hover:text-[#00A89E] transition-colors">Termos de Uso</button></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 text-center md:text-left">
              © 2026 ComprePag — Uma empresa gerida por Tek Soluções | CNPJ 07.833.758/0001-50. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              {['FB', 'IG', 'LI'].map(s => (
                <div key={s} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black text-white/30 hover:border-[#00A89E] hover:text-[#00A89E] transition-all cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <CookieConsent />
      <LegalModals isOpen={legalModal} onClose={() => setLegalModal(null)} />
    </div>
  );
};

export default App;
