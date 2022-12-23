# syntax=docker/dockerfile:1
FROM node:18

WORKDIR /ConditionOnTheHill

COPY package*.json ./

RUN yarn install

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["yarn", "start"]