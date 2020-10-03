FROM node:12
WORKDIR /usr/src/api

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

CMD [ "node", "index.js" ]
