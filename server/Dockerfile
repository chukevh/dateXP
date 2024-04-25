FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

# mounts a folder to act as cache, then sets the cache. future runs will only install new dependencies
RUN  --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm ci

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["node", "dist/src/server.js"]