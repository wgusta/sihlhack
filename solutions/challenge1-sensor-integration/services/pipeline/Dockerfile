FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY pipeline_service.ts ./
EXPOSE 8080
CMD ["npx", "tsx", "pipeline_service.ts"]
