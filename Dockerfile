FROM node:stretch as build

RUN apt-get update \
 && apt-get install -y procps git net-tools curl vim \
 && mkdir format-transformer-panel \
 && npm install -g @angular/cli

COPY . /format-transformer-panel

WORKDIR /format-transformer-panel

RUN ng build

FROM nginx:1.21.1

COPY --from=build /format-transformer-panel/dist/format-transformer-panel /usr/share/nginx/html
