# Use uma imagem Node.js como base
FROM node:18

# Crie e defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de dependência e o package.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todos os arquivos para o diretório de trabalho
COPY . .

# Exponha a porta em que o Next.js irá rodar
EXPOSE 3000

# Comando para iniciar o projeto Next.js
CMD ["npm", "run", "start", "--", "-H", "0.0.0.0", "-p", "3000"]

