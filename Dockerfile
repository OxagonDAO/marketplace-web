FROM node:20

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package.json /home/app

RUN test -d /home/app/node_modules || npm i

EXPOSE 3000

CMD [ "npm", "run", "production" ]