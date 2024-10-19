FROM node:20

WORKDIR /website

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install
COPY . .