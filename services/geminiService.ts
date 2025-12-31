
import { GoogleGenAI } from "@google/genai";

export const getPartnerAssistantResponse = async (userMessage: string) => {
  // Verificação segura para evitar erro de 'process is not defined' no browser puro
  let apiKey = "";
  try {
    apiKey = process.env.API_KEY || "";
  } catch (e) {
    console.warn("API_KEY não encontrada no ambiente.");
  }
  
  if (!apiKey || apiKey === "undefined") {
    return "Olá! Para que eu possa te ajudar com a IA, é necessário configurar a chave API_KEY no painel do Vercel. Mas já te adianto: a adesão é de apenas R$ 100,00 e o retorno é recorrente!";
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `
          Você é o "Consultor Sênior de Expansão ComprePag". Seu objetivo é atrair líderes para a rede.
          
          DIFERENCIAIS E REGRAS:
          1. Taxa de Adesão: Apenas R$ 100,00 (Investimento único).
          2. Multi-Produtos: Máquinas de Cartão + COBAN (Crédito, Consórcios, Seguros).
          3. Equipe: Ganhe bônus sobre as comissões da sua equipe.
          4. Ganhos: Recorrência real.
          
          DIRETRIZES:
          - Tom profissional e focado em ROI.
          - Responda de forma concisa em Português.
        `,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Tivemos um pequeno problema técnico na minha rede neural, mas os planos da ComprePag continuam imbatíveis: R$ 100 de adesão!";
  }
};
