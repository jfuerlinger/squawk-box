# Dockerfile
FROM node:lts
RUN mkdir /home/node/squawk-box && chown node:node /home/node/squawk-box
RUN mkdir /home/node/squawk-box/node_modules && chown node:node /home/node/squawk-box/node_modules
WORKDIR  /home/node/squawk-box
USER node