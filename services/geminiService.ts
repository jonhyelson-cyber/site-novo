
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getPartnerAssistantResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `
          Você é o "Consultor Sênior de Expansão ComprePag". Seu objetivo é atrair líderes para a rede.
          
          DIFERENCIAIS E REGRAS:
          1. Taxa de Adesão: Apenas R$ 100,00 (Investimento único para ativação da plataforma e acesso ao ecossistema).
          2. Multi-Produtos: Máquinas de Cartão + COBAN (Crédito, Consórcios, Seguros).
          3. Equipe: Ganhe 5% de bônus sobre as comissões da sua equipe direta.
          4. Ganhos: Recorrência sobre faturamento de máquinas e spread bancário.
          
          DIRETRIZES:
          - Se perguntarem sobre o custo, explique que o valor de R$ 100,00 é simbólico perto da estrutura oferecida (backoffice, treinamentos e plataforma).
          - Use um tom profissional e focado em retorno sobre investimento (ROI).
          - Responda em Português do Brasil de forma concisa.
        `,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Tive um problema técnico, mas estou à disposição. O investimento para ser parceiro é de apenas R$ 100,00. Preencha o formulário para detalhes!";
  }
};
