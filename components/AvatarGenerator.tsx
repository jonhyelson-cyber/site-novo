
import React, { useState } from 'react';
import { BRAND_IMAGES } from '../constants/images.ts';
import { generateRepresentativeAvatar } from '../services/imageService.ts';

const AvatarGenerator: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateAvatar = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const aistudio = (window as any).aistudio;
      if (aistudio) {
        const hasKey = await aistudio.hasSelectedApiKey();
        if (!hasKey) {
          await aistudio.openSelectKey();
        }
      }

      const response = await fetch(BRAND_IMAGES.PRODUCT_MACHINE);
      const blob = await response.blob();
      const reader = new FileReader();
      
      reader.onloadend = async () => {
        const base64data = (reader.result as string).split(',')[1];
        try {
          const result = await generateRepresentativeAvatar(base64data);
          if (result) setAvatarUrl(result);
        } catch (err: any) {
          if (err.message === "API_KEY_EXPIRED_OR_INVALID") {
            setError("É necessária uma chave de API paga para gerar avatares realistas.");
            await (window as any).aistudio?.openSelectKey();
          } else {
            setError("Falha ao gerar avatar. Tente novamente.");
          }
        } finally {
          setIsLoading(false);
        }
      };
      reader.readAsDataURL(blob);

    } catch (err) {
      console.error(err);
      setError("Erro ao processar a requisição.");
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#00A89E]/10 text-[#00A89E] text-[10px] font-black uppercase tracking-[0.4em]">
              Seja a cara do sucesso
            </div>
            <h2 className="text-5xl font-black text-[#001B3D] leading-tight tracking-tighter uppercase italic">
              Imagine-se como um <br/>
              <span className="text-[#00A89E]">Líder ComprePag</span>
            </h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-xl">
              Nossa tecnologia permite que você visualize o potencial da sua nova carreira. 
              Gere agora uma representação realista de como você se posicionará no mercado com a ComprePag.
            </p>
            
            <div className="flex flex-col space-y-4">
              <button 
                onClick={handleGenerateAvatar}
                disabled={isLoading}
                className="group relative inline-flex items-center justify-center px-10 py-6 bg-[#001B3D] text-white rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-[#002a5c] transition-all shadow-2xl disabled:opacity-50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                {isLoading ? (
                  <span className="flex items-center space-x-3">
                    <svg className="animate-spin h-5 w-5 text-[#00A89E]" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    <span>CRIANDO SEU AVATAR...</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-3">
                    <span>✨ GERAR AVATAR REALISTA</span>
                  </span>
                )}
              </button>
              {error && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest">{error}</p>}
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                * Requer chave API Gemini 3 Pro habilitada com faturamento.
              </p>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-full max-w-lg aspect-square rounded-[4rem] bg-gray-200 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative group border-8 border-white">
              {avatarUrl ? (
                <img src={avatarUrl} alt="Avatar de Representante" className="w-full h-full object-cover animate-in fade-in zoom-in duration-700" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="text-6xl mb-6 opacity-20 group-hover:scale-110 transition-transform duration-500">👤</div>
                  <p className="text-gray-400 font-black text-xs uppercase tracking-[0.3em]">Clique para gerar sua prévia</p>
                </div>
              )}
              
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white/40 shadow-xl">
                    <p className="text-[10px] font-black text-[#00A89E] uppercase tracking-widest mb-1">Status do Parceiro</p>
                    <p className="text-[#001B3D] font-black text-xl tracking-tighter uppercase italic">Futuro Diamante</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvatarGenerator;
