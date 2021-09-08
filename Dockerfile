FROM node:16

WORKDIR /CODE/

COPY package.json yarn.lock /CODE/

RUN yarn install --non-interactive

COPY . /CODE/

RUN yarn build

CMD ["node", "."]