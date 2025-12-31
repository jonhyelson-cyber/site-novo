
import React from 'react';

interface LegalModalsProps {
  isOpen: 'privacy' | 'terms' | null;
  onClose: () => void;
}

const LegalModals: React.FC<LegalModalsProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const content = {
    privacy: {
      title: 'Política de Privacidade',
      sections: [
        {
          h: '1. Coleta de Informações',
          p: 'Coletamos dados fornecidos voluntariamente através de nossos formulários de contato, como nome, e-mail e WhatsApp, exclusivamente para fins de recrutamento e expansão da rede ComprePag.'
        },
        {
          h: '2. Uso dos Dados',
          p: 'Seus dados são utilizados para entrar em contato sobre a oportunidade de parceria, enviar materiais informativos e realizar o credenciamento inicial em nossa plataforma.'
        },
        {
          h: '3. Proteção e LGPD',
          p: 'Seguimos rigorosamente a Lei Geral de Proteção de Dados (LGPD). Seus dados não são compartilhados com terceiros sem consentimento e são armazenados em servidores seguros com criptografia de ponta.'
        },
        {
          h: '4. Seus Direitos',
          p: 'Você tem o direito de solicitar a exclusão, correção ou acesso aos seus dados a qualquer momento através de nossos canais de atendimento oficiais.'
        }
      ]
    },
    terms: {
      title: 'Termos e Condições de Uso',
      sections: [
        {
          h: '1. Aceitação dos Termos',
          p: 'Ao acessar este portal, você concorda em cumprir estes termos de uso, todas as leis e regulamentos aplicáveis. O conteúdo deste site é destinado a potenciais parceiros comerciais.'
        },
        {
          h: '2. Propriedade Intelectual',
          p: 'Todo o conteúdo, logotipos, designs e tecnologias apresentados são de propriedade exclusiva da ComprePag. É proibida a reprodução total ou parcial sem autorização prévia por escrito.'
        },
        {
          h: '3. Adesão ao Programa',
          p: 'O preenchimento do formulário não garante o credenciamento imediato. A adesão de R$ 100,00 mencionada refere-se à taxa de ativação da plataforma de gestão após a aprovação do perfil do parceiro.'
        },
        {
          h: '4. Responsabilidade',
          p: 'A ComprePag se esforça para manter as informações atualizadas, mas não se responsabiliza por lucros cessantes baseados em projeções de ganhos, que podem variar conforme o desempenho individual.'
        }
      ]
    }
  };

  const active = content[isOpen];

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-10">
      <div 
        className="absolute inset-0 bg-[#001B3D]/90 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      ></div>
      <div className="relative bg-white w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-[3rem] shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
        <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="text-xl font-black text-[#001B3D] uppercase tracking-tighter italic">
            {active.title.split(' ')[0]} <span className="text-[#00A89E]">{active.title.split(' ').slice(1).join(' ')}</span>
          </h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-6 h-6 text-[#001B3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-10 space-y-10 text-gray-600 font-medium text-sm leading-relaxed">
          {active.sections.map((sec, i) => (
            <section key={i}>
              <h4 className="text-[#001B3D] font-black uppercase text-xs tracking-[0.2em] mb-4">{sec.h}</h4>
              <p>{sec.p}</p>
            </section>
          ))}
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest pt-10 border-t border-gray-50">
            Última atualização: Fevereiro de 2026 • ComprePag — Uma empresa gerida por Tek Soluções | CNPJ 07.833.758/0001-50
          </p>
        </div>

        <div className="p-8 border-t border-gray-100 bg-gray-50/50 text-center">
          <button 
            onClick={onClose}
            className="bg-[#001B3D] text-white py-4 px-12 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#001129] transition-all shadow-xl"
          >
            Fechar Visualização
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModals;
