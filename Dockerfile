# The instructions for the first stage
FROM node:10-alpine as builder

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
RUN npm set progress=true && npm config set depth 0
COPY package*.json ./
RUN npm install

# The instructions for second stage 
FROM node:10-alpine

WORKDIR /usr/src/app
COPY --from=builder node_modules node_modules

COPY . .

CMD [ "npm", "run", "start" ] 