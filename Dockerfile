FROM node:latest AS builder
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile && yarn build-prod

FROM nginx:latest
COPY --from=builder /app/dist /usr/share/nginx/html