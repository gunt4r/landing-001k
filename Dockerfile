# Base stage - dependencies
FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./

# Install dependencies
FROM base AS deps
RUN npm ci

# Builder stage
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production runner stage
FROM node:22-alpine AS runner
RUN apk add --no-cache \
    libc6-compat \
    openssl \
    tzdata \
    && addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

RUN chown -R nextjs:nodejs /app
USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})" || exit 1

CMD ["node", "server.js"]

# syntax=docker/dockerfile:1

# FROM node:22-alpine AS development

# RUN apk add --no-cache libc6-compat openssl tzdata

# WORKDIR /app

# ENV NODE_ENV=development
# ENV NEXT_TELEMETRY_DISABLED=1

# COPY package*.json ./

# RUN npm ci && npm cache clean --force

# COPY . .

# EXPOSE 3000

# CMD ["npm", "run", "dev"]