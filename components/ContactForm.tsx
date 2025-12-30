
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-12 rounded-[3rem] shadow-2xl text-center border-4 border-[#00A89E] max-w-2xl mx-auto my-12">
        <div className="w-20 h-20 bg-[#00A89E]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#00A89E]">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
        </div>
        <h3 className="text-3xl font-black text-[#001B3D] mb-4 tracking-tighter">Proposta Enviada!</h3>
        <p className="text-gray-600 text-lg">Seja bem-vindo à família ComprePag. Nosso time de expansão ligará para você em breve.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-[#00A89E] font-black uppercase tracking-widest text-sm hover:underline"
        >
          Enviar novo cadastro
        </button>
      </div>
    );
  }

  return (
    <section id="contato" className="py-24 bg-[#001B3D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8">
            <h2 className="text-5xl font-black tracking-tighter">Torne-se o próximo <span className="text-[#00A89E]">Líder de Região.</span></h2>
            <p className="text-xl text-gray-300">Garanta sua plataforma oficial ComprePag por apenas R$ 100,00 e inicie sua jornada como Correspondente Bancário e Gestor de Equipes.</p>
            
            <div className="space-y-4">
              {[
                "Ativação de Plataforma em 15min",
                "Certificação COBAN Gratuita",
                "Painel de Controle de Comissões",
                "Suporte 24h via WhatsApp"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="bg-[#00A89E] p-1 rounded-md">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span className="font-bold text-gray-200 uppercase text-xs tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] shadow-2xl">
            <h3 className="text-2xl font-black text-[#001B3D] mb-8 tracking-tight">Formulário de Credenciamento</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input required type="text" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#00A89E] outline-none transition-all font-medium" placeholder="Nome Completo" />
              <input required type="tel" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#00A89E] outline-none transition-all font-medium" placeholder="WhatsApp (00) 00000-0000" />
              <input required type="email" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#00A89E] outline-none transition-all font-medium" placeholder="E-mail profissional" />
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-[#00A89E] text-white py-5 rounded-2xl font-black text-xl hover:bg-[#008e85] transition-all shadow-xl shadow-[#00A89E]/20 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Processando...' : 'FINALIZAR CREDENCIAMENTO'}
                </button>
                <div className="flex items-center justify-center space-x-2 mt-6">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Taxa de Adesão:</span>
                  <span className="text-sm font-black text-[#001B3D]">R$ 100,00</span>
                  <div className="px-2 py-1 bg-[#FFCC00] text-[8px] font-black rounded text-[#001B3D] uppercase">Única Vez</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
