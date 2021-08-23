FROM node:14-slim as build

RUN apt-get update \
 && apt-get install -y procps git net-tools curl  \
 && mkdir format-transformer-panel \
 && npm install -g @angular/cli \
 && npm install --save-dev @angular-devkit/build-angular

COPY . /format-transformer-panel

WORKDIR /format-transformer-panel

RUN ng build --configuration production

FROM nginx:1.21.1-alpine

COPY --from=build /format-transformer-panel/dist/format-transformer-panel /usr/share/nginx/html
