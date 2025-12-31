
import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showFullPolicy, setShowFullPolicy] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('comprepag-cookie-consent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('comprepag-cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible && !showFullPolicy) return null;

  return (
    <>
      {/* Cookie Banner */}
      {isVisible && (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[110] animate-in slide-in-from-bottom-10 duration-700">
          <div className="bg-white/90 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#00A89E]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🍪</span>
              </div>
              <div className="flex-1">
                <h4 className="text-[#001B3D] font-black uppercase text-xs tracking-widest mb-2">Respeitamos sua Privacidade</h4>
                <p className="text-gray-500 text-xs font-semibold leading-relaxed">
                  Utilizamos cookies para melhorar sua experiência em nosso portal e analisar nosso tráfego de acordo com a nossa Política de Privacidade.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={handleAccept}
                    className="flex-1 bg-[#00A89E] text-white py-3 px-6 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#008e85] transition-all"
                  >
                    Aceitar Todos
                  </button>
                  <button 
                    onClick={() => setShowFullPolicy(true)}
                    className="flex-1 bg-gray-100 text-gray-600 py-3 px-6 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all"
                  >
                    Ler Política
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Policy Modal */}
      {showFullPolicy && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-10">
          <div 
            className="absolute inset-0 bg-[#001B3D]/80 backdrop-blur-md"
            onClick={() => setShowFullPolicy(false)}
          ></div>
          <div className="relative bg-white w-full max-w-3xl max-h-[80vh] overflow-hidden rounded-[3rem] shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
            <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="text-xl font-black text-[#001B3D] uppercase tracking-tighter italic">Política de <span className="text-[#00A89E]">Cookies</span></h3>
              <button 
                onClick={() => setShowFullPolicy(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-[#001B3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-10 space-y-8 text-gray-600 font-medium text-sm leading-relaxed">
              <section>
                <h4 className="text-[#001B3D] font-black uppercase text-xs tracking-[0.2em] mb-4">1. O que são cookies?</h4>
                <p>Cookies são pequenos arquivos de texto enviados pelo site ao seu computador ou dispositivo móvel para coletar informações sobre sua atividade e preferências. Eles nos ajudam a tornar sua visita mais eficiente e personalizada.</p>
              </section>

              <section>
                <h4 className="text-[#001B3D] font-black uppercase text-xs tracking-[0.2em] mb-4">2. Como utilizamos os cookies?</h4>
                <p>A ComprePag utiliza cookies para as seguintes finalidades:</p>
                <ul className="list-disc ml-5 mt-3 space-y-2">
                  <li><strong className="text-[#001B3D]">Cookies Essenciais:</strong> Necessários para o funcionamento básico do site, como navegação segura e acesso a áreas logadas de parceiros.</li>
                  <li><strong className="text-[#001B3D]">Cookies de Desempenho:</strong> Coletam informações anônimas sobre como os visitantes usam o site, ajudando-nos a identificar problemas e melhorar a usabilidade.</li>
                  <li><strong className="text-[#001B3D]">Cookies de Marketing:</strong> Utilizados para rastrear a eficácia de nossas campanhas de recrutamento de parceiros e exibir anúncios relevantes.</li>
                </ul>
              </section>

              <section>
                <h4 className="text-[#001B3D] font-black uppercase text-xs tracking-[0.2em] mb-4">3. Gestão de Consentimento</h4>
                <p>Ao navegar em nosso portal e clicar em "Aceitar", você concorda com o uso de cookies. Você pode alterar as configurações do seu navegador a qualquer momento para bloquear ou excluir cookies, mas isso pode afetar a funcionalidade de algumas partes do site.</p>
              </section>

              <section>
                <h4 className="text-[#001B3D] font-black uppercase text-xs tracking-[0.2em] mb-4">4. LGPD e Privacidade</h4>
                <p>O tratamento de seus dados segue rigorosamente as diretrizes da Lei Geral de Proteção de Dados (LGPD). Seus dados de navegação são tratados com segurança e transparência para garantir sua integridade.</p>
              </section>
            </div>

            <div className="p-8 border-t border-gray-100 bg-gray-50/50 text-center">
              <button 
                onClick={() => {
                  handleAccept();
                  setShowFullPolicy(false);
                }}
                className="bg-[#00A89E] text-white py-4 px-12 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#008e85] transition-all shadow-xl shadow-[#00A89E]/20"
              >
                Entendido e Aceitar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
