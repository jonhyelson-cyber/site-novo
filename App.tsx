
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import EarningCalculator from './components/EarningCalculator.tsx';
import ContactForm from './components/ContactForm.tsx';
import Machine3DGenerator from './components/Machine3DGenerator.tsx';
import CookieConsent from './components/CookieConsent.tsx';
import LegalModals from './components/LegalModals.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import LeadershipProgram from './components/LeadershipProgram.tsx';
import CobanPortfolio from './components/CobanPortfolio.tsx';

const App: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen bg-white selection:bg-[#00A89E] selection:text-white">
      <Navbar />
      
      <main>
        {/* HERO SECTION - HOME */}
        <Hero />

        {/* TECNOLOGIA & DIFERENCIAIS */}
        <section id="beneficios" className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-24">
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#00A89E]/10 text-[#00A89E] text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                Tecnologia & Inovação
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-[#001B3D] uppercase tracking-tighter leading-none mb-8">
                Pronto para o <br className="hidden md:block"/><span className="text-[#00A89E]">Próximo Nível</span>
              </h2>
              <p className="mt-8 text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
                Nossas soluções combinam design moderno com as taxas mais competitivas do mercado para atrair os melhores lojistas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Hardware Elite", desc: "Design industrial robusto e conexão ultrarrápida.", icon: "⚡", color: "bg-blue-50/50" },
                { title: "Ganhos em Rede", desc: "Recrute parceiros e lucre sobre o faturamento do time.", icon: "📈", color: "bg-[#00A89E]/5" },
                { title: "Ecossistema", desc: "Mix de produtos financeiros de alta rentabilidade.", icon: "💎", color: "bg-[#FFCC00]/5" },
                { title: "Gestão Real-Time", desc: "App exclusivo para monitorar sua produção e equipe.", icon: "📱", color: "bg-blue-50/50" }
              ].map((item, i) => (
                <div key={i} className={`p-10 rounded-[3rem] ${item.color} border border-transparent hover:border-gray-100 transition-all group shadow-sm hover:shadow-2xl hover:-translate-y-2 duration-500`}>
                  <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">{item.icon}</div>
                  <h3 className="text-xl font-black text-[#001B3D] mb-4 uppercase tracking-tight leading-tight">{item.title}</h3>
                  <p className="text-gray-500 font-semibold leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFÓLIO COBAN */}
        <section id="portfolio">
          <CobanPortfolio />
        </section>

        {/* SEÇÃO DE LIDERANÇA */}
        <section id="lideranca">
          <LeadershipProgram />
        </section>

        {/* VITRINE DA MAQUININHA */}
        <section id="maquina" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#001B3D] rounded-[5rem] lg:rounded-[8rem] p-12 lg:p-32 text-white relative overflow-hidden shadow-[0_80px_150px_-30px_rgba(0,0,0,0.6)]">
               <div className="absolute top-0 right-0 w-full h-full bg-[#00A89E] opacity-[0.03] -skew-x-12 translate-x-1/2"></div>
               <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFCC00] blur-[150px] opacity-10"></div>
               
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                 <div className="space-y-16">
                    <div className="space-y-6">
                      <div className="inline-block px-4 py-1 rounded-full border border-[#00A89E]/30 text-[#00A89E] text-[10px] font-black uppercase tracking-[0.4em]">
                        Performance ComprePag
                      </div>
                      <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85]">
                        A Sua <br/>
                        <span className="text-[#00A89E]">Máquina.</span>
                      </h2>
                    </div>

                    <p className="text-xl text-blue-100/50 font-medium max-w-lg leading-relaxed">
                      Conheça a tecnologia que vai abrir portas para você. Design robusto, processamento rápido e a marca que transmite confiança.
                    </p>
                    
                    <div className="grid grid-cols-1 gap-12">
                      {[
                        {step: "01", t: "Hardware Real", d: "Certificado para altos volumes de transação."},
                        {step: "02", t: "Velocidade", d: "Processamento instantâneo via 4G e Wi-Fi."},
                        {step: "03", t: "Credibilidade", d: "A cor preta com detalhes em verde que impulsiona o PDV."}
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
                    <Machine3DGenerator />
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* CALCULADORA DE GANHOS */}
        <section id="calculadora">
          <EarningCalculator />
        </section>
        
        {/* FORMULÁRIO DE CONTATO */}
        <section id="contato">
          <ContactForm />
        </section>
      </main>

      <WhatsAppButton />
      <CookieConsent />
      <LegalModals isOpen={legalModal} onClose={() => setLegalModal(null)} />

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
                Liderando o mercado através de uma rede de parceiros em todo o Brasil.
              </p>
            </div>

            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10">Mapa do Portal</h4>
              <ul className="space-y-6 text-sm font-bold">
                <li><button onClick={(e) => { const nav = document.querySelector('nav'); if(nav) { const link = nav.querySelector('a[href="#beneficios"]'); if(link) (link as any).click(); } }} className="hover:text-[#00A89E] transition-colors text-left">Benefícios</button></li>
                <li><button onClick={(e) => { const nav = document.querySelector('nav'); if(nav) { const link = nav.querySelector('a[href="#lideranca"]'); if(link) (link as any).click(); } }} className="hover:text-[#00A89E] transition-colors text-left">Liderança</button></li>
                <li><button onClick={(e) => { const nav = document.querySelector('nav'); if(nav) { const link = nav.querySelector('a[href="#calculadora"]'); if(link) (link as any).click(); } }} className="hover:text-[#00A89E] transition-colors text-left">Ganhos</button></li>
                <li><button onClick={(e) => { const nav = document.querySelector('nav'); if(nav) { const link = nav.querySelector('a[href="#portfolio"]'); if(link) (link as any).click(); } }} className="hover:text-[#00A89E] transition-colors text-left">Portfólio COBAN</button></li>
              </ul>
            </div>

            <div className="space-y-12">
              <div className="space-y-4">
                <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Atendimento</h4>
                <p className="text-white font-black text-2xl">92 98106-1163</p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-white font-black text-xs uppercase tracking-[0.3em]">Jurídico</h4>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                  <li><button onClick={() => setLegalModal('privacy')} className="hover:text-[#00A89E] transition-colors">Privacidade</button></li>
                  <li><button onClick={() => setLegalModal('terms')} className="hover:text-[#00A89E] transition-colors">Termos</button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-24 pt-12 border-t border-white/5 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
              © 2026 ComprePag — Uma empresa gerida por Tek Soluções | CNPJ 07.833.758/0001-50. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
