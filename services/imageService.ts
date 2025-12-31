
import { GoogleGenAI } from "@google/genai";

// Fix: Standard machine image generation using Gemini 3 Pro Image
export const generate3DMachineImage = async (base64Image: string) => {
  // Always create a new instance right before use to ensure latest API key
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
            text: 'Studio product photography of a modern credit card machine. High-end lighting, clean white background, 8K resolution, vibrant colors. Cinematic bokeh and realistic textures.',
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
      throw new Error("Nenhum conteúdo retornado pela IA.");
    }

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("Dado de imagem não encontrado.");
  } catch (error: any) {
    console.error("Image Generation Error:", error);
    const msg = error?.message || "";
    if (msg.includes("permission denied") || msg.includes("Requested entity was not found")) {
      throw new Error("API_KEY_EXPIRED_OR_INVALID");
    }
    throw error;
  }
};

// Fix: Added missing export generateRepresentativeAvatar for AvatarGenerator component
export const generateRepresentativeAvatar = async (base64Image: string) => {
  // Always create a new instance right before use to ensure latest API key
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
            text: 'A professional and friendly Brazilian business representative holding a modern credit card machine (maquininha de cartão). High-end corporate portrait photography, soft studio lighting, blurred office background. Photorealistic, 8K resolution.',
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
      throw new Error("Nenhum conteúdo retornado pela IA.");
    }

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("Dado de imagem não encontrado.");
  } catch (error: any) {
    console.error("Avatar Generation Error:", error);
    const msg = error?.message || "";
    if (msg.includes("permission denied") || msg.includes("Requested entity was not found")) {
      throw new Error("API_KEY_EXPIRED_OR_INVALID");
    }
    throw error;
  }
};
