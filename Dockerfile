# syntax=docker/dockerfile:1.7

FROM oven/bun:slim AS deps
WORKDIR /app

COPY package.json bun.lock ./
RUN --mount=type=cache,target=/root/.bun/install/cache \
    bun install --frozen-lockfile

FROM deps AS build
COPY . .
RUN bun run build:vinext

FROM oven/bun:slim AS runner
WORKDIR /app

ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0 \
    HOME=/tmp

COPY --from=build /app/dist ./dist
COPY --from=deps /app/node_modules ./node_modules
COPY package.json bun.lock ./

EXPOSE 3000
USER 1001:1001
ENTRYPOINT ["bun", "run", "start:vinext"]
