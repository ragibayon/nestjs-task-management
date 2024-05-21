FROM node:alpine as development

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3500

CMD ["npm", "run", "start:dev"]