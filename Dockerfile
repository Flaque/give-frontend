FROM node:carbon

COPY package*.json ./

COPY . .

RUN yarn install
RUN yarn build
RUN yarn start

EXPOSE 3000