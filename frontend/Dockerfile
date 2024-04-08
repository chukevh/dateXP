FROM node:20-alpine as build

ARG REACT_APP_GOOGLE_API_KEY

WORKDIR /usr/src/app

COPY package*.json ./

RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm ci

COPY . .

ENV REACT_APP_GOOGLE_API_KEY $REACT_APP_GOOGLE_API_KEY

RUN npm run build

###
FROM nginx:1.25.4-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build usr/src/app/build/ /usr/share/nginx/html

EXPOSE 8080