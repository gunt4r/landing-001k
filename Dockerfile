# syntax=docker/dockerfile:1

FROM node:22-alpine AS development

RUN apk add --no-cache libc6-compat openssl tzdata

WORKDIR /app

ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

COPY package*.json ./

RUN npm ci && npm cache clean --force

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
