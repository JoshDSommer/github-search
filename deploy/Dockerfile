FROM node:14.18-alpine as builder

WORKDIR /builder

ADD . .

RUN npm ci

CMD ["npm", "run", "docker-ci"]
