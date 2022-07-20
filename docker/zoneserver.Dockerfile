FROM node:16-alpine 
WORKDIR /usr/src/app
COPY . .
RUN npm i --production
# Zone server port
EXPOSE 1117/udp
CMD [ "node", "./out/zoneserver.js", "--max-old-space-size 400"  ]
