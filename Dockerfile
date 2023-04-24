FROM node:14-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 3000
ENTRYPOINT ["yarn", "start", "&&", "tail", "-f", "/dev/null"]