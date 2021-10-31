FROM node:16

RUN mkdir /app

WORKDIR /app

COPY --chown=node package*.json ./

RUN npm install

COPY --chown=node . .

RUN npm run build:ts

ENV HOST=0.0.0.0 PORT=3000

EXPOSE ${PORT}
CMD [ "node", "." ]
