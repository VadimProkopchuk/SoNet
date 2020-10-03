FROM node:12
WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

RUN npm install react-scripts@3.4.3 -g
RUN yarn install

COPY . .
CMD ["yarn", "start"]
