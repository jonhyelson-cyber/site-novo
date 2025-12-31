
# 🚀 Guia de Implantação ComprePag no Vercel

Siga estes passos para colocar seu portal de parceiros no ar com o Chatbot funcionando:

## 1. Variáveis de Ambiente (Configuração da IA)
O Chatbot precisa da sua chave de API do Google Gemini.
1. No painel do seu projeto no **Vercel**, vá em **Settings** > **Environment Variables**.
2. Adicione uma nova variável:
   - **Key:** `API_KEY`
   - **Value:** [Sua Chave da API do Google AI Studio]
3. Clique em **Save**.

## 2. Aplicando a Chave
As variáveis de ambiente só entram em vigor em um novo "Build".
1. Vá na aba **Deployments**.
2. Clique nos três pontinhos `...` ao lado do último deploy.
3. Selecione **Redeploy**.

## 3. Comandos de Build
Se o Vercel perguntar, use estas configurações:
- **Framework Preset:** `Vite` (ou `Other` se não listar)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

---
*Dica: Caso o Chatbot responda com erro técnico, verifique se sua chave da API ainda é válida no [Google AI Studio](https://aistudio.google.com/).*
