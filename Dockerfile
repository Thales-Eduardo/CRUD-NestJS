FROM node:14-alpine

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli@7.5.6

USER node

WORKDIR /home/node/app

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
