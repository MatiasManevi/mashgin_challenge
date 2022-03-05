FROM node:10.15.3 AS ui-build
WORKDIR /usr/src/app
COPY front/ /usr/src/app

RUN npm install
RUN npm run-script build
RUN npm prune --production


FROM node:10.15.3 AS server-build
WORKDIR /usr/src/app/

COPY --from=ui-build /usr/src/app/build/ /usr/src/app/public/
COPY ./back/ /usr/src/app/

RUN npm install --production

EXPOSE 7070

CMD ["npm", "start"]
