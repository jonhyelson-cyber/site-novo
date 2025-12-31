
import { GoogleGenAI } from "@google/genai";

export const generate3DMachineImage = async (base64Image: string) => {
  // CRITICAL: Instantiate GoogleGenAI inside the function to pick up the updated process.env.API_KEY
  // after the user selects their key via window.aistudio.openSelectKey().
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: 'image/png',
            },
          },
          {
            text: 'Create a hyper-realistic, high-end 3D studio render of this specific credit card machine. Cinematic studio lighting, soft shadows, premium metallic and matte plastic textures. The screen should look high-resolution and vibrant. 8K quality, sharp focus, clean neutral background. Style: Minimalist, professional product photography like a premium tech brand launch.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
          imageSize: "1K"
        },
      },
    });

    if (!response.candidates?.[0]?.content?.parts) {
      throw new Error("Falha ao gerar a imagem: Nenhum conteúdo retornado pela IA.");
    }

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("Nenhum dado de imagem encontrado na resposta da IA.");
  } catch (error: any) {
    console.error("Image Generation Error:", error);
    // If the request fails with this specific error, it means the key is invalid or selection is required
    if (error?.message?.includes("Requested entity was not found")) {
      throw new Error("API_KEY_EXPIRED_OR_INVALID");
    }
    throw error;
  }
};
