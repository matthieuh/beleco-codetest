FROM node:10-alpine

RUN mkdir -p /usr/src/app 

WORKDIR /usr/src/app

COPY package*.json ./
RUN ls -al
RUN npm install --production

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]