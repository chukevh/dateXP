FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

# mounts a folder to act as cache, then sets the cache. future runs will only install new dependencies
RUN  --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm ci

USER node

COPY --chown=node:node . .

EXPOSE 5000

CMD ["node", "dist/server.js"]