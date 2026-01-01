
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: ''
  });

  const whatsappNumber = "5592981061163";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Formata a mensagem para o WhatsApp
    const message = encodeURIComponent(
      `*NOVO LEAD - PORTAL COMPREPAG*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n` +
      `*E-mail:* ${formData.email}\n\n` +
      `_Interessado em se tornar representante líder._`
    );
    
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Simula um delay de processamento para feedback visual
    setTimeout(() => {
      setStatus('success');
      // Abre o WhatsApp em uma nova aba
      window.open(whatsappLink, '_blank');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl text-center border-4 border-[#00A89E] max-w-2xl mx-auto my-12 animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-[#00A89E]/10 rounded-full flex items-center justify-center mx-auto mb-8 text-[#00A89E]">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
        </div>
        <h3 className="text-4xl font-black text-[#001B3D] mb-4 tracking-tighter uppercase italic">Dados Enviados!</h3>
        <p className="text-gray-600 text-xl font-medium leading-relaxed">
          Obrigado, <span className="text-[#00A89E] font-black">{formData.nome.split(' ')[0]}</span>! 
          Sua mensagem foi enviada. Caso o WhatsApp não tenha aberto automaticamente, clique no botão abaixo.
        </p>
        <div className="mt-8">
            <button 
              onClick={() => {
                const message = encodeURIComponent(`*NOVO LEAD*\n*Nome:* ${formData.nome}\n*WhatsApp:* ${formData.whatsapp}\n*E-mail:* ${formData.email}`);
                window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
              }}
              className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all"
            >
              Abrir WhatsApp Novamente
            </button>
        </div>
        <button 
          onClick={() => {
            setFormData({nome: '', whatsapp: '', email: ''});
            setStatus('idle');
          }}
          className="mt-10 text-gray-400 font-black uppercase tracking-[0.2em] text-xs hover:underline block mx-auto"
        >
          Novo cadastro
        </button>
      </div>
    );
  }

  return (
    <section className="py-32 bg-[#001B3D] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A89E] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFCC00] rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="text-white space-y-10">
            <div className="inline-block px-4 py-1 rounded-full border border-[#00A89E] text-[#00A89E] text-[10px] font-black uppercase tracking-[0.4em]">
              Seja um parceiro líder
            </div>
            <h2 className="text-6xl font-black tracking-tighter leading-none">
              Inicie sua <br/>
              <span className="text-[#00A89E]">Expansão.</span>
            </h2>
            <p className="text-xl text-blue-100/60 max-w-lg leading-relaxed font-medium">
              Garanta sua plataforma oficial ComprePag por apenas R$ 100,00 e tenha acesso às ferramentas para recrutar e gerir sua própria equipe.
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              {[
                { t: "Recrutamento de Equipe", d: "Monte seu time e ganhe bônus sobre o faturamento deles." },
                { t: "Ativação Instantânea", d: "Acesso ao painel em até 15 minutos." },
                { t: "Portfólio COBAN Completo", d: "Venda Crédito, Seguros e Consórcios com altas margens." },
                { t: "Atendimento VIP", d: "Linha direta com o time de implantação." }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-5 group">
                  <div className="bg-[#00A89E] p-2 rounded-xl group-hover:scale-110 transition-transform shadow-lg shadow-[#00A89E]/20">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <div>
                    <h4 className="font-black text-white uppercase tracking-wider text-sm mb-1">{item.t}</h4>
                    <p className="text-white/40 text-xs font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-12 rounded-[4rem] shadow-2xl relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FFCC00] rounded-3xl flex flex-col items-center justify-center shadow-xl rotate-12">
               <span className="text-[10px] font-black text-[#001B3D] uppercase leading-none">Adesão</span>
               <span className="text-xl font-black text-[#001B3D]">R$ 100</span>
            </div>

            <h3 className="text-3xl font-black text-[#001B3D] mb-10 tracking-tight italic uppercase">Credenciamento</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Nome Completo</label>
                <input 
                  required 
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  type="text" 
                  className="w-full px-6 py-5 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-[#00A89E] focus:bg-white outline-none transition-all font-bold text-[#001B3D]" 
                  placeholder="Ex: João Silva" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">WhatsApp Direto</label>
                <input 
                  required 
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  type="tel" 
                  className="w-full px-6 py-5 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-[#00A89E] focus:bg-white outline-none transition-all font-bold text-[#001B3D]" 
                  placeholder="(00) 00000-0000" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">E-mail de Trabalho</label>
                <input 
                  required 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  className="w-full px-6 py-5 rounded-[2rem] bg-gray-50 border-2 border-transparent focus:border-[#00A89E] focus:bg-white outline-none transition-all font-bold text-[#001B3D]" 
                  placeholder="seuemail@exemplo.com" 
                />
              </div>
              
              <div className="pt-6">
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-[#00A89E] text-white py-6 rounded-[2rem] font-black text-xl hover:bg-[#008e85] transition-all shadow-2xl shadow-[#00A89E]/40 disabled:opacity-50 hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-4"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      <span>ENVIANDO...</span>
                    </>
                  ) : 'SEJA REPRESENTANTE AGORA'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
