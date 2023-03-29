FROM node:16

COPY ./package.json /class_build/
COPY ./yarn.lock /class_build/
WORKDIR /class_build/
RUN yarn install

# RUN mkdir class_build => 아래에서 COPY 할때 자동으로 만들어 주므로 굳이 안 써도됨
COPY . /class_build/
RUN yarn build
CMD yarn start