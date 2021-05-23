# Dockerfile
FROM node:16-alpine3.11
# USER node
RUN mkdir /home/node/squawkbox
RUN mkdir /home/node/squawkbox/node_modules
# RUN mkdir /home/node/squawkbox && chown node:node /home/node/squawkbox
# RUN mkdir /home/node/squawkbox/node_modules && chown node:node /home/node/squawkbox/node_modules
WORKDIR  /home/node/squawkbox
# COPY --chown=node:node package.json package-lock.json ./
COPY package.json package-lock.json ./
RUN npm ci --quiet
# COPY --chown=node:node . .
COPY . .
#RUN chmod -R 777 ./
EXPOSE 4200

#RUN sysctl fs.inotify.max_user_watches=524288
#RUN echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf
#RUN sysctl -p --system

CMD ["npm", "start"]
