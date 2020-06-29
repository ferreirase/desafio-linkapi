FROM node:10.15.3-alpine

WORKDIR /home/node/app

COPY package*.json ./
ADD package*.json ./

RUN npm i

COPY . .

EXPOSE 3333

USER node

CMD ["npm", "run", "dev", "--host", "0.0.0.0"]
