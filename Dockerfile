FROM node:16

WORKDIR /code/

COPY yarn.lock /code/

RUN yarn install

COPY . /code/

RUN yarn build

CMD ["yarn", "--silent", "start"]