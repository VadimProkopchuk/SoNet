FROM node:12
WORKDIR /usr/src/api

COPY package.json ./
COPY yarn.lock ./

RUN yarn install && yarn add nodemon -global

COPY . .

CMD [ "yarn", "start" ]
