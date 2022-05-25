FROM node:18-alpine3.15

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY index.js .

RUN npm install

ENTRYPOINT ["node", "index.js"]
