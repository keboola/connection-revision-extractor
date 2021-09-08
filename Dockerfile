FROM node:16

WORKDIR /code/

COPY package.json yarn.lock /code/

RUN yarn install --non-interactive

COPY . /code/

RUN yarn build

CMD ["node", "."]